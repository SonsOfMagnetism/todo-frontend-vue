import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'
import "milligram"

// Create router
const router = createRouter({
    // Create a web history
    history: createWebHistory(),
    // inject routes
    routes,
})

createApp(App).use(router).mount('#app')
