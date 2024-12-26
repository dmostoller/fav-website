export default function Docs() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>

      <section className="prose prose-invert opacity-80">
        <p className="text-lg mb-6">
          Form Accessibility Validator helps you create more accessible web
          forms through real-time validation and suggestions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="/docs/installation"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              Installation Guide
            </a>
          </li>
          <li>
            <a
              href="/docs/usage"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              Usage Guide
            </a>
          </li>
          <li>
            <a
              href="/docs/features"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/docs/faq"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              FAQ
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
