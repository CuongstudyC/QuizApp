import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import QuizView from './components/QuizView.vue'

const routes = [
  { path: '/', component: Home, name: "Home" },
  { path: '/Home', redirect: '/' },
  {path: '/quiz/:id', component: QuizView, name: "Quiz"}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App);

app.use(router)
app.mount('#app')
