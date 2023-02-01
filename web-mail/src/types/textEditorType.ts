import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type CustomEditor = BaseEditor & ReactEditor;

export type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};

export type RenderLeafProps = {
  children: any;
  leaf: CustomText;
  text: CustomText;
  attributes: {
    "data-slate-leaf": true;
  };
};

export type CustomElement = ParagraphElement;

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

declare module "slate" {
  export interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
