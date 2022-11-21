<template>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
 </template>
 <script>
 import OrderHeader from '../components/OrderHeader.vue'
 import NavFooter from '../components/NavFooter.vue'
 export default {
     name: "page-order",
     components: {
         OrderHeader,
         NavFooter
     },
     
 }
 </script>
 