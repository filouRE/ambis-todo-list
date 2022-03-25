// Linking
import "./style.css";
import React from "react";
// Images
import CheckIcon from "../../assets/Check.svg";
import UncheckIcon from "../../assets/Uncheck.svg";
import ChangeIcon from "../../assets/Change.svg";
import DeleteIcon from "../../assets/Delete.svg";

function Todos(props) {
  const onEdit = () => {};

  return (
    <>
      <div className="element">
        <img src={CheckIcon} alt="check icon" />
        <p className="flex items-center">{props.title}</p>
        <div className="icons">
          <img src={ChangeIcon} alt="change icon" onClick={onEdit} />
          <img
            src={DeleteIcon}
            alt="delete icon"
            onClick={() => {
              props.delete(props.title);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Todos;
