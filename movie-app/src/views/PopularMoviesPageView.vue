<template>
  <h1>Popular Movies</h1>
  <div class="movies-wrapper">
    <MovieCard v-for="movie in popularMovies" :movie="movie"></MovieCard>
  </div>
</template>

<script>
import axios from 'axios';
import MovieCard from '../components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  methods: {
    async getPopularMovies() {
      const movieData = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=348088421ad3fb3a9d6e56bb6a9a8f80`)
        if (movieData) {
          setTimeout(() => {
            this.popularMovies = movieData.data.results.filter((movie) => movie.poster_path);
          }, 250)
        }
    },
  },
  data() {
    return {
      popularMovies: [],
    }
  },
  mounted () {
    this.getPopularMovies()
  }
}
</script>

<style>

</style>