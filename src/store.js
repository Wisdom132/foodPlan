import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

Vue.use(firebase)
Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
    user:'null',
    isAuthenticated:false,
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
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
            from:0,
            to: 9
            
          }
        })
        console.log(response.data)
        commit('setRecipes', response.data.hits);
      } catch (error) {
        commit('setRecipes', []);
      }
    },
    userJoin({commit} , {email,password}) {
      firebase.auth().createUserWithEmailAndPassword(email,password).then(user => {
        commit('setUser', user);
        commit('setIsAuthenticated', true);
      }).catch( () => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
      })
    }
  },
})
