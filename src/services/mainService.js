function getData() {
  const coupons = [];
  for (let i = 0; i < 10; i += 1) {
    coupons.push({
      name: `name${i}`,
      description: `description${i} `.repeat(10),
      priceNow: `${i}`,
      priceBefore: `${i}`,
      phoneNumber: `${i}`.repeat(10),
      address: 'Tel Aviv, King George 66, Isreal',
    });
  }
  const businesses = [];
  for (let i = 0; i < 10; i += 1) {
    businesses.push({
      name: `name${i}`,
      description: `description${i} `.repeat(10),
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
