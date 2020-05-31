import getCategories from './utils';
// const axios = require('axios');

let couponId = 1;
let businessId = 1000;

function addCoupon(coupon) {
  // eslint-disable-next-line no-console
  console.log(coupon);
}

function getRandomPhoneNumber() {
  let endOfPhoneNumber = '';
  for (let i = 0; i < 7; i += 1) {
    endOfPhoneNumber += Math.floor(Math.random() * 10);
  }
  return `054-${endOfPhoneNumber}`;
}

function createCategoryData(catagoryName, numberOfElements) {
  const coupons = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    coupons.push({
      // eslint-disable-next-line no-plusplus
      id: couponId++,
      name: `${catagoryName.charAt(0)}_name${i}`,
      description: `description${i} `.repeat(10),
      priceNow: `7${i}`,
      priceBefore: `9${i}`,
      phoneNumber: getRandomPhoneNumber(),
      address: 'Tel Aviv, King George 68, Isreal',
      businessId: 1000,
    });
  }
  const businesses = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    businesses.push({
      // eslint-disable-next-line no-plusplus
      id: businessId++,
      name: `${catagoryName.charAt(0)}_name${i}`,
      description: `description${i} `.repeat(10),
    });
  }

  return {
    name: catagoryName,
    coupons,
    businesses,
  };
}

function getData() {
  const data = {};
  data.catagories = [];
  const categories = getCategories();
  for (let index = 0; index < categories.length; index += 1) {
    data.catagories.push(createCategoryData(categories[index].name, 10 + index));
  }

  // const url = `${process.env.VUE_APP_BACKEND_URL}/coupon`;
  // let data;
  // axios.get(url, {
  //   crossdomain: true,
  //   // eslint-disable-next-line no-return-assign
  // }).then((response) => {
  //   data = response;
  //   console.log(response);
  // });

  return data;
}

export {
  getData,
  addCoupon,
};
