const state = {
    observedAds: [],
    observedUsers: []
}

const getters = {
    observedAds: state => {
        return state.observedAds
    },
    observedUsers: state => {
        return state.observedUsers
    }
}

const actions = {
    getObservedAds({commit}){
        axios.get('auth/account/observed/ads')
            .then(result => commit('OBSERVED_ADS', result.data.data))
            .catch(() => {
                //
            })
    },
    getObservedUsers({commit}){
        axios.get('auth/account/observed/users')
            .then(result => commit('OBSERVED_USERS', result.data.data))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    OBSERVED_ADS(state, observedAds)
    {
        state.observedAds = observedAds
    },
    OBSERVED_USERS(state, observedUsers){
        state.observedUsers = observedUsers
    }
}

export default {state, getters, actions, mutations}