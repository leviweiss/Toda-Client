/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { getData } from './services/mainService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenCategory: 1,
    chosenHomeButton: 'coupon',
    filter1Value: undefined,
    showCouponModal: false,
    couponModalToShow: undefined,
    data: undefined,
    categories: [
      {
        id: 1,
        name: 'business',
      },
      {
        id: 2,
        name: 'fashion&beauty',
      },
      {
        id: 3,
        name: 'professional',
      },
      {
        id: 4,
        name: 'alternative-medicine',
      },
      {
        id: 5,
        name: 'store',
      },
      {
        id: 6,
        name: 'takeaway&restaurant',
      },
      {
        id: 7,
        name: 'pleasure&vacation',
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
    SET_DATA(state, data) {
      state.data = data;
    },
  },
  getters: {
    allCouponsInfo: (state) => {
      let allCouponsInfo = [];
      for (let i = 0; i < state.data.catagories.length; i += 1) {
        allCouponsInfo = allCouponsInfo.concat(state.data.catagories[i].coupons);
      }
      return allCouponsInfo;
    },
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
    getAllData({ commit }) {
      const data = getData();
      commit('SET_DATA', data);
    },
  },
});
