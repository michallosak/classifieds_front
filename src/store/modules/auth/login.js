const state = {
    logged: !!localStorage.getItem('token'),
    logout: []
}

const getters = {
    logged: state => {
        return state.logged
    },
    logout: state => {
        return state.logout
    }
}

const actions = {
    loginUser({commit}, credentials) {
        axios.post('login', credentials)
            .then(result => {
                localStorage.setItem('token', result.data.access_token)
                commit('LOGGED')
            })
    },
    logoutUser({commit}) {
        axios.get('auth/logout')
            .then(() => {
                localStorage.removeItem('token')
                commit('LOGOUT_USER')
            })
    }
}

const mutations = {
    LOGGED(state) {
        state.logged = true
    },
    LOGOUT_USER(state) {
        state.logged = false
    }
}


export default {state, getters, mutations, actions}
