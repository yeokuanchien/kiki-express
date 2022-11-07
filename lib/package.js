function Package(id, weight, distance, offerCode, baseDeliveryCost, speed) {
  this.id = id;
  this.weight = weight;
  this.distance = distance;
  this.offerCode = offerCode;
  this.deliveryCost = baseDeliveryCost + this.weight * 10 + this.distance * 5;
  this.discountAmount = this.deliveryCost * this.getDiscount();
  this.totalCost = this.deliveryCost - this.discountAmount;
  this.deliveryTime = speed
    ? Math.floor((this.distance / speed) * 100) / 100
    : null;
  this.estimatedDeliveryTime = null;
}

Package.prototype.getDiscount = function () {
  const discount = {
    OFR001: () => {
      return this.distance < 200 && this.weight >= 70 && this.weight <= 200
        ? 0.1
        : 0;
    },
    OFR002: () => {
      return this.distance >= 50 &&
        this.distance <= 150 &&
        this.weight >= 100 &&
        this.weight <= 250
        ? 0.07
        : 0;
    },
    OFR003: () => {
      return this.distance >= 50 &&
        this.distance <= 250 &&
        this.weight >= 10 &&
        this.weight <= 150
        ? 0.05
        : 0;
    },
  };

  if (!discount[this.offerCode]) return 0;
  return discount[this.offerCode]();
};

module.exports = Package;
