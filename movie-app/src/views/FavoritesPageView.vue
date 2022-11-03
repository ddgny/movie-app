<template>
  <div class="movies-wrapper">
    <MovieCard v-for="movie in this.$store.state.favoriteMovies" :isFavorite="true" :movie="movie"></MovieCard>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
}
</script>