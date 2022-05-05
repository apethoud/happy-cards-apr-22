import "./App.scss";
import HeaderFooter from "./components/HeaderFooter";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <HeaderFooter>
        <Outlet />
      </HeaderFooter>
    </div>
  );
}

export default App;
