const commander = require("commander");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("./lib/inquirer");
const Package = require("./lib/package");

commander
  .command("init")
  .description("hello")
  .action(async () => {
    clear();
    console.log(
      chalk.magenta(
        figlet.textSync("Kiki Express", { horizontalLayout: "full" })
      )
    );
    const basicInfo = await inquirer.askBaseDeliveryCost();
    console.log(basicInfo);
    const packagesInfo = await inquirer.askPackageDetails(
      basicInfo.noOfPackages
    );

    console.log(packagesInfo);
    const newPackage = new Package(1, 2, 3, 3, basicInfo.baseDeliveryCost);
    console.table([newPackage, newPackage]);
  });

commander.parse(process.argv);
if (!commander.args.length) {
  commander.help();
}
