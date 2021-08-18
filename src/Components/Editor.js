import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Controlled as CodeMirror } from "react-codemirror2";

function Editor({ language, displayName, value, onChange }) {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="title-container">
        {displayName}
        <button
          onClick={() => setOpen((prev) => !prev)}
          type="button"
          className="expand-collapse-btn"
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
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
