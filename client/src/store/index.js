import { createStore } from 'vuex';
import announcements from './modules/announcements';
import auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    announcements,
    auth
  },
  plugins: [createPersistedState()]
});

export default store;