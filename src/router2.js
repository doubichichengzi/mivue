//import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/home'
import Index from './components/index'
import Product from './components/product'
import Detail from './components/detail'
import Cart from './components/cart' //购物车
import Order from './components/order'
import OrderConfirm from './components/orderConfirm' //订单确认
import OrderList from './components/orderList'//订单列表
import OrderPay from './components/orderPay'//订单支付


export default new createRouter({//导出
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                },
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: '/list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: '/pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
            ]
        },
    ]
})