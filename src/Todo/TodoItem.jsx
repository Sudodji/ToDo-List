import React, { useState } from "react";
import { deleteToDo, completeToDo } from "../apiService/apiService";
import clsx from "clsx";
const styles = {
  li: {
    background: "ghostwhite",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

const TodoItem = ({ title, id, status, todos, setTodos }) => {
  const handleClickDeleteToDo = () => {
    deleteToDo(id, setTodos);
  };
  const handleChangeCompleteToDo = () => {
    completeToDo(id, status).then(() => {
      setTodos(
        todos.map((item) => {
          if (item.id === id) {
            item.status === "PENDING"
              ? (item.status = "DONE")
              : (item.status = "PENDING");
          }
          return item;
        })
      );
    });
  };
  return (
    <li style={styles.li} className={clsx(status === "DONE" && "done")}>
      <span>
        <input
          type="checkbox"
          checked={status === "DONE" ? true : false}
          onChange={handleChangeCompleteToDo}
          style={{ marginRight: "5px" }}
        />
        {title}
      </span>

      <button className="del-button" onClick={handleClickDeleteToDo}>
        &times;
      </button>
    </li>
  );
};
export default TodoItem;
