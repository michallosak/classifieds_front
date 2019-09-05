const state = {
    message: []
}

const getters = {
    message: state => {
        return state.message
    }
}

const actions = {
    sendUserMessage({commit}, dataSendMessage)
    {
        axios.post('auth/account/message/send', dataSendMessage)
            .then(() => commit('SEND_MESSAGE'))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    SEND_MESSAGE(state)
    {
        state.message = ++state.message
    }
}

export default {state, getters, actions, mutations}