function Package(id, weight, distance, offerCode, baseDeliveryCost) {
  this.id = id;
  this.weight = weight;
  this.distance = distance;
  this.offerCode = offerCode;
  this.deliveryCost = baseDeliveryCost + this.weight * 10 + this.distance * 5;
  this.totalCost = this.deliveryCost * (1 - this.getDiscount());
}

Package.prototype.getDiscount = function () {
  const discount = {
    OFR001: () => {
      if (this.distance < 200 && this.weight < 200 && this.weight > 70)
        return 0.1;
    },
    OFR002: () => {
      if (this.distance < 200 && this.weight < 200 && this.weight > 70)
        return 0.07;
    },
    OFR003: () => {
      if (this.distance < 200 && this.weight < 200 && this.weight > 70)
        return 0.05;
    },
  };
  return discount[this.offerCode] ?? 0;
};

module.exports = Package;
