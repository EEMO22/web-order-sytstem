import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Homepage.vue'
import Admin from '../views/admin/Admin.vue'
import FoodManagePage from '../views/admin/page/FoodManagePage.vue'
import UserInfo from '../views/user/page/MyPageUser.vue'
import UserModify from '../views/user/page/Modify.vue'
import SignPage from '../views/user/page/SignPage.vue'
import LoginPage from '../views/user/page/LoginPage.vue'
import Review from '../components/Review'
import ReBoard from '../components/ReBoard'
import MenuPage from '../views/user/page/MenuPage.vue'
import UserPage from '../views/user/UserPage.vue'
import UserMyPage from '../views/user/page/UserMyPage.vue'
import store from '../store'

const beforeAuth = isAuthenticated => (from, to, next) => {
  const isAuth = store.getters['user/isAuth'];
  if ((isAuth && isAuthenticated) || (!isAuth && !isAuthenticated)) {
    return next();
  } else {
    alert("로그인이 필요한 메뉴입니다.");
    next('/user/login');
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/review',
    name: 'review',
    component: Review,
  },
  {
    path: '/board',
    name: 'board',
    component: ReBoard
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage,
    children: [
      {
        path: 'review',
        name: 'review',
        component: Review,
      },
      {
        path: 'board',
        name: 'board',
        component: ReBoard
      },
      {
        path: 'sign',
        name: 'Sign',
        component: SignPage
      },
      {
        path: 'login',
        name: 'login',
        component: LoginPage
      },
      {
        path: 'menu',
        name: 'Menu',
        component: MenuPage
      },
      {
        path: 'userinfo',
        name: 'userinfo',
        component: UserInfo,
        beforeEnter: beforeAuth(true),
      },
      {
        path: 'modify',
        name: 'modify',
        component: UserModify,
      },
      {
        path: 'mypage',
        name: 'mypage',
        component: UserMyPage
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      // {
      //   path: 'dashBoard',
      //   name: "DashBoard",
      //   component: DashBoard,
      // },
      {
        path: 'foodManagement',
        name: 'foodManagement',
        component: FoodManagePage
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router