function Vehicle() {
  this.currentTime = 0;
  this.deliveredPackages = [];
}

Vehicle.prototype.deliver = function (shipment) {
  let max = 0;

  shipment.forEach((p) => {
    max = Math.max(p.deliveryTime, max);

    p.estimatedDeliveryTime =
      Math.round((this.currentTime + p.deliveryTime) * 100) / 100;

    this.deliveredPackages.push(p);
  });

  this.currentTime += max * 2;
};

module.exports = Vehicle;
