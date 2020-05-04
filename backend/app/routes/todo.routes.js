module.exports = (app) => {
    const todos = require('../contollers/todo.contoller.js');

    app.post('/api/v1/todo',todos.create);

    app.get('/api/v1/todos', todos.findAll);

    app.put('/api/v1/todos/:todoId', todos.update);

    app.delete('/api/v1/todos/:todoId', todos.delete);
}