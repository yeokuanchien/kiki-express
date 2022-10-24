const commander = require('commander')
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('./lib/inquirer')
const Package = require('./lib/package')
const Shipments = require('./lib/shipments')
const Vehicle = require('./lib/vehicle')

commander
  .command('init')
  .description('hello')
  .action(async () => {
    clear()
    console.log(
      chalk.magenta(
        figlet.textSync('Kiki Express', { horizontalLayout: 'full' })
      )
    )
    const basicInfo = await inquirer.askBaseDeliveryCost()

    const rawPackageInfo = await inquirer.askPackageDetails(
      basicInfo.noOfPackages
    )

    const rawVehicleInfo = await inquirer.askVehicleDetails()

    const packages = Object.entries(rawPackageInfo).map(([_, value]) => {
      const args = value.split(' ').filter(Boolean)
      return new Package(
        args[0],
        Number(args[1]),
        Number(args[2]),
        args[3],
        basicInfo.baseDeliveryCost,
        rawVehicleInfo.maxSpeed
      )
    })

    const shipments = new Shipments(packages, rawVehicleInfo.maxWeight)
    shipments.groupByWeight()

    const vehicles = [...Array(rawVehicleInfo.noOfVehicles)].map(
      (_) => new Vehicle()
    )

    let i = 0
    shipments.toDeliver.forEach(({ shipment }) => {
      vehicles[i].deliver(shipment)
      if (i === vehicles.length - 1) {
        i = 0
        vehicles.sort((a, b) => a.currentTime - b.currentTime)
      } else {
        i++
      }
    })

    const deliveredPackages = vehicles.map((v) => v.deliveredPackages).flat()
    console.table(deliveredPackages)
  })

commander.parse(process.argv)
if (!commander.args.length) {
  commander.help()
}
