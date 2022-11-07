const Vehicle = require('./vehicle');
const Package = require('./package');

describe('Vehicle function', () => {
  it('create a instance of Vehicle object', () => {
    const newVehicle = new Vehicle();
    expect(Object.getPrototypeOf(newVehicle).constructor).toEqual(Vehicle);
  });

  it('should update current time after delivering shipments', () => {
    const v = new Vehicle();
    const packageOne = new Package('PKG1', 50, 30, 'OFR001', 100, 70);
    const packageTwo = new Package('PKG2', 75, 125, 'OFR008', 100, 70);
    const mockShipments = [packageOne, packageTwo];

    v.deliver(mockShipments);
    expect(v.currentTime).toEqual(packageTwo.deliveryTime * 2);
  });
  it('should update delivered packages after delivering shipments', () => {
    const v = new Vehicle();
    const packageOne = new Package('PKG1', 50, 30, 'OFR001', 100, 70);
    const packageTwo = new Package('PKG2', 75, 125, 'OFR008', 100, 70);
    const mockShipments = [packageOne, packageTwo];

    v.deliver(mockShipments);
    expect(v.deliveredPackages).toEqual([
      {
        deliveryCost: 750,
        deliveryTime: 0.42,
        discountAmount: 0,
        distance: 30,
        estimatedDeliveryTime: 0.42,
        id: 'PKG1',
        offerCode: 'OFR001',
        totalCost: 750,
        weight: 50,
      },
      {
        deliveryCost: 1475,
        deliveryTime: 1.78,
        discountAmount: 0,
        distance: 125,
        estimatedDeliveryTime: 1.78,
        id: 'PKG2',
        offerCode: 'OFR008',
        totalCost: 1475,
        weight: 75,
      },
    ]);
  });
});
