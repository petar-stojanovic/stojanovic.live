"use client";

import {useTheme} from "next-themes";
import Image from "next/image";
import {useEffect, useState} from "react";

export function ModeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme} type="button">
      {resolvedTheme === "light" ? (
        <Image src="/light.svg" alt={"Theme Icon"} width={24} height={24} />
      ) : (
        <Image src="/dark.svg" alt={"Theme Icon"} width={24} height={24} />
      )}
    </button>
  );
}
