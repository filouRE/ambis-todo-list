import { memo } from "react";

import Burger from "../../assets/Burger.svg";

export default memo(function Header({ children }) {
  const mobile = window.innerWidth <= 600;

  return (
    <>
      <header className="App-header">
        <p>Ambi's todo list</p>
        {mobile ? <img alt="burger" src={Burger} /> : <nav>{children}</nav>}
      </header>
    </>
  );
});
