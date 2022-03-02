import Request from '../lib/axios';

const actions = {
    login: async({ commit }, { email, password }) => { 
        let response = await Request.post('/login', { email, password });
        console.log('response', response)
        // commit('setUser', response.data.user);
    },
    logOut: async function({commit}) {
        commit('logout')
    }
}
export default actions;