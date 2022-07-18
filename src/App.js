import "./App.css";

import { useState, useEffect } from "react";

import AddIcon from "./assets/Add.svg";
import ModifyIcon from "./assets/Modify.svg";

import Header from "./components/Header";
import TitleFrame from "./components/TitleFrame";
import NewItemFrame from "./components/NewItemFrame";
import Todo from "./components/Todo";

export default function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [overlay, setOverlay] = useState();

  useEffect(() => {
    if (!localStorage.getItem("title")) {
      localStorage.setItem("title", "Todo title");
      localStorage.setItem("todos", JSON.stringify([]));
    }
    setTitle(localStorage.getItem("title"));
    setTodos(
      localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
    );
  }, []);

  const onSetTitle = (newTitle) => {
    localStorage.setItem("title", newTitle);
    setTitle(newTitle);
    setOverlay();
  };

  const onAddItem = (item) => {
    setTodos((old) => {
      localStorage.setItem(
        "todos",
        old.length ? JSON.stringify([...old, item]) : JSON.stringify([item])
      );
      return old.length ? [...old, item] : [item];
    });
    setOverlay();
  };

  const titlePopup = () => {
    setOverlay(<TitleFrame setTitle={onSetTitle} setOverlay={setOverlay} />);
  };

  const addItemPopup = () => {
    setOverlay(<NewItemFrame addItem={onAddItem} setOverlay={setOverlay} />);
  };

  return (
    <>
      <Header>
        <p>Contact</p>
      </Header>

      <div className="content">
        <div className="title flex justify-center text-3xl gap-2">
          <h1 className="text-center font-bold ">{title}</h1>
          <img
            src={ModifyIcon}
            alt="modify icon"
            className="w-4"
            onClick={() => titlePopup()}
          />
        </div>
        <div className="new-item cursor-pointer" onClick={() => addItemPopup()}>
          <p>Add a new item</p>
          <img src={AddIcon} alt="check icon" />
        </div>

        <div className="items">
          {todos.length ? (
            todos.map((todo) => (
              <Todo
                {...todo}
                list={todos}
                setList={setTodos}
                setOverlay={setOverlay}
              />
            ))
          ) : (
            <p>No todos</p>
          )}
        </div>
      </div>

      {overlay && (
        <>
          <div className="overlay" onClick={() => setOverlay()}></div>
          {overlay}
        </>
      )}
    </>
  );
}
