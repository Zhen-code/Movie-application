<template>
<b-container>
  <MovieList :title="this.nowTitle" :movies="this.nowMovies" titleColor="red"/>
  <MovieList :title="this.commingTitle" :movies="this.commingMovies" titleColor="green"/>
  <MovieList :title="this.topTitle" :movies="this.topMovies" titleColor="blue"/>
  </b-container>
</template>

<script>
// 导入电影列表模板
import MovieList from '../../components/movieslist/MovieList.vue'
import {mapState} from 'vuex'
export default{
  data(){
    return {
      
    }
  },
  methods:{
      
  },
  computed:{
    ...mapState(['nowMovies','nowTitle', 'commingMovies', 'commingTitle','topMovies', 'topTitle']),
    nowMovies:{
     get(){
     return this.$store.state.nowMovies
     },
     set(){
       this.$store.state.nowMovies=val
     }
    }
  },
  components:{
    MovieList
  },
  mounted(){
     this.$store.dispatch('getNowMovies')
     this.$store.dispatch('getComingMovies')
     this.$store.dispatch('getTop250')
  }
}
</script>

<style scoped>
</style>