import { TodoType } from '../types';

export const fetchTodos = async (
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) =>
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((response) => response.json())
    .then((json) => setTodos(json));
