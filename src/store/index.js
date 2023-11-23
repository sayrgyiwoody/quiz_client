import { createStore } from 'vuex'

export default createStore({
  state: {
    loadingStatus : false,
    userId: '',
    userData : {
      
    },
    token : '',
    callbackError : null,
  },
  getters: {
    getLoadingStatus : (state) => state.loadingStatus,
    getUserId : (state) => state.userId,
    getUserData : (state) => state.userData,
    getToken : (state) => state.token,
    getCallbackError : (state) => state.callbackError,
  },
  mutations: {
  },
  actions: {
    setLoadingStatus : ({state},value) => state.loadingStatus = value,
    setToken : ({state},value) => state.token = value,
    setUserId : ({state},value) => state.userId = value,
    setUserData : ({state},value) => state.userData = value,
    setCallbackError : ({state},value) => state.callbackError = value,
  },
  modules: {
  }
})
