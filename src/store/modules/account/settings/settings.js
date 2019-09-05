const state = {
    editBasicData: [],
    editContactUser: [],
    editContactCompany: []
}

const getters = {
    editBasicData: state => {
        return state.editBasicData
    },
    editContactUser: state => {
        return state.editContactUser
    },
    editContactCompany: state => {
        return state.editContactCompany
    }
}

const actions = {
    putBasicData({commit}, dataEditBasic){
        axios.post('auth/account/settings/basic', dataEditBasic)
            .then(() => commit('EDIT_BASIC_DATA'))
            .catch(() => {
                //
            })
    },
    putContactUser({commit}, dataEditContact){
        axios.post('auth/account/settings/contact', dataEditContact)
            .then(() => commit('EDIT_CONTACT'))
            .catch(() => {
                //
            })
    },
    putContactCompany({commit}, dataEditContactCompany){
        axios.post('auth/account/settings/contact-company', dataEditContactCompany)
            .then(() => commit('EDIT_CONTACT_COMPANY'))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    EDIT_BASIC_DATA(state){
        state.editBasicData = ++state.editBasicData
    },
    EDIT_CONTACT(state){
        state.editContactUser = ++state.editContactUser
    },
    EDIT_CONTACT_COMPANY(state){
        state.editContactCompany = ++state.editContactCompany
    }
}

export default {state, getters, actions, mutations}