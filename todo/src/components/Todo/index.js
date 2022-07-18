import "./style.css";

import { useState } from "react";

import Frame from "../Frame";

import CheckIcon from "../../assets/Check.svg";
import UncheckIcon from "../../assets/Uncheck.svg";
import ChangeIcon from "../../assets/Change.svg";
import DeleteIcon from "../../assets/Delete.svg";

function UpdateTodoFrame({ updateItem, setOverlay }) {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");

  const onTitle = (e) => {
    if (e.target.value === "") {
      setError(true);
    }
    setTitle(e.target.value);
  };

  const onUpdateItem = () => {
    updateItem(title);
    setOverlay();
  };

  return (
    <Frame>
      <div className="flex flex-col gap-2">
        <label>New Title</label>
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          onChange={onTitle}
        />
        {error ? <span className="text-red-500">Invalid title</span> : ""}
        <div className="flex justify-between">
          <button onClick={() => setOverlay()}>Cancel</button>
          <button onClick={onUpdateItem}>Change</button>
        </div>
      </div>
    </Frame>
  );
}

export function Todo({ id, title, done, list, setList, setOverlay }) {
  const onUpdate = (newTitle) => {
    const i = list.findIndex((e) => e.id === id);
    let listCopy = list;
    listCopy[i] = { id: id, title: newTitle, done };
    localStorage.setItem("todos", JSON.stringify([...listCopy]));
    setList([...listCopy]);
  };

  const onDoneChange = () => {
    const i = list.findIndex((e) => e.id === id);
    let listCopy = list;
    listCopy[i].done = !listCopy[i].done;
    localStorage.setItem("todos", JSON.stringify([...listCopy]));
    setList([...listCopy]);
  };

  const onDelete = () => {
    const newList = list.filter((e) => e.id !== id);
    localStorage.setItem("todos", JSON.stringify([...newList]));
    setList([...newList]);
  };

  return (
    <div className="todo" id={id}>
      <img
        src={done ? UncheckIcon : CheckIcon}
        alt="check icon"
        onClick={onDoneChange}
      />
      <p className="flex items-center">{title}</p>
      <div className="icons">
        <img
          src={ChangeIcon}
          alt="change icon"
          onClick={() =>
            setOverlay(
              <UpdateTodoFrame updateItem={onUpdate} setOverlay={setOverlay} />
            )
          }
        />
        <img src={DeleteIcon} alt="delete icon" onClick={onDelete} />
      </div>
    </div>
  );
}
