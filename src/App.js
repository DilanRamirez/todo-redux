import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import { TodoCard } from "./components/TodoCard";
import { MyNavbar } from "./components/Navbar";
import todos from "./dummyData";

function App() {
  todos.map((todo) => console.log(todo.id));

  return (
    <div className="App">
      <MyNavbar />
      <div className="todos">
        {todos.map((todo) => (
          <TodoCard
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            dueDate={todo.dueDate}
            category={todo.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
