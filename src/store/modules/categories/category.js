const state = {
    categories: []
}

const getters = {
    categories: state => {
        return state.categories
    }
}

const actions = {
    getAllCategories({commit}){
        axios.get('categories')
            .then(result => commit('CATEGORIES', result.data.data))
            .catch(() => {
                //
            })
    }
}

const mutations = {
    CATEGORIES(state, categories){
        state.categories = categories
    }
}

export default {state, getters, actions, mutations}