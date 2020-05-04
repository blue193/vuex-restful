<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
    </div>
    </v-app-bar>
    <v-content>
      <AddTodo />
      <Todos v-bind:todos="todolists" />
    </v-content>
  </v-app>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import store from './store';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  },
  store,
  computed: {
    todolists: function() {
      return this.$store.state.todos;
    }
  },
  created() {
    this.$store.dispatch('loadTodolists');
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
