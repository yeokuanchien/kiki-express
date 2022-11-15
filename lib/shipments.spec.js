const Shipments = require('./shipments');
const Package = require('./package');

describe('Shipments function', () => {
  it('should group the packages based on maximum weight correctly', () => {
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

    expect(shipments.toDeliver).toEqual([
      { totalWeight: 185, shipment: [packageTwo, packageFour] },
      { totalWeight: 175, shipment: [packageThree] },
      { totalWeight: 155, shipment: [packageFive] },
      { totalWeight: 50, shipment: [packageOne] },
    ]);
  });

  it('should throw error if package exceed maximum weight', () => {
    const packageOne = new Package('PKG1', 250, 30, 'OFR001', 100, 70);
    const packages = [packageOne];
    const shipments = new Shipments(packages, 200);
    expect(shipments.groupByWeight).toThrowError();
  });
});
