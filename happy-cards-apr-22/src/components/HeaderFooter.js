import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function HeaderFooter(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="HeaderFooterColorBar" />
      <div className="Logo">HappyCards</div>
      <div style={{ padding: 40 }}>
        <button onClick={() => toggleTheme()}>Toggle Theme</button>
        <div>Current Theme: {theme}</div>
        {props.children}
      </div>
      <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
    </div>
  );
}
