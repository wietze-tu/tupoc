
  
const state = {
    todos: [
        {
            id: 1,
            title: 'test one'
        },
        {
            id: 2,
            title: 'test two'
        }
    ]
};

const getters = {
    products: (state) => state.todos
};

const actions = {};

const mutations = {}


export default {
    state,
    getters,
    actions,
    mutations
};