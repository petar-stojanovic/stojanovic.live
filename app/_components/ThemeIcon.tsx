"use client";

import {useTheme} from "next-themes";
import Image from "next/image";

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

  const imageSrc =
    resolvedTheme === "dark" ? `${iconName}.svg` : `${iconName}-dark.svg`;

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
