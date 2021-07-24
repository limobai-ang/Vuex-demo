import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      // 在mutations中不要执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
      state.count++
    },
    sub (state) {
      state.count--
    },
    addN (state, N) {
      state.count += N
    },
    subN (state, N) {
      state.count -= N
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 在action中,不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation 才行
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, N) {
      setTimeout(() => {
        // 在action中,不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation 才行
        context.commit('addN', N)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // 在action中,不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation 才行
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, N) {
      setTimeout(() => {
        // 在action中,不能直接修改state中的数据
        // 必须通过context.commit() 触发某个mutation 才行
        context.commit('subN', N)
      }, 1000)
    }
  },
  getters: {
    showNum: state => {
      return '当前的最新的数值是' + state.count
    }
  },
  modules: {
  }
})
