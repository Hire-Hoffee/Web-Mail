import React from "react";
import { RenderLeafProps } from "@/types/textEditorType";
import CSS from "csstype";

function Leaf(props: RenderLeafProps) {
  const customStyles: CSS.Properties = {
    fontWeight: props.leaf.bold ? "bold" : "normal",
    fontStyle: props.leaf.italic ? "italic" : "normal",
    textDecoration: props.leaf.underline ? "underline" : "none",
  };

  return (
    <span {...props.attributes} style={customStyles}>
      {props.children}
    </span>
  );
}

export default Leaf;
