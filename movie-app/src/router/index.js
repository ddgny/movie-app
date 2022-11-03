import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '../views/HomePageView.vue';
import PopularMoviesPageView from '../views/PopularMoviesPageView.vue';
import FavoritesPageView from '../views/FavoritesPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView,
    },
    {
      path: '/popular',
      name: 'popular',
      component: PopularMoviesPageView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPageView,
    }
  ],
});

export default router;
