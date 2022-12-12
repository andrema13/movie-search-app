import React from "react";

export const getImageHelper = ({
  className,
  imgPath,
  baseUrl,
  logoSize,
  placeholder,
  alt,
}) => {
  return imgPath ? (
    <img
      className={className}
      src={`${baseUrl}/${logoSize}/${imgPath}`}
      alt={alt}
    />
  ) : (
    <img className={className} src={placeholder} alt={alt} />
  );
};

export const formatNumber = (number, fractionDigits) => {
  return number.toFixed(fractionDigits);
};
