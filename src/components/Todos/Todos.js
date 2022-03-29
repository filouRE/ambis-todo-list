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
  const calice = props.title;
  return (
    <>
      <PopupDelete delete={calice} trigger={buttonPopupDelete} setTrigger={setButtonPupopDelete}></PopupDelete>

      <div className="element">
        <img src={CheckIcon} alt="check icon" />
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
