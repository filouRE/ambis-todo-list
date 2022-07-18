import "./style.css";

export default function Frame({ children }) {
  return (
    <div className="Frame">
      <div className="popup">{children}</div>
    </div>
  );
}
