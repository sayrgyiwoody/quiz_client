import { createStore } from 'vuex'

export default createStore({
  state: {
    loadingStatus : false,
    userData : {

    },
    token : '',
  },
  getters: {
    getLoadingStatus : (state) => state.loadingStatus,
    getUserData : (state) => state.userData,
    getToken : (state) => state.token,
  },
  mutations: {
  },
  actions: {
    setLoadingStatus : ({state},value) => state.loadingStatus = value,
    setToken : ({state},value) => state.token = value,
    setUserData : ({state},value) => state.userData = value,
  },
  modules: {
  }
})
