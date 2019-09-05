const state = {
    follow: [],
}

const getters = {
    follow: state => {return state.follow}
}

const actions = {
    setFollow({commit}, dataFollow){
        axios.post('auth/follow/ad', dataFollow)
            .then(() => commit('FOLLOW'))
            .catch(() => {
                //
            })
    },
    setFollowUser({commit}, dataFollow){
        axios.post('auth/follow/user', dataFollow)
            .then(() => commit('FOLLOW'))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    FOLLOW(state){
        state.follow = ++state.follow
    }
}

export default {state, getters, mutations, actions}