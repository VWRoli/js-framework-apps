'use strict';

//Variables
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const toggleBtnEl = document.querySelector('#toggle-button');
const formEl = document.querySelector('#add-form');
const contentEl = document.querySelector('#content');
const submitBtnEl = document.querySelector('#submit-btn');
const todoInputEl = document.querySelector('#todo');
const completedEl = document.querySelector('#completed');

toggleBtnEl.addEventListener('click', () => {
  //Change btn color
  toggleBtnEl.classList.toggle('primary');
  //hide form
  formEl.classList.toggle('hidden');
  //button label
  toggleBtnEl.innerText.toLowerCase() === 'close'
    ? (toggleBtnEl.innerText = 'open')
    : (toggleBtnEl.innerText = 'close');
});

//API
const fetchTodos = async () => {
  try {
    const res = await fetch(`${API_URL}?_limit=5`);
    if (!res.ok) throw new Error(res);
    const data = await res.json();

    //render todos
    data.map((t) => renderData(t));
  } catch (error) {
    console.log(Error);
  }
};

fetchTodos();

const deleteTodo = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    //Error
    if (!res.ok) throw new Error(res);
    const item = document.querySelector(`#item-${id}`).closest('.todo');
    item.classList.add('hidden');
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (todo) => {
  try {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(todo),
    });
    //Error
    if (!res.ok) throw new Error(res);
    renderData(todo);
  } catch (error) {
    console.log(error);
  }
};

const editTodo = async (id, todo) => {
  try {
    //fetch correct task
    const res = await fetch(`${API_URL}/${id}`);
    //Error
    if (!res.ok) throw new Error(res);

    const todo = await res.json();

    //update fetched task
    const updTodo = { ...todo, completed: !todo.completed };

    const updateRes = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updTodo),
    });
    //Error
    if (!updateRes.ok) throw new Error(updateRes);
  } catch (error) {
    console.log(error);
  }
};

//renderer
const renderData = (data) => {
  const html = `<div class="todo" id="${data.id}">
  <div id="todo-wrapper">
  <div class="todo-title">
  <label for="completed"
  ><span
  ><input
  type="checkbox"
  id="completed-${data.id}"
  class="checkbox"
  name="completed"
  ${data.completed ? 'checked' : ''} /></span
  ></label>
  <p class="empty-list">${data.title}</p>
  </div>
  <div class="todo-actions"><button type="button" class="remove-btn" id="item-${
    data.id
  }">x</button></div>
      </div>
      </div>`;
  contentEl.insertAdjacentHTML('afterbegin', html);
};

//Listeners
contentEl.addEventListener('click', (e) => {
  //Get clicked taks ID
  console.log(e.target.closest('.todo'));
  const clickedId = e.target.closest('.todo').id;
  //handle remove btn
  const clickedRemove = e.target.closest('.remove-btn');
  if (clickedRemove) deleteTodo(clickedId);

  //Handle toggle completed
  const checkbox = e.target.closest('.checkbox');
  if (checkbox) editTodo(clickedId);
});

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  const newTodo = {
    userId: 1,
    id: 56,
    title: todoInputEl.value,
    completed: completedEl.checked,
  };
  addTodo(newTodo);
  todoInputEl.value = '';
  completedEl.checked = false;
});
