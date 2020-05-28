/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenCategory: 1,
    categories: [
      {
        id: 1,
        name: 'Businesses',
      },
      {
        id: 2,
        name: 'Fashion & Beauty',
      },
      {
        id: 3,
        name: 'Professionals',
      },
      {
        id: 4,
        name: 'Alternative Medicine',
      },
      {
        id: 5,
        name: 'Stores',
      },
      {
        id: 6,
        name: 'Restaurant',
      },
      {
        id: 7,
        name: 'Home Decoration',
      },
      {
        id: 8,
        name: 'Pleasure & Vacation',
      },
      {
        id: 9,
        name: 'Businesses',
      },
      {
        id: 10,
        name: 'Tourism & Vacation',
      },
    ],
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  },
});
