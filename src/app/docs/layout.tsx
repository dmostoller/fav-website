"use client";

import Link from "next/link";
import { useState } from "react";
import { GitHubIcon } from "../../components/GitHubIcon";
import { A11yIcon } from "@/components/A11yIcon";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-20
        w-64 border-r border-[var(--border)] p-6 bg-background
        transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:transform-none
        flex flex-col justify-between
        h-screen overflow-y-hidden
      `}
      >
        <div>
          <div className="mb-6 pb-4 border-b border-[var(--border)]">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold hover:text-[var(--primary)]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
          </div>
          <nav className="space-y-2">
            <Link href="/docs" className="block hover:text-[var(--primary)]">
              Overview
            </Link>
            <Link
              href="/docs/installation"
              className="block hover:text-[var(--primary)]"
            >
              Installation
            </Link>
            <Link
              href="/docs/usage"
              className="block hover:text-[var(--primary)]"
            >
              Usage Guide
            </Link>
            <Link
              href="/docs/features"
              className="block hover:text-[var(--primary)]"
            >
              Features
            </Link>
            <Link
              href="/docs/faq"
              className="block hover:text-[var(--primary)]"
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* Additional Links Section */}
        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <p className="text-sm font-medium mb-4 opacity-60">
            Additional Links
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="space-y-2">
              <Link href="/terms" className="block hover:text-[var(--primary)]">
                Terms
              </Link>
              <Link
                href="/privacy"
                className="block hover:text-[var(--primary)]"
              >
                Privacy
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dmostoller/form-accessibility-validator"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[var(--primary)]"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.a11yproject.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[var(--primary)]"
              >
                <A11yIcon />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed z-30 bottom-4 right-4 lg:hidden bg-[var(--primary)] text-white p-3 rounded-full shadow-lg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transform transition-transform duration-200"
        >
          {isSidebarOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:pl-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}
