import Cookies from 'js-cookie'

const USER_INFO_KEY = 'USER_INFO_KEY'

// state
const state = {
  user: null,
  token: Cookies.get('token')
}

// getters
const getters = {
  user: state => state.user,
  token: state => state.token
}

// mutations
const mutations = {
  [USER_INFO_KEY](state, data) {
    state.user = data
  }
}
// actions
const actions = {

  saveToken({ commit, dispatch }, payload) {
    //
  },

  async fetchUser({ commit }) {
    // const res = await UserApi.baseInfo()
    // if (res.code !== 0) {
    //   return
    // }
    // commit(USER_INFO_KEY, res.data)
  },

  updateUser({ commit }, payload) {
  },

  logout({ commit }) {
    // try {
    //   await axios.post('logout')
    // } catch (e) { }

  }
}

export default { namespaced: true, state, getters, mutations, actions }
