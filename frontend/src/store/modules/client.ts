//import axios from 'axios';
//import api from '../../constants/api';

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
    async fetchClient( {commit}, user) {
        console.log(user)
        //const response = await axios.get(api.getUser +'/'+ user);
        commit('setClient', user);
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