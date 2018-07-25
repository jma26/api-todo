$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch((error) => response.send(error))

    $('#todoInput').keypress((event) => {
        if (event.which === 13) {
            createTodo();
        }
    })
});

function createTodo() {
    let userInput = $('#todoInput').val();
    $.post('/api/todos', {task: userInput})
    .then((newTodo) => addTodo(newTodo))
    .catch((error) => response.send(error));
}

function addTodo(todo) {
    $('#todoInput').val('');
    let newTodo = $(`<li class="task"> ${todo.task} - ${todo.completed} </li>`)
        if (todo.completed) {
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
}

function addTodos(todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    })
}
