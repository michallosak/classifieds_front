import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import

// auth
import login from './modules/auth/login';
import register from './modules/auth/register';
import activateAccount from './modules/auth/activateAccount';

// pages
import pagesClassifieds from './modules/pages/classifieds';

// account pages
import accountClassifieds from './modules/account/pages/classifieds';
import settings from './modules/account/settings/settings';

// category
import category from './modules/categories/category'

// follow
import follow from './modules/follow/follow'
import observed from './modules/account/follows/follows'

// user
import user from './modules/user/user'

// message
import message from './modules/account/messages/message'

// review
import review from './modules/account/reviews/reviews'

// support
import contact from './modules/supports/contact'

// search
import searchClassifieds from './modules/search/classifieds'

// end import

export default new Vuex.Store({
    modules: {
        login, register, activateAccount,
        pagesClassifieds, settings,
        accountClassifieds,
        category,
        follow, observed,
        user,
        message,
        review,
        contact,
        searchClassifieds
    }
})
