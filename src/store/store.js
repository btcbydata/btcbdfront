import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var config = {
  method: 'get',
  url: 'https://api.coincap.io/v2/assets',
  headers: {}
};

export default new Vuex.Store({
  state: {
    coins: [
      {coinnames:'BITCOIN NEM TOPSHOT', date:'2021-03'},{coinnames:'BITCOIN FLOW NEM', date:'2021-04'},{coinnames:'BITCOIN DOGECOIN RIPPLE', date:'2021-05'},{coinnames:'BITCOIN DOGECOIN EINSTEIENIUM', date:'2021-06'},{coinnames:'BITCOIN NEM RIPPLE', date:'2021-07'},{coinnames:'BITCOIN DOGECOIN RIPPLE', date:'2021-08'},{coinnames:'BITCOIN ADTOKEN AELF', date:'2021-09'},{coinnames:'BITCOIN NEM TOPSHOT', date:'2021-10'},{coinnames:'BITCOIN FLOW DOGECOIN', date:'2021-10'},{coinnames:'BITCOIN NEM MATIC', date:'2021-11'},{coinnames:'BITCOIN BOBA BORA', date:'2021-12'},{coinnames:'BITCOIN MIX LUNA', date:'2022-01'},{coinnames:'BITCOIN NEM TOPSHOT', date:'2022-01'},{coinnames:'BITCOIN HUNT MIX', date:'2022-02'},{coinnames:'BITCOIN HUNT MIX', date:'2022-03'},{coinnames:'BITCOIN STEPN TETHER', date:'2022-04'},{coinnames:'BITCOIN TETHER ANKER', date:'2022-05'},{coinnames:'BITCOIN LUNA DOGECOIN', date:'2022-06'},{coinnames:'BITCOIN ZERO TETHER', date:'2022-07'},{coinnames:'BITCOIN TETHER ZERO', date:'2022-08'},{coinnames:'BITCOIN LUNA TETHER', date:'2022-09'}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
