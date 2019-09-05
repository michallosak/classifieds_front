const state = {
    register: []
}

const getters = {
    register: state => {
        return state.register
    }
}

const actions = {
    registerUser({commit}, dataRegisterUser){
        axios.post('register', dataRegisterUser)
            .then(() => commit('REGISTER'))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    REGISTER(state){
        state.register = ++state.register
    }
}

export default {state, getters, actions, mutations}