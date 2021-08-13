import "./App.css";
import Iframe from "react-iframe";
import Editor from "./Components/Editor";

function App() {
  return (
    <div className="ui three column grid App">
      <div className="row">
        <div className="column">
          {" "}
          <Editor />
        </div>
        <div className="column">
          {" "}
          <Editor />
        </div>
        <div className="column">
          <Editor />
        </div>
      </div>

      <div className="row">
        <Iframe></Iframe>
      </div>
    </div>
  );
}

export default App;
