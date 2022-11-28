module.exports = {
  offerCriteria: {
    OFR001: (distance, weight) =>
      distance < 200 && weight >= 70 && weight <= 200,
    OFR002: (distance, weight) =>
      distance >= 50 && distance <= 150 && weight >= 100 && weight <= 250,
    OFR003: (distance, weight) =>
      distance >= 50 && distance <= 250 && weight >= 10 && weight <= 150,
  },
  discount: {
    OFR001: 0.1,
    OFR002: 0.07,
    OFR003: 0.05,
  },
};
