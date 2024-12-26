export default function InstallationGuide() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Installation Guide</h1>

      <section className="prose dark:prose-invert opacity-80">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Install</h2>

        <ol className="list-decimal pl-6 space-y-4 text-zinc-800 dark:text-zinc-200">
          <li>
            <p>Open Chrome Web Store</p>
            <a
              href="https://chrome.google.com/webstore/detail/form-accessibility-validator"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 inline-block mt-2"
            >
              Chrome Web Store Link →
            </a>
          </li>

          <li>
            <p>Click &quot;Add to Chrome&quot;</p>
          </li>

          <li>
            <p>Click &quot;Add Extension&quot; in the popup</p>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Browser Compatibility
        </h2>

        <ul className="mt-4 space-y-2 text-zinc-800 dark:text-zinc-200">
          <li>✅ Google Chrome (Latest)</li>
          <li>✅ Brave Browser</li>
          <li>✅ Microsoft Edge</li>
          <li>✅ Opera</li>
          <li>❌ Safari</li>
          <li>❌ Firefox</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Post-Installation Setup
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-zinc-800 dark:text-zinc-200">
          <li>
            <p>Click the extensions icon in your browser toolbar</p>
          </li>
          <li>
            <p>Pin Form Accessibility Validator for easy access</p>
          </li>
          <li>
            <p>
              Right-click the extension icon and select &quot;Options&quot; to
              customize settings
            </p>
          </li>
        </ol>

        <div className="bg-amber-100/30 dark:bg-amber-900/30 border border-amber-200/30 dark:border-amber-700/30 p-4 rounded mt-8">
          <h3 className="text-amber-800 dark:text-amber-400 font-semibold">
            Troubleshooting
          </h3>
          <ul className="mt-2 space-y-2 text-amber-900 dark:text-amber-100">
            <li>Ensure your browser is up to date</li>
            <li>
              Try disabling other accessibility extensions that might conflict
            </li>
            <li>Clear browser cache and reload the page</li>
            <li>
              If issues persist, right-click the extension icon and select
              &quot;Remove from Chrome&quot; then reinstall
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
