import React, { useState, useCallback } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { useTranslation } from "react-i18next";

import Leaf from "./Leaf";
import editorEventHandlers from "@/utils/functions/textEditorFunctions";
import { RenderLeafProps } from "@/types/textEditorType";

import BoldTextSVG from "../styles/svgs/createEmail/BoldTextSVG";
import ItalicTextSVG from "../styles/svgs/createEmail/ItalicTextSVG";
import UnderlineTextSVG from "../styles/svgs/createEmail/UnderlineTextSVG";

function TextEditor() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: Descendant[] = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];
  const { t } = useTranslation();

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  const handleEvent = (event: React.MouseEvent, style: string) => {
    event.preventDefault();
    editorEventHandlers.toggleTextStyle(editor, style);
  };

  return (
    <Slate editor={editor} value={initialValue}>
      <div>
        <span onClick={(event) => handleEvent(event, "bold")}>
          <BoldTextSVG />
        </span>
        <span onClick={(event) => handleEvent(event, "italic")}>
          <ItalicTextSVG />
        </span>
        <span onClick={(event) => handleEvent(event, "underline")}>
          <UnderlineTextSVG />
        </span>
      </div>
      <Editable renderLeaf={renderLeaf} placeholder={t("newEmail.writeLetter") || ""} />
    </Slate>
  );
}

export default TextEditor;
