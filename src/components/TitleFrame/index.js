import { useRef, useState } from "react";

import Frame from "../Frame";

export default function TitleFrame({ setTitle, setOverlay }) {
  const [invalid, setinvalid] = useState(true);
  const titleRef = useRef();
  const spanRef = useRef();
  const spanRef2 = useRef();

  const onSetTitle = () => {
    setTitle(titleRef.current.value);
  };

  return (
    <Frame>
      <div className="popup-inner">
        <h3>What title do you want to put?</h3>
        <div className="inputs flex flex-col w-[90%]">
          <input
            onChange={() => {
              if (titleRef.current.value.length > 18) {
                setinvalid(true);
                spanRef.current.classList.remove("hidden");
              } else if (titleRef.current.value.length === 0) {
                setinvalid(true);
                spanRef2.current.classList.remove("hidden");
              } else {
                setinvalid(false);
                spanRef.current.classList.add("hidden");
                spanRef2.current.classList.add("hidden");
              }
            }}
            type="text"
            className={`py-1.5 px-2  rounded-md border-2 border-black outline-blue-500 ${invalid ? "invalid-input" : ""}`}
            placeholder="e.g. Homeworks, Reminder, Ideas"
          />
          <span ref={spanRef} className="hidden text-red-600 text-sm text-left pt-1">
            Error, you have too many characters
          </span>
          <span ref={spanRef2} className="text-red-600 text-sm text-left pt-1">
            Error, you have not enough characters
          </span>
        </div>
        <div className="buttons">
          <button disabled={invalid} className={`add-button ${invalid ? "invalid" : ""}`} onClick={onSetTitle}>
            Change
          </button>
          <button className="close-button" onClick={() => setOverlay()}>
            Close
          </button>
        </div>
      </div>
    </Frame>
  );
}
