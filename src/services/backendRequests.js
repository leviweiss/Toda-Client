import getCategories from './utils';
// const axios = require('axios');

let couponId = 1;
let businessId = 1000;
let descriptionId = 1;
let namesId = 1;

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

const descriptions = [
  'Buy one get one-to ',
  'Nails polish in 15$ Stela’s nails',
  '40% off on Summer Collection Rona Bikinis',
  '15% off on two days zimmer Golan vacation',
  '3 hours cooking workshop in 50$ Galit home kitchen',
];

const names = [
  'Taylor spa',
  'Stela’s nails',
  'Rona Bikinis',
  'Golan vacation',
  'Galit home kitchen',
];

function getDescription() {
  // eslint-disable-next-line no-plusplus
  const index = descriptionId++ % 5;
  return descriptions[index];
}

function getName() {
  // eslint-disable-next-line no-plusplus
  const index = namesId++ % 5;
  return names[index];
}

function createCategoryData(catagoryName, numberOfElements) {
  const coupons = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    coupons.push({
      // eslint-disable-next-line no-plusplus
      id: couponId++,
      // name: `${catagoryName.charAt(0)}_name${i}`,
      name: getName(),
      // description: `description${i} `.repeat(10),
      description: getDescription(),
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
      name: getName(),
      // description: `description${i} `.repeat(10),
      description: getDescription(),
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
