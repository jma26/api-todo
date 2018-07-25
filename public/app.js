$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch((error) => response.send(error))
});

function addTodos(todos) {
    todos.forEach((todo) => {
        let newTodo = $(`<li class="task"> ${todo.task} - ${todo.completed} </li>`)
        if (todo.completed) {
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
    })
}