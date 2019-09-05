const state = {
    contact: []
}

const getters = {
    contact: state => {
        return state.contact
    }
}

const actions = {
    contactSupport({commit}, dataContactUs) {
        axios.post('contact-us', dataContactUs)
            .then(() => commit('CONTACT_US'))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    CONTACT_US(state) {
        state.contact = ++state.contact
    }
}

export default {state, getters, actions, mutations}