<template>
  <div>
      <h3>{{showNum}}</h3>
      <button @click="subAsync">-1</button>
      <input type="Number" v-model="n">
      <button @click="subNAsync(n)">-n</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      n: ''
    }
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>

<style scoped>

</style>
