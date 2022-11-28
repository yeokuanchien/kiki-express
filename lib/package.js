const { offerCriteria, discount } = require('../config/offer_code');

function Package(id, weight, distance, offerCode, baseDeliveryCost, speed) {
  this.id = id;
  this.weight = weight;
  this.distance = distance;
  this.offerCode = offerCode;
  this.deliveryCost = baseDeliveryCost + this.weight * 10 + this.distance * 5;
  this.discountAmount =
    Math.floor(this.deliveryCost * this.getDiscount() * 100) / 100;
  this.totalCost = this.deliveryCost - this.discountAmount;
  this.deliveryTime = speed
    ? Math.floor((this.distance / speed) * 100) / 100
    : null;
  this.estimatedDeliveryTime = null;
}

Package.prototype.getDiscount = function () {
  const checkCriteria = offerCriteria[this.offerCode];
  const eligible = checkCriteria && checkCriteria(this.distance, this.weight);
  return eligible ? discount[this.offerCode] : 0;
};

module.exports = Package;
