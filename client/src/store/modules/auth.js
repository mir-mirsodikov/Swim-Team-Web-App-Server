import axios from 'axios';
const url = 'http://localhost:3000/auth'

const state = {
  token: String,
  authorized: false,
  username: String,
  nameFirst: String,
  nameLast: String,
  permission: String
};

const getters = {
  isAuthenticated: (state) => state.authorized,
  getUser: (state) => state.username,
  getFirstName: (state) => state.nameFirst,
  getToken: (state) => state.token
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
  },

  async signOut({ commit }) {
    localStorage.removeItem('token');
    commit('clearUserData');
  }
};

const mutations = {
  setUser(state, auth) {
    state.token = auth.token;
    state.username = auth.username;
    state.nameFirst = auth.nameFirst;
    state.nameLast = auth.nameLast;
    state.permission = auth.permission;
    localStorage.setItem('token', auth.token);
  },
  setAuthorized(state, token) {
    state.authorized = token;
  },
  clearUserData(state) {
    state.token = "";
    state.authorized = false;
    state.username = "";
    state.nameFirst = "";
    state.nameLast = "";
    state.permission = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};