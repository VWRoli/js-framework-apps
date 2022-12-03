'use strict';

//Variables
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const toggleBtnEl = document.querySelector('#toggle-button');
const formEl = document.querySelector('#add-form');
const contentEl = document.querySelector('#content');

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
(async () => {
  let todos;
  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}?_limit=5`);
    const data = await res.json();
    todos = data;
    return data;
  };

  await fetchTodos(todos);
  todos.map((t) => renderData(t));

  contentEl.addEventListener('click', (e) => {
    const clicked = e.target.id;

    if (clicked.startsWith('item')) deleteTodo(clicked.split('-')[1]);
  });
})();

const deleteTodo = async (id) =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    .then((response) => response.json())
    .then((json) => {
      const item = document.querySelector(`#item-${id}`).closest('.todo');
      item.classList.add('hidden');
    });

const renderData = (data) => {
  const html = `<div class="todo">
  <div id="todo-wrapper">
  <div class="todo-title">
  <label for="completed"
  ><span
  ><input
  type="checkbox"
  id="completed-${data.id}"
  name="completed"
  ${data.completed ? 'checked' : ''} /></span
  ></label>
  <p class="empty-list">${data.title}</p>
  </div>
        <div class="todo-actions"><button type="button" id="item-${
          data.id
        }">x</button></div>
      </div>
    </div>`;
  contentEl.insertAdjacentHTML('afterbegin', html);
};
