import "./App.css";
import Grandparent from "./components/Grandparent";

function App() {
  console.log("App re-render");

  return (
    <div className="App">
      <Grandparent />
    </div>
  );
}

export default App;
