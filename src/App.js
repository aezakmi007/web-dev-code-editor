import "./App.css";
import Editor from "./Components/Editor";
import { connect } from "react-redux";
import { changeHtml } from "./Actions";
import { changeCss } from "./Actions";
import { changeJs } from "./Actions";
import { useEffect, useState } from "react";

export const App = ({ html, css, js, changeCss, changeHtml, changeJs }) => {
  const [src, setSrcDoc] = useState("");
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
            onChange={changeHtml}
          />
        </div>
        <div className="editor-container">
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={changeCss}
          />
        </div>
        <div className="editor-container">
          <Editor
            language="js"
            displayName="JS"
            value={js}
            onChange={changeJs}
          />
        </div>
      </div>
      <div>
        <iframe
          srcDoc={src}
          title="Output"
          className="pane"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    html: state.html,
    css: state.css,
    js: state.js,
  };
};

export default connect(mapStateToProps, { changeCss, changeHtml, changeJs })(
  App
);
