import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

const store = createStore({
    state () {
        return {
            favoriteMovies: [],
        }
    },
    mutations: {
        addMovie (state, movie) {
            state.favoriteMovies.push(movie)
        },
        removeMovie (state, movieId) {
            state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.id != movieId);
        }
    }
})

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
