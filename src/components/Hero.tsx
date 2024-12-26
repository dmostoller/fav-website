export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">Make Your Forms</span>
            <span className="block text-[var(--primary)]">
              Accessible to Everyone
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base opacity-80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Validate form accessibility, check WCAG compliance, and simulate
            color vision deficiencies in real-time.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--primary)] hover:bg-[var(--primary-hover)] md:py-4 md:text-lg md:px-10"
              >
                Install Extension
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="https://github.com/dmostoller/form-accessibility-validator"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-[var(--border)] text-base font-medium rounded-md bg-[var(--background)] hover:bg-[var(--surface)] md:py-4 md:text-lg md:px-10"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
