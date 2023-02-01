import { Editor, Transforms, Text } from "slate";
import { CustomEditor, CustomText } from "@/types/textEditorType";

const editorEventHandlers = {
  toggleTextStyle: (editor: CustomEditor, style: string) => {
    const matchText = (editor: CustomEditor) => {
      const [match] = Editor.nodes(editor, {
        match: (n) => Text.isText(n) && n[style as keyof CustomText] === true,
        universal: true,
      });
      return match;
    };

    const isActive = matchText(editor);
    Transforms.setNodes(
      editor,
      { [`${style}`]: isActive ? false : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },
};

export default editorEventHandlers;
