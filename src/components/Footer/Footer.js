// Linking
import "./style.css";
import { memo } from "react";

export default memo(function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ from Québec ⚜️​</p>
      <p>
        © 2022 <a href="https://seku.tech">Seku Technologies.</a> All Rights Reserved.
      </p>
    </footer>
  );
});
