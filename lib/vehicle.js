
const truncate = (v) => {
  return Math.round(v * 100) / 100
}
function Vehicle () {
  this.currentTime = 0
  this.deliveredPackages = []
}

Vehicle.prototype.deliver = function (shipment) {
  let max = 0

  shipment.forEach((p) => {
    max = Math.max(p.deliveryTime, max)

    p.estimatedDeliveryTime = truncate(
      this.currentTime + p.deliveryTime
    )

    this.deliveredPackages.push(p)
  })

  this.currentTime += max * 2
}

module.exports = Vehicle
