<template>
    <v-container>
      <v-row>
        <v-col
        cols="12"
        >
        <ul class="w-100 pl-0">
          <v-list v-for="todo in todos" :key="todo.id">
            <Todo v-bind:todo="todo" />
          </v-list>
        </ul>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Todo from './Todo';

export default {
    name: 'Todos',
    components: {
      Todo
    },
    props: [
      "todos"
    ]
}
</script>
<style scoped>
</style>