// Linking
import "./app.css";
// Imports
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Popup, PopupTitle, PopupDelete } from "./components/Popups/Popups";
// Images
import AddIcon from "./assets/Add.svg";
import Todos from "./components/Todos/Todos";
import ModifyIcon from "./assets/Modify.svg";

function App() {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]));
  }

  if (!localStorage.getItem("title")) {
    localStorage.setItem("title", "Things todo today");
  }

  const [buttonPopup, setButtonPupop] = useState(false);
  const [buttonPopupTitle, setButtonPupopTitle] = useState(false);

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [title, setTitle] = useState(localStorage.getItem("title"));

  const titleRef = useRef();
  const newItemRef = useRef();

  const pushTodos = (newTodo) => {
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((x) => x.title !== id);
    localStorage.setItem("todos", JSON.stringify([...filteredTodos]));
    setTodos(filteredTodos);
  };

  useEffect(() => {
    // localStorage.getItem("todos");

    const speed = 1.2;
    gsap.from(titleRef.current, {
      y: -30,
      duration: speed,
      scale: 1,
      ease: "elastic",
      opacity: 0.6,
    });
    gsap.from(newItemRef.current, {
      x: -40,
      duration: speed,
      scale: 1,
      ease: "elastic",
    });
  }, []);

  return (
    <>
      <Header>
        <a href="mailto:felix@seku.tech" className="font-medium">
          CONTACT
        </a>
      </Header>

      <PopupTitle trigger={buttonPopupTitle} setTrigger={setButtonPupopTitle} newTitle={setTitle} />

      <Popup trigger={buttonPopup} setTrigger={setButtonPupop} pushTodos={pushTodos}>
        <h3>Create a new task</h3>
        <p>Enter the name of the tasks please!</p>
      </Popup>

      <div className="content" ref={titleRef}>
        <div className="title flex justify-center text-3xl gap-2">
          <h1 className="text-center font-bold ">{title}</h1>
          <img
            src={ModifyIcon}
            alt="modify icon"
            className="w-4"
            onClick={() => {
              setButtonPupopTitle(true);
              document.getElementsByClassName("content")[0].classList.add("blur-sm");
            }}
          />
        </div>
        <div
          ref={newItemRef}
          className="new-item cursor-pointer"
          onClick={() => {
            setButtonPupop(true);
            document.getElementsByClassName("content")[0].classList.add("blur-sm");
          }}
        >
          <p>Add a new item</p>
          <img src={AddIcon} alt="check icon" />
        </div>
        <div className="items">
          {todos.map((todo) => (
            <Todos className={todo.title} key={todo.id} title={todo.title} state={todo.complete} delete={onDelete} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
