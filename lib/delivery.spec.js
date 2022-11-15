const Delivery = require('./delivery');
const Package = require('./package');
const Vehicle = require('./vehicle');
const Shipments = require('./shipments');
describe('Delivery function', () => {
  it('should estimate delivery time correctly', () => {
    const packageOne = new Package('PKG1', 50, 30, 'OFR001', 100, 70);
    const packageTwo = new Package('PKG2', 75, 125, 'OFR008', 100, 70);
    const packageThree = new Package('PKG3', 175, 100, 'OFR003', 100, 70);
    const packageFour = new Package('PKG4', 110, 60, 'OFR002', 100, 70);
    const packageFive = new Package('PKG5', 155, 95, 'NA', 100, 70);

    const packages = [
      packageOne,
      packageTwo,
      packageThree,
      packageFour,
      packageFive,
    ];

    const shipments = new Shipments(packages, 200);

    shipments.groupByWeight();

    const newDelivery = new Delivery(shipments, [new Vehicle(), new Vehicle()]);

    newDelivery.estimateDeliveryTime();

    expect(newDelivery.deliveredPackages).toEqual([
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
      {
        deliveryCost: 1500,
        deliveryTime: 0.85,
        discountAmount: 105,
        distance: 60,
        estimatedDeliveryTime: 0.85,
        id: 'PKG4',
        offerCode: 'OFR002',
        totalCost: 1395,
        weight: 110,
      },
      {
        deliveryCost: 750,
        deliveryTime: 0.42,
        discountAmount: 0,
        distance: 30,
        estimatedDeliveryTime: 3.98,
        id: 'PKG1',
        offerCode: 'OFR001',
        totalCost: 750,
        weight: 50,
      },
      {
        deliveryCost: 2350,
        deliveryTime: 1.42,
        discountAmount: 0,
        distance: 100,
        estimatedDeliveryTime: 1.42,
        id: 'PKG3',
        offerCode: 'OFR003',
        totalCost: 2350,
        weight: 175,
      },
      {
        deliveryCost: 2125,
        deliveryTime: 1.35,
        discountAmount: 0,
        distance: 95,
        estimatedDeliveryTime: 4.19,
        id: 'PKG5',
        offerCode: 'NA',
        totalCost: 2125,
        weight: 155,
      },
    ]);
  });
});
