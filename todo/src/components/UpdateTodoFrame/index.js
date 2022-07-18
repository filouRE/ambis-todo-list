import { useState } from "react";

import Frame from "../Frame";

export default function UpdateTodoFrame({ updateItem, setOverlay }) {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");

  const onTitle = (e) => {
    if (e.target.value === "") {
      setError(true);
    }
    setTitle(e.target.value);
  };

  const onUpdateItem = () => {
    updateItem(title);
    setOverlay();
  };

  return (
    <Frame>
      <div className="flex flex-col gap-2">
        <label>New Title</label>
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          onChange={onTitle}
        />
        {error ? <span className="text-red-500">Invalid title</span> : ""}
        <div className="flex justify-between">
          <button onClick={() => setOverlay()}>Cancel</button>
          <button onClick={onUpdateItem}>Change</button>
        </div>
      </div>
    </Frame>
  );
}
