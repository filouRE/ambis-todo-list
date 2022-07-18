import { useState } from "react";

import Frame from "../Frame";

export default function NewItemFrame({ addItem, setOverlay }) {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");

  const onTitle = (e) => {
    if (e.target.value === "") {
      setError(true);
    }
    setTitle(e.target.value);
  };

  const onAddItem = () => {
    if (error === false) {
      addItem({
        id: Math.round(Date.now() / 1000),
        title: title,
        done: false,
      });
    }
  };

  return (
    <Frame>
      <div className="flex flex-col gap-2">
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          onChange={onTitle}
        />
        {error ? <span className="text-red-500">Invalid title</span> : ""}
        <div className="flex justify-between">
          <button onClick={() => setOverlay()}>Cancel</button>
          <button onClick={onAddItem}>Change</button>
        </div>
      </div>
    </Frame>
  );
}
