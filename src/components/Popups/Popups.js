// Linking
import "./style.css";
import React, { useRef, useState } from "react";

export function Popup(props) {
  const [invalid, setinvalid] = useState(false);
  const inputRef = useRef();
  const spanRef = useRef();
  const spanRef2 = useRef();

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
        <div className="inputs flex flex-col w-[86%]">
          <input
            onChange={() => {
              if (inputRef.current.value.length > 25) {
                setinvalid(true);
                spanRef.current.classList.remove("hidden");
              } else if (inputRef.current.value.length === 0) {
                setinvalid(true);
                spanRef2.current.classList.remove("hidden");
              } else {
                setinvalid(false);
                spanRef.current.classList.add("hidden");
                spanRef2.current.classList.add("hidden");
              }
            }}
            ref={inputRef}
            type="text"
            className={`py-1.5 px-2  rounded-md border-2 border-black outline-blue-500 ${invalid ? "invalid-input" : ""}`}
            placeholder="e.g. Wash the dishes, Walk the dog"
          />
          <span ref={spanRef} className="hidden text-red-600 text-sm text-left pt-1">
            Error, you have too many characters
          </span>
          <span ref={spanRef2} className="text-red-600 text-sm text-left pt-1">
            Error, you have not enough characters
          </span>
        </div>
        <div className="buttons">
          <button
            disabled={invalid}
            className={`add-button ${invalid ? "invalid" : ""}`}
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
              document.getElementsByClassName("content")[0].classList.remove("blur-sm");
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
export function PopupTitle(props) {
  const [invalid, setinvalid] = useState(false);
  const inputRef = useRef();
  const spanRef = useRef();
  const spanRef2 = useRef();

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
        <h3>What title do you want to put?</h3>
        <div className="inputs flex flex-col w-[86%]">
          <input
            onChange={() => {
              if (inputRef.current.value.length > 18) {
                setinvalid(true);
                spanRef.current.classList.remove("hidden");
              } else if (inputRef.current.value.length === 0) {
                setinvalid(true);
                spanRef2.current.classList.remove("hidden");
              } else {
                setinvalid(false);
                spanRef.current.classList.add("hidden");
                spanRef2.current.classList.add("hidden");
              }
            }}
            ref={inputRef}
            type="text"
            className={`py-1.5 px-2  rounded-md border-2 border-black outline-blue-500 ${invalid ? "invalid-input" : ""}`}
            placeholder="e.g. Homeworks, Reminder, Ideas"
          />
          <span ref={spanRef} className="hidden text-red-600 text-sm text-left pt-1">
            Error, you have too many characters
          </span>
          <span ref={spanRef2} className="text-red-600 text-sm text-left pt-1">
            Error, you have not enough characters
          </span>
        </div>
        <div className="buttons">
          <button
            disabled={invalid}
            className={`add-button ${invalid ? "invalid" : ""}`}
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
              document.getElementsByClassName("content")[0].classList.remove("blur-sm");
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
