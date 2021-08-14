import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Controlled as CodeMirror } from "react-codemirror2";

function Editor() {
  return (
    <div className="editor-holder">
      <div className="title-container">
        HTML
        <button type="button" className="expand-collapse-btn">
          <FontAwesomeIcon icon={faCompressAlt} />
        </button>
      </div>
      <CodeMirror
        className="code-mirror-wrapper"
        value={"Hi There"}
        options={{
          theme: "material",
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
