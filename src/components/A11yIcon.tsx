"use client";

import Image from "next/image";
import { useSystemTheme } from "../hooks/useSystemTheme";

export function A11yIcon() {
  const isDarkMode = useSystemTheme();
  const a11yLogoSrc = isDarkMode ? "/a11ywhite.png" : "/a11yblack.png";

  return (
    <Image
      src={a11yLogoSrc}
      alt=""
      width={36}
      height={36}
      className="opacity-80 hover:opacity-100 transition-opacity rounded-full"
      aria-hidden="true"
    />
  );
}
