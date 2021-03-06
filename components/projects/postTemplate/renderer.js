/* eslint-disable @next/next/no-img-element */

import React from "react";
import fonts from "../../../fonts";
import wrapText from "../../../services/renderer/wrapText";

const Renderer = ({
  project,
  dimensions,
  fontSize,
  fontColor,
  lineHeight,
  maxCharacters,
  confession,
}) => {
  let fontSizeSplit = fontSize.substring(0, 2);
  let fontSizeNum = Number(fontSizeSplit);
  let lorema =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean. Amet nisl purus in mollis nunc sed id semper. Scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices gravida. Nunc non blandit massa enim. Purus in mollis nunc sed id semper risus in. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Morbi tempus iaculis urna id volutpat lacus laoreet non. Netus et malesuada fames ac turpis egestas maecenas. At consectetur lorem donec massa sapien faucibus et molestie ac. Cras tincidunt lobortis feugiat viva.";
  let lorem = maxCharacters
    ? lorema.substring(0, maxCharacters)
    : lorema.substring(0, 650);

  // Updating Font Family for google fonts compatibility: Font families must be '+' delimited strings
  const fontVariant = project.template.fontVariant;
  let fontFamily = project.template.fontFamily;
  let origFontFam = fontFamily;
  fontFamily = fontFamily.replace(/\s/g, "+");

  let fontItalic = false;
  let fontWeight;
  if (fontVariant.includes("italic")) {
    fontItalic = true;

    fontWeight = fontVariant.substring(0, fontVariant.length - 6);
  } else if (fontVariant === "regular") {
    fontWeight = "400";
  } else {
    fontWeight = String(fontVariant);
  }
  let fontUrl;

  if (fontItalic) {
    fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:ital,wght%40${fontWeight}&display=swap`;
  } else {
    fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght%40${fontWeight}&display=swap`;
  }

  function htmlDecode(input) {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  React.useEffect(() => {
    let result = fonts.filter((font) => {
      return font.family.includes(origFontFam);
    });
    let requiredFont = result[0];

    let myFont = new FontFace(
      origFontFam,
      `url(${requiredFont.files[fontVariant]})`
    );

    myFont
      .load()
      .then((font) => {
        let canvas = document.getElementById("confession-renderer");
        let ctx = canvas.getContext("2d");
        document.fonts.add(font);

        let templateBackground = new Image();
        templateBackground.src = project.template.backgroundImage.imageData;

        templateBackground.onload = () => {
          onTemplateBackgroundLoaded(
            canvas,
            ctx,
            templateBackground,
            font,
            requiredFont.category
          );
        };
      })
      .catch((err) => console.error(err));
  }, [
    project.template.backgroundImage.imageData,
    confession,
    lorem,
    fontSize,
    fontUrl,
    fontVariant,
    lineHeight,
    origFontFam,
    fontColor,
    onTemplateBackgroundLoaded,
  ]);

  const onTemplateBackgroundLoaded = React.useCallback(
    (canvas, ctx, templateBackground, font, fontCategory) => {
      ctx.drawImage(templateBackground, 0, 0, 1080, 1080);

      let text = confession ? htmlDecode(confession) : lorem;
      let textBoxSize = fontSizeNum * lineHeight;

      ctx.font = `${fontSizeNum}pt "${font.family}", ${fontCategory}`;
      ctx.fillStyle = fontColor;

      // Calculate where text should start from
      let startY = wrapText(ctx, text, 112, 350, 856, textBoxSize);

      // Wipe the canvas clean
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image and text again
      ctx.drawImage(templateBackground, 0, 0, 1080, 1080);

      wrapText(ctx, text, 112, startY, 856, textBoxSize);
    },
    [confession, lineHeight, lorem, fontSizeNum, fontColor]
  );

  return (
    <div
      style={{
        margin: "0 auto",
        height: dimensions || "1080px",
        width: dimensions || "1080px",
      }}
    >
      <canvas id="confession-renderer" width={"1080"} height={"1080"}></canvas>
    </div>
  );
};

export default Renderer;
