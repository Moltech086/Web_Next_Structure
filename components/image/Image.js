import React from "react";
import Image from "next/image";

const Images = (props) => {
  const {
    imagePath,
    altText,
    imgCustomClassName = "",
    ImgWidth = 0,
    ImgHeight = 0,
    fetchPriority,
    sizes,
    ...rest
  } = props;

  // Remove fetchPriority from rest to avoid leaking to DOM
  const { fetchPriority: _fp, ...safeRest } = rest;

  // Aspect ratio fix: if only one of width/height is set, set the other to auto
  let style = safeRest.style || {};
  if (ImgWidth && !ImgHeight) {
    style = { ...style, height: "auto" };
  } else if (ImgHeight && !ImgWidth) {
    style = { ...style, width: "auto" };
  }
  
    // Ensure objectFit for aspect ratio best practice
    style.objectFit = "cover";
  
    // Responsive srcSet and lazy loading for performance
    let srcSet;
    if (imagePath && typeof imagePath === 'string' && imagePath.match(/\.(webp|jpg|png)$/i)) {
      srcSet = `${imagePath}, ${imagePath.replace(/\.(webp|jpg|png)$/i, '@2x.$1')}`;
    }
  // Default to lazy loading unless fetchPriority is high (LCP)
  const loading = fetchPriority === "high" ? "eager" : "lazy";

  return (
    <Image
      src={imagePath}
      alt={altText || "Image"}
      className={`img-fluid ${imgCustomClassName}`}
      width={ImgWidth}
      height={ImgHeight}
      priority={!!fetchPriority && fetchPriority === "high"}
      quality={50}
      fetchPriority={fetchPriority}
      sizes={sizes || "50vw"}
      style={style}
        {...(srcSet ? { srcSet } : {})}
        loading={loading}
      {...safeRest}
    />
  );
};

export default Images;