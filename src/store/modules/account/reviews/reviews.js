const state = {
    rating: [],
    reviewsUser: []
}

const getters = {
    rating: state => {
        return state.rating
    },
    reviewsUser: state => {
        return state.reviewsUser
    }
}

const actions = {
    addRating({commit}, dataRating){
        axios.post('auth/rating/set-user', dataRating)
            .then(() => commit('RATING'))
            .catch(() => {
                //
            })
    },
    getReviewsUser({commit}, id){
        axios.get(`reviews/user/${id}`)
            .then(result => commit('REVIEWS_USER', result.data.data))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    RATING(state){
        state.rating = ++state.rating
    },
    REVIEWS_USER(state, reviewsUser){
        state.reviewsUser = reviewsUser
    }
}

export default {state, getters, actions, mutations}