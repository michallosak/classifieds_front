import Vue from "vue";
import Router from "vue-router";
import ClassifiedsComponent from "./views/pages/classifieds/ClassifiedsComponent";
import AdvertisementComponent from "./views/pages/classifieds/AdvertisementComponent";
import LoginComponent from "./views/auth/LoginComponent";
import RegisterComponent from "./views/auth/RegisterComponent";
import ActivateAccountComponent from "./views/auth/ActivateAccountComponent";
import AccountComponent from "./components/account/AccountComponent";
import HomeComponent from "./components/home/HomeComponent";
import AddedClassifiedsComponent from './views/account/pages/classifieds/ClassifiedsComponent';
import ObservedAdsComponent from "./views/account/pages/classifieds/ObservedAdsComponent";
import SettingsComponent from "./views/account/settings/SettingsComponent";
import ProfileUserComponent from "./views/account/users/ProfileUserComponent";
import ClassifiedsCityComponent from "./views/pages/classifieds/ClassifiedsCityComponent";
import ClassifiedsArchiveComponent from "./views/account/pages/classifieds/ClassifiedsArchiveComponent";
import ContactComponent from "./views/pages/ContactComponent";


// import

// end import

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomeComponent',
            component: HomeComponent,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/classifieds',
            name: 'ClassifiedsComponent',
            component: ClassifiedsComponent,
            meta: {
                title: 'Classifieds'
            }
        },
        {
            path: '/advertisement/:id/:title',
            name: 'AdvertisementComponent',
            component: AdvertisementComponent
        },
        {
            path: '/login',
            name: 'LoginComponent',
            component: LoginComponent,
            meta: {
                title: 'Login',
                auth: false
            }
        },
        {
            path: '/register',
            name: 'RegisterComponent',
            component: RegisterComponent,
            meta: {
                title: 'Register',
                auth: false
            }
        },
        {
            path: '/activate-account',
            name: 'ActivateAccountComponent',
            component: ActivateAccountComponent,
            meta: {
                title: 'Activate Account',
                auth: true
            }
        },
        {
            path: '/profile/:id/:name',
            name: 'ProfileUserComponent',
            component: ProfileUserComponent
        },
        {
            path: '/classifieds/:city',
            name: 'ClassifiedsCityComponent',
            component: ClassifiedsCityComponent
        },
        {
            path: '/contact',
            name: 'ContactComponent',
            component: ContactComponent,
            meta: {
                title: 'Contact'
            }
        },
        {
            path: '/account',
            name: 'AccountComponent',
            component: AccountComponent,
            meta: {
                auth: true
            },
            children: [
                {
                    path: 'pages/classifieds',
                    name: 'AddedClassifiedsComponent',
                    component: AddedClassifiedsComponent,
                    meta: {
                        title: 'Users ads',
                        auth: true
                    }
                },
                {
                    path: 'pages/classifieds/archive',
                    name: 'ClassifiedsArchiveComponent',
                    component: ClassifiedsArchiveComponent,
                    meta: {
                        title: 'Classifieds archive',
                        auth: true
                    }
                },
                {
                    path: 'observed-ads',
                    name: 'ObservedAdsComponent',
                    component: ObservedAdsComponent,
                    meta: {
                        title: 'Observed ads',
                        auth: true
                    }
                },
                {
                    path: 'settings',
                    name: 'SettingsComponent',
                    component: SettingsComponent,
                    meta: {
                        title: 'Settings',
                        auth: true
                    }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});


export default router