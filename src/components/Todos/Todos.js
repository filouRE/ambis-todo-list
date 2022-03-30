// Linking
import "./style.css";
import React, { useState } from "react";
import { PopupDelete } from "./../Popups/Popups";

// Images
import CheckIcon from "../../assets/Check.svg";
import UncheckIcon from "../../assets/Uncheck.svg";
import ChangeIcon from "../../assets/Change.svg";
import DeleteIcon from "../../assets/Delete.svg";

function Todos(props) {
  const onEdit = () => {};
  const [buttonPopupDelete, setButtonPupopDelete] = useState(false);
  const [buttonValid, setbuttonValid] = useState(true);

  return (
    <>
      <PopupDelete trigger={buttonPopupDelete} setTrigger={setButtonPupopDelete}>
        <div className="buttons">
          <button
            className="remove-button"
            onClick={() => {
              props.delete(props.title);
              setButtonPupopDelete(false);
              document.getElementsByClassName("content")[0].classList.remove("blur-sm");
            }}
          >
            Remove
          </button>
          <button
            className="close-button"
            onClick={() => {
              setButtonPupopDelete(false);
              document.getElementsByClassName("content")[0].classList.remove("blur-sm");
            }}
          >
            Close
          </button>
        </div>
      </PopupDelete>

      <div className="element">
        <img
          src={buttonValid ? CheckIcon : UncheckIcon}
          alt="check icon"
          onClick={() => {
            setbuttonValid(!buttonValid);
            if (buttonValid) {
              console.log(document.activeElement.tagName);
            }
          }}
        />
        <p className="flex items-center">{props.title}</p>
        <div className="icons">
          <img src={ChangeIcon} alt="change icon" onClick={onEdit} />
          <img
            src={DeleteIcon}
            alt="delete icon"
            onClick={() => {
              setButtonPupopDelete(true);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Todos;
