const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

const renderTodos = () => {
    listElement.innerHTML = '';

    for (todo of todos) {
        const todoElement = document.createElement("li");
        const todoText = document.createTextNode(todo);

        const linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');

        const pos = todos.indexOf(todo);
        linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')')

        const linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();

const adicionaTodo = () => {
    const inputText = inputElement.value;
    if (todos.indexOf(inputText) === -1) {
        todos.push(inputText);
    } else {
        alert('Todo Existente!')
    }
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = adicionaTodo;

const deleteTodo = pos => {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

const saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}