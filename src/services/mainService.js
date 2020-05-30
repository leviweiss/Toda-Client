function getData() {
  const coupons = [];
  for (let i = 0; i < 10; i += 1) {
    coupons.push({
      name: `name${i}`,
      description: `description${i}`,
    });
  }
  const businesses = [];
  for (let i = 0; i < 10; i += 1) {
    businesses.push({
      name: `name${i}`,
      description: `description${i}`,
    });
  }

  const data = {};
  data.catagories = [];
  data.catagories.push({
    name: 'marketing',
    coupons,
    businesses,
  });
  return data;
}

function addCoupon(coupon) {
  // eslint-disable-next-line no-console
  console.log(coupon);
}

export {
  getData,
  addCoupon,
};
