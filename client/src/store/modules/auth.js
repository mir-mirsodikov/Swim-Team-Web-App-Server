import axios from 'axios';
const url = 'http://localhost:3000/auth'

const state = {
  token: String,
  authorized: false,
  user: String
};

const getters = {
  isAuthenticated: (state) => state.authorized,
  getUser: (state) => state.user
};

const actions = {
  async getAuthenticated({ commit }, userData) {
    await axios.post(url, {
      username: userData.username,
      password: userData.password
    }).then(data => commit('setUser', data.data));
  },

  async isAuthorized({ commit }) {
    let response = await axios.get(url, {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    }).then(data => response = data.data);
    commit('setAuthorized', response);
  }
};

const mutations = {
  setUser(state, auth) {
    state.token = auth.token;
    state.user = auth.user;
    localStorage.setItem('token', auth.token);
  },
  setAuthorized(state, token) {
    state.authorized = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};