// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './pages/home'

import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'

import Login from './pages/login' //购物车
import Cart from './pages/cart' //购物车
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm' //订单确认
import OrderList from './pages/orderList'//订单列表
import OrderPay from './pages/orderPay'//订单支付
import AliPay from './pages/aliPay'//订单支付

//Vue.use(Router); //2.0 需要实例化vue
import { createRouter, createWebHashHistory } from 'vue-router'

//export default new Router({//导出
export default createRouter({//导出
    history: createWebHashHistory(),//vue3
    routes: [//vue3 routes vue2 router

        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: '主页',
                    pagename: "主页",
                    component: Index,
                },
                {
                    path: 'product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    component: Detail,
                },
            ]

        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'order-alipay',
                    component: AliPay,
                },
            ]
        },
    ]
})