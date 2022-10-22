const inquirer = require("inquirer");
const minimist = require("minimist");

module.exports = {
  askBaseDeliveryCost: () => {
    const questions = [
      {
        name: "baseDeliveryCost",
        type: "number",
        message: "What is your base delivery cost",
        validate: function (value) {
          if (value) {
            return true;
          } else {
            return "Please enter your base delivery cost";
          }
        },
      },
      {
        name: "noOfPackages",
        type: "number",
        message: "How many packages:",
        validate: function (value) {
          if (value) {
            return true;
          } else {
            return "Please enter no of packages you want to deliver";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },

  askPackageDetails: (noOfPackages) => {
    const questions = Array.from(Array(Number(noOfPackages)), (_, index) => {
      return {
        type: "input",
        name: `package${index + 1}`,
        message: `Please enter details for package ${
          index + 1
        } (id, weight, distance, offer code):`,
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return `Please enter all details for package ${index + 1}`;
          }
        },
      };
    });

    return inquirer.prompt(questions);
  },

  askVehicleDetails: () => {
    const questions = [
      {
        name: "noOfVehicles",
        type: "number",
        message: "What is the number of available vehicles for delivery?",
        validate: function (value) {
          if (value) {
            return true;
          } else {
            return "Please enter your total number of vehicles.";
          }
        },
      },
      {
        name: "maxSpeed",
        type: "number",
        message: "what is the vehicle maximum speed ?",
        validate: function (value) {
          if (value) {
            return true;
          } else {
            return "Please enter vehicle maximum speed";
          }
        },
      },
      {
        name: "maxWeight",
        type: "number",
        message: "what is the maximum weight the vehicle can carry?",
        validate: function (value) {
          if (value) {
            return true;
          } else {
            return "Please enter the maximum weight the vehicle can carry";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
