$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch((error) => response.send(error))

    $('#todoInput').keypress((event) => {
        if (event.which === 13) {
            createTodo();
        }
    })

    $('.list').on('click', 'li', (event) => {
        updateTodo(event);
    })

    $('.list').on('click', 'span', (event) => {
        event.stopPropagation();
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
    let newTodo = $(`<li data-id=${todo._id} data-completed=${todo.completed} class="task"> ${todo.task} <span>X</span> </li>`);
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

function updateTodo(todo) {
    let todoID = todo.currentTarget.attributes[0].value;
    let isCompleted = JSON.parse(todo.currentTarget.attributes[1].value);
    let updateData = {completed: !isCompleted};
    console.log(todo.currentTarget);
    $.ajax({
        method: 'PUT',
        url: `/api/todos/${todoID}`,
        data: updateData
    })
    .then((updatedTodo) => {
        $(todo.currentTarget).toggleClass('done');
        if (updateData.completed) {
            $(todo.currentTarget).attr('data-completed', true)
        } else {
            $(todo.currentTarget).attr('data-completed', false)
        }
    })
}