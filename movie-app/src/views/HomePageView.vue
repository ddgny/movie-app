<template>
  <h1> SA </h1>
  <input type = "text" v-model="searchVal" />
  <div class="movies-wrapper">
    <MovieCard v-for="movie in movies" :isFavorite="movie.isFavorite" :movie="movie"></MovieCard>
  </div>
</template>

<script>
import SearchInput from 'vue-search-input'
import axios from 'axios';
import 'vue-search-input/dist/styles.css'
import MovieCard from '../components/MovieCard.vue';

export default {  
  components: {
    SearchInput,
    MovieCard,
  },
  methods: {
    async takeInput() {
      const movieData = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1&include_adult=false&query=${ this.searchVal }`)
        if (movieData) {
          setTimeout(() => {
            this.movies = movieData.data.results.filter((movie) => movie.poster_path)
          }, 250)
        }
    },
  },
  data() {
    return {
      movies: [],
      searchVal: '',
    }
  },
  watch:{
    searchVal() {
      this.takeInput();
    }
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>