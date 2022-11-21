import { createRouter, createWebHashHistory } from 'vue-router'


import Todos from './components/todos.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/list",
            component: Todos
        }
    ]
})