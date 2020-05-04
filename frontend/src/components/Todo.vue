<template>
  <v-row justify="space-between">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-col cols="10" class="text-left">
            <p v-on:click="markComplete" v-bind:class=" { 'completed' : todo.completed } "> {{todo.title}} </p>
        </v-col>
        <v-col cols="2" class="pa-0">
            <v-btn depressed color="error mr-2" @click="removeTodo(todo._id)"> <v-icon medium> delete </v-icon></v-btn>
            <v-btn depressed color="primary" v-on="on" @click="edit()"> <v-icon medium> edit </v-icon></v-btn>
        </v-col>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Update Todo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field type="text" v-model="newTitle" name="title"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close()">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateTodo(newTitle, todo._id)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import store from '../store';

export default {
    name: 'Todo',
    data: () => ({
        dialog: false,
        newTitle: ''
    }),
    props: ['todo'],
    store,
    methods: {
        edit() {
            this.newTitle = this.$props.todo.title
        },
        removeTodo(id) {
            this.$store.dispatch('removeTodo', id);
        },
        updateTodo(newTitle, id) {
            this.$store.dispatch('updateTodo', {title: newTitle, id: id});
            this.dialog = false
        },
        close() {
            this.dialog = false
        },
        markComplete() {
            this.todo.completed = !this.todo.completed
        }
    },
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>