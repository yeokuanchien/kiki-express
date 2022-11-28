function Delivery(shipments, vehicles) {
  this.shipments = shipments;
  this.vehicles = vehicles;
  this.deliveredPackages = [];

  this.estimateDeliveryTime = () => {
    let counter = 0;

    this.shipments.toDeliver.forEach(({ shipment }) => {
      this.vehicles[counter].deliver(shipment);

      if (counter === this.vehicles.length - 1) {
        counter = 0;
        vehicles.sort((a, b) => a.currentTime - b.currentTime);
      } else {
        counter++;
      }
    });

    this.deliveredPackages = vehicles
      .map((v) => v.deliveredPackages)
      .flat()
      .sort((a, b) => a.id.localeCompare(b.id));
  };
}

module.exports = Delivery;
