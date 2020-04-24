import axios from 'axios';


const state  = {
    client: []
};

const getters = {
    myAccount: (state) => state.client
};

const actions = {
    // eslint-disable-next-line
    async fetchClient( {commit}, user) {
        const response = await axios.get('https://my-json-server.typicode.com/wietze-tu/tupoc/users/'+user);
            commit('setClient', response.data);
    }
};

const mutations = {
    setClient: (state, client) => (state.client = client)
};




export default {
    state,
    getters,
    actions,
    mutations
};