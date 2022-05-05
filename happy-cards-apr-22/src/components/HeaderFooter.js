import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" className="Link">
            Home
          </NavLink>
          <NavLink to="/card-form" className="Link">
            Make a Card
          </NavLink>
          <NavLink to="/login" className="Link">
            Login
          </NavLink>
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
