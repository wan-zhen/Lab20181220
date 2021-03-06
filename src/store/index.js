import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import login from './modules/login';
import drawer from './modules/drawer';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    drawer: drawer
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) =>
          localStorage.setItem(key, value, {
            expires: 3,
            secure: true
          }),
        removeItem: key => localStorage.removeItem(key)
      },
      paths: ['login.loginStatus', 'login.user']
    })
  ]
});
