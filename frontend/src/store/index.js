import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        loadTodolists: function(state, payload) {
          payload.map((item)=> {
            state.todos.push(item);
          })
        },
        addTodo: function(state, payload) {
          state.todos = [...state.todos, payload];
        },
        removeTodo: function(state, payload) {
          state.todos = []
          payload.map((item)=> {
            state.todos.push(item);
          })
        },
        updateTodo: function(state, payload) {
          state.todos = []
          payload.map(item => {
            state.todos.push(item)
          })
        }
    },
    actions: {
        addTodo(context, payload) {
          axios.post('http://localhost:3000/api/v1/todo', payload)
            .then(response => {
              context.commit('addTodo', response.data)
            })
        },
        removeTodo(context, payload) {
          axios.delete(`http://localhost:3000/api/v1/todos/${payload}`)
            .then(response => {
              context.commit('removeTodo', response.data)
            })
        },
        updateTodo(context, payload) {
          axios.put(`http://localhost:3000/api/v1/todos/${payload.id}`, payload)
            .then(response => {
              context.commit('updateTodo', response.data)
            })
        },
        loadTodolists(context) {
          axios.get('http://localhost:3000/api/v1/todos')
            .then(response => {
              context.commit('loadTodolists', response.data)
            })
            .catch(e => {
              return e.message
            })
        }
    },
    getters: {

    },
})
