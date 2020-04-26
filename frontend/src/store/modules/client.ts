import axios from 'axios';

const getDefaultState = () => {
    return {
      client: []
    }
  }
  
const state = () => getDefaultState()

const getters = {
    myAccount: (state) => state.client
};

const actions = {
    resetAccountState ({ commit }) {
        commit('resetState')
      },
    // eslint-disable-next-line
    async fetchClient( {commit}, user) {
        const response = await axios.get('https://my-json-server.typicode.com/wietze-tu/tupoc/users/'+user);
            commit('setClient', response.data);
    }
};

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState())
    },
    setClient: (state, client) => (state.client = client)
};




export default {
    state,
    getters,
    actions,
    mutations
};