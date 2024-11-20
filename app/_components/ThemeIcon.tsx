"use client";

import {useTheme} from "next-themes";
import Image from "next/image";
import {useEffect, useState} from "react";

const ThemeIcon = ({
  iconName,
  width,
  height,
  alt = "",
  className = "",
}: {
  iconName: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}) => {
  const {resolvedTheme} = useTheme();
  const [imageSrc, setImageSrc] = useState(`${iconName}.svg`);

  useEffect(() => {
    setImageSrc(
      resolvedTheme === "dark" ? `${iconName}.svg` : `${iconName}-dark.svg`,
    );
  }, [iconName, resolvedTheme]);

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
