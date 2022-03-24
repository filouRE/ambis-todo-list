// Linking
import "./App.css";
// Imports
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
// Images
import AddIcon from "./assets/Add.svg";
import Todos from "./components/Todos/Todos";
import Title from "./components/Title/Title";

function App() {
  const [buttonPopup, setButtonPupop] = useState(false);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const titleRef = useRef();
  const newItemRef = useRef();

  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]));
  }

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
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPupop}
        pushTodos={pushTodos}
      >
        <h3>Create a new task</h3>
        <p>Enter the name of the tasks please!</p>
      </Popup>
      <div className="content" ref={titleRef}>
        <Title />
        <div
          ref={newItemRef}
          className="new-item cursor-pointer"
          onClick={() => {
            setButtonPupop(true);
            document
              .getElementsByClassName("content")[0]
              .classList.add("blur-sm");
          }}
        >
          <p>Add a new item</p>
          <img src={AddIcon} alt="check icon" />
        </div>
        {todos.map((todo) => (
          <Todos key={todo.id} title={todo.title} delete={onDelete} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
