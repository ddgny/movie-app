<template>
    <div class="movie-card">
        <div class="favorite-button" v-if="!isFavorite" @click="addToFavorites">Add To Favorites</div>
        <div class="favorite-button" v-if="isFavorite" @click="removeFromFavorites">Remove From Favorites</div>
        <img class="movie-image" :src="`https://image.tmdb.org/t/p/w200/${ movie.poster_path } `" alt="Image unavailable"/>
        <div class="movie-information">
          <div class="movie-title"> {{ movie.title || movie.name }} </div>
          <div class="movie-release-date"> {{ movie.first_air_date || movie.release_date }} </div>
          <div class="movie-description"> {{ movie.overview || 'No description'}} </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    },
    isFavorite: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    addToFavorites() {
      this.$store.commit('addMovie', this.movie);
    },
    removeFromFavorites() {
      this.$store.commit('removeMovie', this.movie.id)
    }
  },
  computed() {
    isFavorite = this.$store.state.favoriteMovies.indexOf(this.movie.id) > -1
  }
}
</script>

<style>
.movie-card {
  display: flex;
  padding-top: 15px;
  position: relative;
}
.favorite-button {
  border: 1px solid black;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.movie-information {
  padding-left: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.movie-image {
  min-width: 100px;
  max-width: 100px;
}
</style>