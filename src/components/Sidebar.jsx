import { Link } from "react-router-dom";

function Sidebar({ open, setOpen }) {
  return (
    <div className={`sidebar ${open ? "show" : ""}`}>
      <button className="close-btn" onClick={() => setOpen(false)}>
        &larr; Hide
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/forums" onClick={() => setOpen(false)}>Forums</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;