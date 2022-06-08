import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { postToDo, getToDoList } from "../apiService/apiService";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  div: {
    position: "absolute",
    width: "17%",
    display: "flex",
    justifyContent: "space-between",
    top: "10px",
    right: "20px",
  },
};

const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getToDoList().then((todos) => {
      if (todos.statusCode != "404") setTodos(todos);
      else setTodos([]);
    });
  }, []);
  const handleClickPostToDo = (e) => {
    e.preventDefault();
    postToDo(todoTitle, setTodos);
    setTodoTitle("");
  };
  const handleClickExit = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div style={styles.div}>
        <NavLink to="/profile">Профиль</NavLink>
        <NavLink to="/login" onClick={handleClickExit}>
          Выйти
        </NavLink>
      </div>
      <form style={{ marginBottom: "1rem" }}>
        <input
          placeholder="Что нужно делать?"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <button type="submit" onClick={handleClickPostToDo}>
          Добавить задачу
        </button>
      </form>
      {todos.length > 0 ? (
        <ul style={styles.ul}>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.body}
              status={item.status}
              checkStatus={item.checkStatus}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      ) : (
        <p>Сейчас у вас нет задач</p>
      )}
    </>
  );
};
export default TodoList;
