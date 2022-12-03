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

export const deleteTodo = async (
  id: number,
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    .then((response) => response.json())
    .then((json) => setTodos((prev) => prev.filter((p) => p.id !== id)));

export const updateTodo = async (
  id: number,
  todo: TodoType,
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) =>
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) =>
      setTodos((prev) => prev.map((p) => (p.id === id ? todo : p)))
    );
