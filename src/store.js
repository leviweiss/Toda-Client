/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import mainService from './services/mainService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenCategory: 3,
    chosenHomeButton: 'coupon',
    filter1Value: undefined,
    showCouponModal: false,
    couponModalToShow: undefined,
    categories: [
      {
        id: 1,
        name: 'Businesses',
      },
      {
        id: 2,
        name: 'Fashion&Beauty',
      },
      {
        id: 3,
        name: 'Professionals',
      },
      {
        id: 4,
        name: 'Alternative-Medicine',
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
        name: 'Home-Decoration',
      },
      {
        id: 8,
        name: 'Pleasure&Vacation',
      },
    ],
  },
  mutations: {
    SET_CHOSEN_CATEGORY(state, categoryId) {
      state.chosenCategory = categoryId;
    },
    SET_CHOSEN_HOME_BUTTON(state, buttonName) {
      state.chosenHomeButton = buttonName;
    },
    FILTER1_ON_CHANGE(state, value) {
      state.filter1Value = value;
    },
    OPEN_COUPON_MODAL(state, coupon) {
      state.showCouponModal = true;
      state.couponModalToShow = coupon;
    },
    CLOSE_COUPON_MODAL(state) {
      state.showCouponModal = false;
      state.couponModalToShow = undefined;
    },
    SET_COUPONS(state, coupons) {
      state.coupons = coupons;
    },
    SET_BUSINESSES(state, businesses) {
      state.businesses = businesses;
    },
  },
  getters: {

  },
  actions: {
    setChosenCategory({ commit }, categoryId) {
      commit('SET_CHOSEN_CATEGORY', categoryId);
    },
    setChosenHomeButton({ commit }, buttonName) {
      commit('SET_CHOSEN_HOME_BUTTON', buttonName);
    },
    filter1OnChange({ commit }, event) {
      commit('FILTER1_ON_CHANGE', event.target.value);
    },
    openCouponModal({ commit }, coupon) {
      commit('OPEN_COUPON_MODAL', coupon);
    },
    closeCouponModal({ commit }) {
      commit('CLOSE_COUPON_MODAL');
    },
    getCoupons({ commit }) {
      const data = mainService.getAllData();
      commit('SET_COUPONS', data.coupons);
      commit('SET_BUSINESSES', data.businesses);
    },
  },
});
