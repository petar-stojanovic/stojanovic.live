"use client";
import ThemeIcon from "@/app/_components/ThemeIcon";
import {useCallback, useEffect, useState} from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <>
      <button
        type="button"
        className={`fixed right-0 bottom-0 z-50 mr-4 mb-4 rounded-full border border-transparent bg-neutral-700 p-2 text-xs transition-opacity duration-300 ease-in-out sm:mr-8 sm:mb-8 dark:border-zinc-600/30 dark:bg-neutral-800 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={scrollToTop}
      >
        <ThemeIcon iconName={"top"} width={32} height={32} reverse={true} />
      </button>
    </>
  );
};
export default ScrollToTop;
