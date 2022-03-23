// Linking
import "./style.css";
import { memo } from "react";
// Images
import Burger from "../../assets/Burger.svg";

export default memo(function Header({ children }) {
  const mobile = window.innerWidth <= 600;

  return (
    <>
      <header className="header">
        <p>Ambi's todo list</p>
        {mobile ? <img alt="burger" src={Burger} /> : <nav>{children}</nav>}
      </header>
    </>
  );
});
