const state = {
    addedClassifieds: [],
    createAD: [],
    deleteAD: 0,
    moveToArchive: 0,
    classifiedsArchive: [],
    deleteArchive: 0
}

const getters = {
    addedClassifieds: state => {
        return state.addedClassifieds
    },
    createAD: state => {
        return state.createAD
    },
    deleteAD: state => {
        return state.deleteAD
    },
    moveToArchive: state => {
        return state.moveToArchive
    },
    classifiedsArchive: state => {
        return state.classifiedsArchive
    },
    deleteArchive: state => {
        return state.deleteArchive
    }
}

const actions = {
    getAddedClassifieds({commit}){
        axios.get('auth/account/classifieds/index')
            .then(result => commit('ADDED_CLASSIFIEDS', result.data.data))
            .catch(() => {
                //
            })
    },
    storeAdvertisement({commit}, dataCreateAdvertisement){
        axios.post('auth/account/advertisement', dataCreateAdvertisement)
            .then(() => commit('CREATE_AD'))
            .catch(() => {
                //
            })
    },
    destroyAd({commit}, id){
        axios.delete(`auth/account/advertisement/${id}`)
            .then(() => commit('DELETE_AD'))
            .catch(() => {
                //
            })
    },
    moveAdToArchive({commit}, dataArchive){
        axios.post('auth/account/classifieds/move-ad', dataArchive)
            .then(() => commit('MOVE_AD'))
            .catch(() => {
                //
            })
    },
    getClassifiedsArchive({commit}){
        axios.get('auth/account/classifieds/archive')
            .then(result => commit('CLASSIFIEDS_ARCHIVE', result.data.data))
            .catch(() => {
                //
            })
    },
    destroyFromArchive({commit}, dataArchive){
        axios.patch(`auth/account/remove-archive/${dataArchive.id}`, dataArchive)
            .then(() => commit('REMOVE_ARCHIVE'))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    ADDED_CLASSIFIEDS(state, addedClassifieds){
        state.addedClassifieds = addedClassifieds
    },
    CREATE_AD(state){
        state.createAD = ++state.createAD
    },
    DELETE_AD(state){
        state.deleteAD = ++state.deleteAD
    },
    MOVE_AD(state){
        state.moveToArchive = ++state.moveToArchive
    },
    CLASSIFIEDS_ARCHIVE(state, classifiedsArchive){
        state.classifiedsArchive = classifiedsArchive
    },
    REMOVE_ARCHIVE(state){
        state.deleteArchive = ++state.deleteArchive
    }
}

export default {state, getters, actions, mutations}