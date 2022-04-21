import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import HeaderFooter from "./components/HeaderFooter";
import HolidayPicker from "./components/HolidayPicker";
import CardForm from "./components/CardForm";

function App() {
  return (
    <div>
      <HeaderFooter>
        {/* <Home /> */}
        {/* <HolidayPicker /> */}
        <CardForm />
      </HeaderFooter>
    </div>
  );
}

export default App;
