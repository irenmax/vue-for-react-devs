import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import BurgerBuilderSimple from './containers/BurgerBuilderSimple.vue';
import BurgerBuilder from './containers/BurgerBuilder.vue';
import BurgerBuilderIterative from './containers/BurgerBuilderIterative.vue';

const routes = [
  { path: '/', name: 'home', component: BurgerBuilderSimple },
  { path: '/simple', name: 'simple', component: BurgerBuilderSimple },
  { path: '/builder', name: 'builder', component: BurgerBuilder },
  { path: '/iterative', name: 'iterative', component: BurgerBuilderIterative },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
