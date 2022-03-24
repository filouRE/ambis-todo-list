// Linking
import "./style.css";
import React, { useRef } from "react";

export default function Popup(props) {
  const inputRef = useRef();

  const onAdd = () => {
    const newtodo = {
      id: inputRef.current.value,
      title: inputRef.current.value,
      complete: false,
    };
    props.pushTodos(newtodo);
    props.setTrigger(false);
    document.getElementsByClassName("content")[0].classList.remove("blur-sm");
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <input
          ref={inputRef}
          type="text"
          className="py-1.5 px-2 w-[86%] rounded-md border-2 border-black outline-cyan-400"
          placeholder="e.g. Wash the dishes, Walk the dog"
        />
        <div className="buttons">
          <button
            className="add-button"
            onClick={() => {
              onAdd();
            }}
          >
            Add
          </button>
          <button
            className="close-button"
            onClick={() => {
              props.setTrigger(false);
              document
                .getElementsByClassName("content")[0]
                .classList.remove("blur-sm");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
