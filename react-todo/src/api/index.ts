import { API_URL } from '../constants';
import { TodoType } from '../types';

export const fetchTodos = async (
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) =>
  fetch(`${API_URL}?_limit=5`)
    .then((response) => response.json())
    .then((json) => setTodos(json));

export const createTodo = async (
  todo: TodoType,
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) =>
  fetch(`${API_URL}`, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => setTodos((prev) => [...prev, json]));
