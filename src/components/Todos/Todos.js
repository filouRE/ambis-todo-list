// Linking
import "./style.css";
import React, { useState, useRef } from "react";
import { PopupDelete, PopupModify } from "./../Popups/Popups";

// Images
import CheckIcon from "../../assets/Check.svg";
import UncheckIcon from "../../assets/Uncheck.svg";
import ChangeIcon from "../../assets/Change.svg";
import DeleteIcon from "../../assets/Delete.svg";

function Todos(props) {
  const [buttonPopupDelete, setButtonPupopDelete] = useState(false);
  const [buttonValid, setbuttonValid] = useState(props.complete);
  const [buttonPopupModified, setButtonPopupModified] = useState(false);

  const modifyInputRef = useRef();

  //const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const onModify = () => {
    let todoItem = props.todos;

    const inputVal = modifyInputRef.current.value;
    console.log(inputVal);

    const index = todoItem.findIndex((currentElement) => {
      return currentElement.id === props.id;
    });

    todoItem[index].id = inputVal;
    todoItem[index].title = inputVal;

    localStorage.setItem("todos", JSON.stringify(todoItem));
    props.setTodos(todoItem);

    props.onChange({ target: { id: todoItem.title } });
  };

  return (
    <>
      <PopupModify
        trigger={buttonPopupModified}
        setTrigger={setButtonPopupModified}
        inputRef={modifyInputRef}
        onModify={onModify}
      />
      <PopupDelete
        trigger={buttonPopupDelete}
        setTrigger={setButtonPupopDelete}
      >
        <div className="buttons">
          <button
            className="remove-button"
            onClick={() => {
              props.delete(props.title);
              setButtonPupopDelete(false);
              document
                .getElementsByClassName("content")[0]
                .classList.remove("blur-sm");
            }}
          >
            Remove
          </button>
          <button
            className="close-button"
            onClick={() => {
              setButtonPupopDelete(false);
              document
                .getElementsByClassName("content")[0]
                .classList.remove("blur-sm");
            }}
          >
            Close
          </button>
        </div>
      </PopupDelete>
      <div className="element">
        <img
          src={buttonValid ? UncheckIcon : CheckIcon}
          alt="check icon"
          id={props.id}
          onClick={(event) => {
            setbuttonValid(!buttonValid);
            props.onChange(event);
          }}
        />
        <p className="flex items-center">{props.title}</p>
        <div className="icons">
          <img
            src={ChangeIcon}
            alt="change icon"
            onClick={() => {
              setButtonPopupModified(true);
            }}
          />
          <img
            src={DeleteIcon}
            alt="delete icon"
            onClick={() => {
              setButtonPupopDelete(true);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Todos;
