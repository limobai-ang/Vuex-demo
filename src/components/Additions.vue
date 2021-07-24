<template>
  <div>
    <h3>{{this.$store.getters.showNum}}</h3>
    <button @click="addCount">+1</button>
    <input type="Number" v-model="n">
    <button @click="addN">+n</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: ''
    }
  },
  methods: {
    addCount () {
      // this.$store.commit('add')

      // 调用异步操作 Action
      this.$store.dispatch('addAsync')
    },
    addN () {
      // this.$store.commit('addN', +this.n)
      // 触发action时携带参数
      this.$store.dispatch('addNAsync', +this.n)
      this.n = ''
    }
  }
}
</script>

<style scoped>
input {
  width: 50px;
}
</style>
