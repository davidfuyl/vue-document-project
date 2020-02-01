import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import loginPage from '@/components/LoginPage'
import homePage from '@/components/HomePage'
import registerPage from '@/components/RegisterPage'
import docDetailsPage from '@/components/DocDetailsPage'
// import editDocDialog from '@/components/EditDocDialog'
import createDoc from '@/components/CreateDoc'
import logonHomePage from '@/components/LogonHomePage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logonHomePage',
      component: logonHomePage,
      meta: {
        title: '登录首页'
      }
    },
    {
      path: '/registerPage',
      name: 'registerPage',
      component: registerPage,
      meta: {
        title: '注册用户'
      }
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/docDetailsPage',
      name: 'docDetailsPage',
      component: docDetailsPage,
      meta: {
        title: '文档详情'
      }
    },
    {
      path: '/createDoc',
      name: 'createDoc',
      component: createDoc,
      meta: {
        title: '创建文档'
      }
    },
    {
      path:'*',redirect:'/homePage'
    },
    {
      path:'',redirect:'/pageNotFound',
      meta: {
        title: 'Page Not Found'
      }
    }
  ]
})
