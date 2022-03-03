import Request from '../lib/axios';
import { SET_USER } from './mutation_types';

const actions = {
    login: async({ commit }, { email, password }) => { 
        // let response = await Request.post('/login', { email, password });
        // console.log('response', response)
        //Dummy entry
        let user = {
            name: 'Kshitij',
        };
        commit(SET_USER, user);
    },
    logOut: async function({commit}) {
        commit('logout')
    }
}
export default actions;