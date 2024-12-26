import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Form A11y Validator</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-[var(--text)] hover:text-[var(--primary)]"
            >
              Docs
            </Link>
            <Link
              href="/docs/installation"
              className="text-[var(--text)] hover:text-[var(--primary)]"
            >
              Install
            </Link>
            <Link
              href="/docs/faq"
              className="text-[var(--text)] hover:text-[var(--primary)]"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
