"use client";

import Image from "next/image";
import { useSystemTheme } from "../hooks/useSystemTheme";

export function GitHubIcon() {
  const isDarkMode = useSystemTheme();
  const githubLogoSrc = isDarkMode
    ? "/github-mark-white.png"
    : "/github-mark.png";

  return (
    <Image
      src={githubLogoSrc}
      alt=""
      width={36}
      height={36}
      className="opacity-80 hover:opacity-100 transition-opacity"
      aria-hidden="true"
    />
  );
}
