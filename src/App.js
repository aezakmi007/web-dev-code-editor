import "./App.css";
import Iframe from "react-iframe";
import Editor from "./Components/Editor";

function App() {
  return (
    <>
      <div className="editor-container pane">
        <div className="editor-container">
          {" "}
          <Editor />
        </div>
        <div className="editor-container">
          {" "}
          <Editor />
        </div>
        <div className="editor-container">
          <Editor />
        </div>
      </div>
      <div>
        <Iframe className="pane" width="100%" height="100%"></Iframe>
      </div>
    </>
  );
}

export default App;
