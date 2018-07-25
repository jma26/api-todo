$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch((error) => response.send(error))

    $('#todoInput').keypress((event) => {
        if (event.which === 13) {
            createTodo();
        }
    })

    $('.list').on('click', 'span', (event) => {
        let todo = event.currentTarget.parentElement;
        deleteTodo(todo);
    });
});

function createTodo() {
    let userInput = $('#todoInput').val();
    $.post('/api/todos', {task: userInput})
    .then((newTodo) => {
        $('#todoInput').val('');
        addTodo(newTodo)
    })
    .catch((error) => response.send(error));
}

function addTodo(todo) {
    console.log(todo);
    let newTodo = $(`<li data-id=${todo._id} class="task"> ${todo.task} <span>X</span> </li>`);
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

function deleteTodo(todo) {
    $.ajax({
        method: 'DELETE',
        url: `/api/todos/${todo.dataset.id}`
    })
    .then((data) => {
        console.log(data);  
        $(todo).remove();
    })
}