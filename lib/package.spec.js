const Package = require('./package');

describe('Package function', () => {
  it('Package with Promo Code OFR001 but failed to achieve promo criteria', () => {
    const newPackage = new Package('PKG1', 50, 30, 'OFR001', 100, 70);

    expect(newPackage.deliveryCost).toEqual(750);
    expect(newPackage.discountAmount).toEqual(0);
    expect(newPackage.totalCost).toEqual(750);
    expect(newPackage.deliveryTime).toEqual(0.42);
  });

  it('Package with Promo Code OFR001 but achieved promo criteria', () => {
    const newPackage = new Package('PKG1', 80, 100, 'OFR001', 100, 70);

    expect(newPackage.deliveryCost).toEqual(1400);
    expect(newPackage.discountAmount).toEqual(140);
    expect(newPackage.totalCost).toEqual(1260);
    expect(newPackage.deliveryTime).toEqual(1.42);
  });

  it('Package with Promo Code OFR002 but achieved promo criteria', () => {
    const newPackage = new Package('PKG2', 80, 100, 'OFR002', 100, 70);

    expect(newPackage.deliveryCost).toEqual(1400);
    expect(newPackage.discountAmount).toEqual(0);
    expect(newPackage.totalCost).toEqual(1400);
    expect(newPackage.deliveryTime).toEqual(1.42);
  });
  it('Package with Promo Code OFR003 but achieved promo criteria', () => {
    const newPackage = new Package('PKG2', 80, 100, 'OFR003', 100, 70);

    expect(newPackage.deliveryCost).toEqual(1400);
    expect(newPackage.discountAmount).toEqual(70);
    expect(newPackage.totalCost).toEqual(1330);
    expect(newPackage.deliveryTime).toEqual(1.42);
  });
});
