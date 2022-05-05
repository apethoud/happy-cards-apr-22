import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function HeaderFooter(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="HeaderFooterColorBar" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <div className="Logo">HappyCards</div>
        <div style={{ display: "flex" }}>
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="/card-form" className="Link">
            Make a Card
          </Link>
          <Link to="/login" className="Link">
            Login
          </Link>
        </div>
      </div>
      <div style={{ padding: 40 }}>
        {/* <button onClick={() => toggleTheme()}>Toggle Theme</button>
        <div>Current Theme: {theme}</div> */}
        {props.children}
      </div>
      <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
    </div>
  );
}
