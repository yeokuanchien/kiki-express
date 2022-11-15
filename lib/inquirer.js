const inquirer = require('inquirer');

module.exports = {
  askBaseDeliveryCost: () => {
    const questions = [
      {
        name: 'baseDeliveryCost',
        type: 'input',
        message: 'What is your base delivery cost',
        validate: function (value) {
          if (!value) return 'Please enter your base delivery cost';
          return isNaN(value) ? 'Please enter numeric value only' : true;
        },
      },
      {
        name: 'noOfPackages',
        type: 'input',
        message: 'How many packages:',
        validate: function (value) {
          if (!value) return 'Please enter no of packages you want to deliver';
          return isNaN(value) ? 'Please enter numeric value only' : true;
        },
      },
    ];
    return inquirer.prompt(questions);
  },

  askPackageDetails: (noOfPackages) => {
    const questions = Array.from(Array(Number(noOfPackages)), (_, index) => {
      return {
        type: 'input',
        name: `package${index + 1}`,
        message: `Please enter details for package ${
          index + 1
        } (id, weight, distance, offer code):`,
        validate: function (value) {
          if (!value.length)
            return `Please enter all details for package ${index + 1}`;

          const args = value.split(' ').filter(Boolean);

          if (args.length !== 4)
            return 'Please enter package details in this correct format (id, weight, distance, offer code)';
          if (isNaN(args[1]) || isNaN(args[2]))
            return 'Please enter numeric value only for weight and distance';
          return true;
        },
      };
    });

    return inquirer.prompt(questions);
  },

  askVehicleDetails: () => {
    const questions = [
      {
        name: 'noOfVehicles',
        type: 'input',
        message: 'What is the number of available vehicles for delivery?',
        validate: function (value) {
          if (!value) return 'Please enter your total number of vehicles.';
          return isNaN(value) ? 'Please enter numeric value only' : true;
        },
      },
      {
        name: 'maxSpeed',
        type: 'input',
        message: 'what is the vehicle maximum speed ?',
        validate: function (value) {
          if (!value) return 'Please enter vehicle maximum speed';
          return isNaN(value) ? 'Please enter numeric value only' : true;
        },
      },
      {
        name: 'maxWeight',
        type: 'input',
        message: 'what is the maximum weight the vehicle can carry?',
        validate: function (value) {
          if (!value)
            return 'Please enter the maximum weight the vehicle can carry';
          return isNaN(value) ? 'Please enter numeric value only' : true;
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
