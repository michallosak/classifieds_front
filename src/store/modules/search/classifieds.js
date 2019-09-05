const state = {
    foundClassifieds: []
}

const getters = {
    foundClassifieds: state => {
        return state.foundClassifieds
    }
}

const actions = {
    getSearchClassifieds({commit}, dataSearch){
        axios.get('search', {
            params: {
                'title': dataSearch.title,
                'category_id': dataSearch.category_id,
                'location': dataSearch.location
            }
        })
            .then(result => commit('SEARCH_CLASSIFIEDS', result.data.data))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    SEARCH_CLASSIFIEDS(state, foundClassifieds){
        state.foundClassifieds = foundClassifieds
    }
}

export default {
    state, getters, actions, mutations
}