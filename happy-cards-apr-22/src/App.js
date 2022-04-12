import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import HeaderFooter from "./components/HeaderFooter";

function App() {
  return (
    <div>
      <HeaderFooter>
        <Home />
      </HeaderFooter>
    </div>
  );
}

export default App;
