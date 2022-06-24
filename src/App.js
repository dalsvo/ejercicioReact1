import { useState } from "react";

const initialTodos = [
  {
    id: "a",
    task: "Learn Ract",
    complete: false
  },
  {
    id: "a",
    task: "Learn Javascript",
    complete: false
  },
  {
    id: "a",
    task: "Learn PHP",
    complete: false
  }
];

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>{todos.task}</li>
        ))}
      </ul>
      <form>
        <input type="text" value={task} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
