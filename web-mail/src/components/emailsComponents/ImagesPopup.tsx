import React, { useState } from "react";
import StyledImagesPopup from "../styles/styledEmails/StyledImagesPopup";
import StapleSVG from "../styles/svgs/StapleSVG";

function ImagesPopup({ img, size }: { img: string; size: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledImagesPopup
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
    >
      <StapleSVG />
      {isOpen ? (
        <span className={isOpen ? "open" : "close"} onClick={() => window.location.replace(img)}>
          <img src={img} alt="img" /> <span>{img.split("/")[2]}</span> <span>{size}</span>
        </span>
      ) : (
        false
      )}
    </StyledImagesPopup>
  );
}

export default ImagesPopup;
