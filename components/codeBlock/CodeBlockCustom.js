"use client";
import React, { useState } from "react";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import "./CodeBlock.scss";

const myCustomTheme = {
  backgroundColor: "#1e1e1e", // Dark gray background
  textColor: "#d4d4d4", // Default text
  lineNumberColor: "#e6e6e6", // Line numbers (very dark gray)
  lineNumberBgColor: "#1e1e1e", // Match background
  commentColor: "#6a9955", // Green — for comments like `//`
  keywordColor: "#569cd6", // Blue — for `public`, `class`, `interface`
  stringColor: "#ce9178", // Orange — for string values
  functionColor: "#dcdcaa", // Light yellow — method names
  variableColor: "#9cdcfe", // Cyan — parameter names like `amount`
  numberColor: "#b5cea8", // Light green — numbers (if any)
  operatorColor: "#d4d4d4",
};
const CodeBlockCustom = ({ code, language, showLineNumbers = true }) => {
  return (
    <>
      <div className="code-container">
        <div className="code-block-part">
          <CopyBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={myCustomTheme}
            wrapLongLines
            codeBlock
          />
        </div>
      </div>
    </>
  );
};

export default CodeBlockCustom;
