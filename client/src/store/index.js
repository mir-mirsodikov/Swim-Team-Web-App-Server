import { createStore } from 'vuex';
import announcements from './modules/announcements';

const store = createStore({
  modules: {
    announcements
  }
});

export default store;