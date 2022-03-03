import { SET_USER, SET_PROJECTS, ADD_PROJECT } from './mutation_types';

const mutations = {
    [SET_USER](state, user) { console.log('inside ser user', {...state, user})
        state.user = user
    },
    [ADD_PROJECT](state, project) {
        state.projects =  [...state.projects, project]
    },
    logout(state) { 
        state.user = null
    }
}

export default mutations;