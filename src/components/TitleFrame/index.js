import { useRef } from "react";

import Frame from "../Frame";

export default function TitleFrame({ setTitle, setOverlay }) {
  const titleRef = useRef();

  const onSetTitle = () => {
    setTitle(titleRef.current.value);
  };

  return (
    <Frame>
      <div className="flex flex-col gap-2">
        <label>Enter new title</label>
        <input type="text" name="newTitle" ref={titleRef} />
        <div className="flex justify-between">
          <button onClick={() => setOverlay()}>Cancel</button>
          <button onClick={onSetTitle}>Change</button>
        </div>
      </div>
    </Frame>
  );
}
