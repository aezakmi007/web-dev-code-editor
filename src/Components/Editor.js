import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { Controlled as CodeMirror } from "react-codemirror2";

function Editor({ language, displayName, value, onChange }) {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className="editor-holder">
      <div className="title-container">
        {displayName}
        <button type="button" className="expand-collapse-btn">
          <FontAwesomeIcon icon={faCompressAlt} />
        </button>
      </div>
      <CodeMirror
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          theme: "material",
          mode: { language },
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
        }}
      />
    </div>

    // onBeforeChange={(editor, data, value) => {
    //   this.setState({ value });
    // }}
    // onChange={(editor, data, value) => {}}
  );
}

export default Editor;
