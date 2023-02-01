import React, { useEffect, useState, useRef } from "react";

import StapleSVG from "../styles/svgs/StapleSVG";
import { calculateFileSize } from "@/utils/functions/utilsFunctions";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "react-i18next";

import themesDictionary from "@/utils/themes/themesDictionary";
import { showImages, changeHandler, chooseSVGFill } from "@/utils/functions/utilsFunctions";

function AddFile() {
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
  const newLetterPopup = useAppSelector((state) => state.utils.newLetterPopup);
  const theme = useAppSelector((state) => state.utils.theme);
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement | null>(null);

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [images, setImages] = useState<(string | ArrayBuffer)[]>([]);
  const [imagesSizeCheck, setImagesSizeCheck] = useState<{ img: string }[]>([]);

  useEffect(() => {
    if (newLetterPopup === false) {
      input.current!.value = "";
      setImages([]);
    }
  }, [newLetterPopup]);

  useEffect(() => {
    showImages(imageFiles, setImages, setImagesSizeCheck);
  }, [imageFiles]);

  return (
    <div>
      <button>
        <StapleSVG svgFill={chooseSVGFill({ theme, dictionary: themesDictionary })} />
        <span>{t("newEmail.addFiles")}</span>
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          multiple
          onChange={(e) => changeHandler(e, imageTypeRegex, setImageFiles)}
          ref={input}
        />
      </button>

      {images.length > 0 ? (
        <div>
          <div>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <img src={String(image)} alt="" />
                </div>
              );
            })}
          </div>
          <span>
            {t("newEmail.filesSize")}: {calculateFileSize(imagesSizeCheck)}
          </span>
          <span
            onClick={() => {
              input.current!.value = "";
              setImages([]);
            }}
          >
            {t("newEmail.clear")}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default AddFile;
