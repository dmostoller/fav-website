export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-[var(--border)] p-6">
        <div className="mb-6 pb-4 border-b border-[var(--border)]">
          <a
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
          </a>
        </div>
        <nav className="space-y-2">
          <a href="/docs" className="block hover:text-[var(--primary)]">
            Overview
          </a>
          <a
            href="/docs/installation"
            className="block hover:text-[var(--primary)]"
          >
            Installation
          </a>
          <a href="/docs/usage" className="block hover:text-[var(--primary)]">
            Usage Guide
          </a>
          <a
            href="/docs/features"
            className="block hover:text-[var(--primary)]"
          >
            Features
          </a>
          <a href="/docs/faq" className="block hover:text-[var(--primary)]">
            FAQ
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
