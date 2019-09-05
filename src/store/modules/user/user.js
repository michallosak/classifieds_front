const state = {
    loggedUser: {},
    profile: {}
}

const getters = {
    loggedUser: state => {
        return state.loggedUser
    },
    profile: state => {
        return state.profile
    }
}

const actions = {
    getLoggedUser({commit}){
        axios.get('auth/user')
            .then(result => commit('LOGGED_USER', result.data.data))
            .catch(() => {
                //
            })
    },
    getProfile({commit}, id){
        axios.get(`profile/${id}`)
            .then(result => commit('PROFILE', result.data.data))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    LOGGED_USER(state, loggedUser){
        state.loggedUser = loggedUser
    },
    PROFILE(state, profile){
        state.profile = profile
    }
}

export default {state, getters, actions, mutations}