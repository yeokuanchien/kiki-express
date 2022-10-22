const Package = require("./package");
const truncate = (v) => {
  return Math.round(v * 100) / 100;
};
function Vehicle() {
  this.currentTime = 0;
  this.deliveredPackages = [];
}

Vehicle.prototype.deliver = function (shipment) {
  let max = 0;

  shipment.forEach((package) => {
    max = Math.max(package.deliveryTime, max);

    package.estimatedDeliveryTime = truncate(
      this.currentTime + package.deliveryTime
    );

    this.deliveredPackages.push(package);
  });

  this.currentTime += max * 2;
};

module.exports = Vehicle;
