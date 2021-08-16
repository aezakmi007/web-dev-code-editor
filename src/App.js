import "./App.css";
import Iframe from "react-iframe";
import Editor from "./Components/Editor";
import { useEffect, useState } from "react";

function App() {
  const [html, setHtml] = useState(
    localStorage.getItem("html")
      ? JSON.parse(localStorage.getItem("html"))
      : localStorage.setItem("html", "")
  );
  const [css, setCSS] = useState(
    localStorage.getItem("css")
      ? JSON.parse(localStorage.getItem("css"))
      : localStorage.setItem("css", "")
  );
  const [js, setJs] = useState(
    localStorage.getItem("js")
      ? JSON.parse(localStorage.getItem("js"))
      : localStorage.setItem("js", "")
  );
  const [src, setSrcDoc] = useState("");

  const handleHtmlChange = (value) => {
    setHtml(value);
    localStorage.setItem("html", JSON.stringify(value));
  };
  const handleCssChange = (value) => {
    setCSS(value);
    localStorage.setItem("css", JSON.stringify(value));
  };
  const handleJsChange = (value) => {
    setJs(value);
    localStorage.setItem("js", JSON.stringify(value));
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script crossorigin >${js}</script>
      </html>
      `);
    }, 250);
    return () => {
      clearTimeout(timeOut);
    };
  }, [html, css, js]);

  return (
    <>
      <div className="editor-container pane">
        <div className="editor-container">
          <Editor
            language="html"
            displayName="HTML"
            value={html}
            onChange={handleHtmlChange}
          />
        </div>
        <div className="editor-container">
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={handleCssChange}
          />
        </div>
        <div className="editor-container">
          <Editor
            language="js"
            displayName="JS"
            value={js}
            onChange={handleJsChange}
          />
        </div>
      </div>
      <div>
        <iframe srcDoc={src} className="pane" width="100%" height="100%" />
      </div>
    </>
  );
}

export default App;
