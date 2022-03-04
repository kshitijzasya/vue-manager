const getters = {
    isAuthenticated: state => !!state.user,
    loggedInUser: state => state.user,
}

export default getters;