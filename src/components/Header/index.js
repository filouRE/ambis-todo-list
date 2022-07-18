import { memo, useState, useEffect } from "react";

import Burger from "../../assets/Burger.svg";

import "./style.css";

export default memo(function Header({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 600 ? true : false);
    });
  }, []);

  return (
    <header className="header z-50">
      <a href="/">Ambi's todo list</a>
      {isMobile ? <img alt="burger" src={Burger} /> : <a href="/">Contact</a>}
    </header>
  );
});
