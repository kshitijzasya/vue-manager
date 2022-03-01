import { SET_USER, SET_PROJECTS, ADD_PROJECT } from './mutation_types';

const mutations = {
    [SET_USER](state, user) {
        state = {...state, user}
    },
    [ADD_PROJECT](state, project) {
        state.projects =  [...state.projects, project]
    },
    logout(state) { console.log('logout called')
        state.user = null
    }
}

export default mutations;