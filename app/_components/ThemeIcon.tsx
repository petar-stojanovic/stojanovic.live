"use client";

import {useTheme} from "next-themes";
import Image from "next/image";
import {useEffect, useState} from "react";

const ThemeIcon = ({
  iconName,
  width,
  height,
  reverse = false,
  alt = "",
  className = "",
}: {
  iconName: string;
  width: number;
  height: number;
  reverse?: boolean;
  alt?: string;
  className?: string;
}) => {
  const {resolvedTheme} = useTheme();
  const [imageSrc, setImageSrc] = useState(`${iconName}.svg`);

  useEffect(() => {
    setImageSrc(
      resolvedTheme === "dark"
        ? reverse
          ? `${iconName}-dark.svg`
          : `${iconName}.svg`
        : reverse
          ? `${iconName}.svg`
          : `${iconName}-dark.svg`,
    );
  }, [iconName, resolvedTheme, reverse]);

  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default ThemeIcon;
