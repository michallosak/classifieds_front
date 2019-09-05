const state = {
    classifieds: [],
    classifiedsPro: [],
    advertisement: {},
    classifiedsCity: []
}

const getters = {
    classifieds: state => {
        return state.classifieds
    },
    classifiedsPro: state => {
        return state.classifiedsPro
    },
    advertisement: state => {
        return state.advertisement
    },
    classifiedsCity: state => {
        return state.classifiedsCity
    }
}

const actions = {
    getAllClassifieds({commit}){
        axios.get('classifieds')
            .then(result => commit('CLASSIFIEDS', result.data.data))
            .catch(() => {
                //
            })
    },
    getClassifiedsPro({commit}){
        axios.get('classifieds-pro')
            .then(result => commit('CLASSIFIEDS_PRO', result.data.data))
            .catch(() => {
                //
            })
    },
    getAdvertisement({commit}, id){
        axios.get(`advertisement/${id}`)
            .then(result => commit('ADVERTISEMENT', result.data.data))
            .catch(() => {
                //
            })
    },
    getClassifiedsCity({commit}, city)
    {
        axios.get(`classifieds-city/${city}`)
            .then(result => commit('CLASSIFIEDS_CITY', result.data.data))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    CLASSIFIEDS(state, classifieds){
        state.classifieds = classifieds
    },
    CLASSIFIEDS_PRO(state, classifiedsPro){
        state.classifiedsPro = classifiedsPro
    },
    ADVERTISEMENT(state, advertisement){
        state.advertisement = advertisement
    },
    CLASSIFIEDS_CITY(state, classifiedsCity){
        state.classifiedsCity = classifiedsCity
    }
}

export default {state, getters, actions, mutations}