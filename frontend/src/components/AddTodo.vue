<template>
    <v-form @submit="addTodo">
        <h1>Vue Todolist</h1>
        <v-container>
            <v-row 
                align="center"
                justify="center">
                <v-col
                    cols="10"
                    md="10"
                    >
                    <v-text-field type="text" v-model="title" name="title"></v-text-field>
                </v-col>
                <v-col
                    cols="2"
                    md="2"
                    class="text-right"
                    >
                    <v-btn depressed color="primary" type="submit">A d d </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import store from '../store';

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    store,
    methods: {
        addTodo(e) {
            e.preventDefault();

            const newTodoObj = {
                id: uuidv4(),
                title: this.title,
                completed: false
            }

            this.$store.dispatch('addTodo', newTodoObj)
            // this.$emit('add-todo', newTodoObj);
            this.title = '';
        }
    }
}
</script>

<style scoped>
</style>