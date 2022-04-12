import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import HeaderFooter from "./components/HeaderFooter";
import HolidayPicker from "./components/HolidayPicker";

function App() {
  return (
    <div>
      <HeaderFooter>
        {/* <Home /> */}
        <HolidayPicker />
      </HeaderFooter>
    </div>
  );
}

export default App;
