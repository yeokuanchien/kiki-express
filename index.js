const commander = require('commander');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const Package = require('./lib/package');
const Shipments = require('./lib/shipments');
const Vehicle = require('./lib/vehicle');
const Delivery = require('./lib/delivery');

commander
  .command('init')
  .description('hello')
  .action(async () => {
    clear();
    console.log(
      chalk.magenta(
        figlet.textSync('Kiki Express', { horizontalLayout: 'full' })
      )
    );
    const basicInfo = await inquirer.askBaseDeliveryCost();

    const rawPackageInfo = await inquirer.askPackageDetails(
      basicInfo.noOfPackages
    );

    const rawVehicleInfo = await inquirer.askVehicleDetails();

    const packages = Object.entries(rawPackageInfo).map(([_, value]) => {
      const args = value.split(' ').filter(Boolean);
      return new Package(
        args[0],
        Number(args[1]),
        Number(args[2]),
        args[3],
        Number(basicInfo.baseDeliveryCost),
        Number(rawVehicleInfo.maxSpeed)
      );
    });

    const shipments = new Shipments(packages, Number(rawVehicleInfo.maxWeight));

    shipments.groupByWeight();

    const vehicles = [...Array(Number(rawVehicleInfo.noOfVehicles))].map(
      (_) => new Vehicle()
    );

    const delivery = new Delivery(shipments, vehicles);

    delivery.estimateDeliveryTime();

    console.table(delivery.deliveredPackages);
  });

commander.parse(process.argv);
if (!commander.args.length) {
  commander.help();
}
