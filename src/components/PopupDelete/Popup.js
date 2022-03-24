// Linking
import React from "react";
import "./style.css";

function PopupDelete(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default PopupDelete;
