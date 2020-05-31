/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { getData } from './services/backendRequests';
import getCategories from './services/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenCategory: 1,
    chosenHomeButton: 'coupon',
    filter1Value: undefined,
    showCouponModal: false,
    couponModalToShow: undefined,
    showBusinessModal: false,
    businessModalToShow: undefined,
    data: undefined,
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
      state.couponModalToShow = coupon;
      state.showCouponModal = true;
    },
    CLOSE_COUPON_MODAL(state) {
      state.couponModalToShow = undefined;
      state.showCouponModal = false;
    },
    OPEN_BUSINESS_MODAL(state, coupon) {
      state.businessModalToShow = coupon;
      state.showBusinessModal = true;
    },
    CLOSE_BUSINESS_MODAL(state) {
      state.businessModalToShow = undefined;
      state.showBusinessModal = false;
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
    allBusinessesInfo: (state) => {
      let allBusinessesInfo = [];
      for (let i = 0; i < state.data.catagories.length; i += 1) {
        allBusinessesInfo = allBusinessesInfo.concat(state.data.catagories[i].businesses);
      }
      return allBusinessesInfo;
    },
    couponsByCategory: (state) => {
      const categoryName = getCategories().find((c) => c.id === state.chosenCategory).name;
      const category = state.data.catagories.find((c) => c.name === categoryName);
      return category.coupons;
    },
    getCouponsByBusinessId: (state, getters) => (businessId) => {
      const businesses = getters.allBusinessesInfo.filter((b) => b.id >= parseInt(businessId, 10));
      return businesses;
    },
    getBusinessById: (state, getters) => (businessId) => {
      const business = getters.allBusinessesInfo.find((b) => b.id === parseInt(businessId, 10));
      return business;
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
    openBusinessModal({ commit }, coupon) {
      commit('OPEN_BUSINESS_MODAL', coupon);
    },
    closeBusinessModal({ commit }) {
      commit('CLOSE_BUSINESS_MODAL');
    },
    getAllData({ commit }) {
      const data = getData();
      commit('SET_DATA', data);
    },
  },
});
