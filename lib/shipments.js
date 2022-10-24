function Shipments (packages, maxWeight) {
  this.packages = packages.sort((a, b) => a.weight - b.weight)
  this.maxWeight = maxWeight
  this.toDeliver = []

  this.groupByWeight = () => {
    const currentPackage = this.packages[0]
    let currSum = currentPackage.weight
    let totalWeight = 0
    let start = 0
    const currentShipment = [currentPackage]
    let finalShipment = []

    for (let i = 1; i < this.packages.length; i++) {
      if (currSum <= this.maxWeight) {
        totalWeight = Math.max(totalWeight, currSum)
        if (totalWeight === currSum) finalShipment = [...currentShipment]
      }

      while (currSum + this.packages[i].weight > this.maxWeight && start < i) {
        currSum -= this.packages[start].weight
        currentShipment.shift()
        start++
      }

      currSum += this.packages[i].weight
      currentShipment.push(this.packages[i])
    }

    if (currSum <= this.maxWeight) {
      totalWeight = Math.max(totalWeight, currSum)
      if (totalWeight === currSum) finalShipment = [...currentShipment]
    }

    this.toDeliver.push({
      totalWeight,
      shipment: finalShipment
    })

    const ids = finalShipment.map((v) => v.id)

    this.packages = this.packages.filter((v) => !ids.includes(v.id))

    this.packages.sort((a, b) => a.weight - b.weight)

    if (this.packages.length !== 0) this.groupByWeight()
  }
}

module.exports = Shipments
