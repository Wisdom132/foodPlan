import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search'
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },

  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: '4d42a93f',
            app_key: 'd6411cc4545a27877a63685393e8d9d1',
            
          }
        }).then(response => {
          response = response.data;
          console.log(response)
        })
        commit('setRecipes', response.data.hits);
      } catch (error) {
        commit('setRecipes', []);
      }
    }
  }
})
