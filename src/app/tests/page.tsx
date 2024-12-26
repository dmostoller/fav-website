import { Metadata } from "next";
import "./tests.css";

export const metadata: Metadata = {
  title: "Focus Indicator Tests",
  description: "Test cases for WCAG 2.4.7 Focus Indicators",
};

export default function TestPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Accessibility Test Cases</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Color Contrast Tests */}
        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold">Color Contrast Tests</h2>
          <div className="p-4 border border-[var(--border)] rounded space-y-4">
            <p className="text-[var(--low-contrast)]">Low Contrast Text</p>
            <p className="text-[var(--medium-contrast)]">
              Medium Contrast Text
            </p>
            <p className="text-[var(--text)]">Good Contrast Text</p>
            <button className="px-4 py-2 bg-[var(--low-contrast)] text-[var(--background)]">
              Low Contrast Button
            </button>
          </div>
        </section>

        {/* Form Label Tests */}
        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold">Form Label Tests</h2>
          <div className="p-4 border border-[var(--border)] rounded space-y-4">
            <div>
              <input
                type="text"
                className="px-4 py-2 border border-[var(--border)] bg-[var(--background)] text-[var(--text)]"
              />
            </div>
            <div>
              <label>Invalid Label</label>
              <input
                type="text"
                className="px-4 py-2 border border-[var(--border)] bg-[var(--background)] text-[var(--text)]"
              />
            </div>
            <div>
              <label htmlFor="validInput">Valid Label</label>
              <input
                id="validInput"
                type="text"
                className="px-4 py-2 border border-[var(--border)] bg-[var(--background)] text-[var(--text)]"
              />
            </div>
            <div>
              <input
                type="text"
                aria-label="ARIA labeled input"
                className="px-4 py-2 border border-[var(--border)] bg-[var(--background)] text-[var(--text)]"
              />
            </div>
          </div>
        </section>

        {/* Focus Tests */}
        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold">Focus Indicator Tests</h2>
          <div className="p-4 border border-[var(--border)] rounded">
            <h2 className="text-xl mb-4">Test Case 1: No Focus Styles</h2>
            <button className="px-4 py-2 bg-[var(--surface)] bad-button">
              No Focus Button
            </button>
          </div>
          <div className="p-4 border border-[var(--border)] rounded">
            <h2 className="text-xl mb-4">Test Case 2: Insufficient Focus</h2>
            <input
              type="text"
              className="px-4 py-2 border border-[var(--border)] bg-[var(--background)] text-[var(--text)] weak-focus"
              placeholder="Weak Focus Input"
            />
          </div>
          <div className="p-4 border border-[var(--border)] rounded">
            <h2 className="text-xl mb-4">Test Case 3: WCAG Compliant Focus</h2>
            <button className="px-4 py-2 bg-[var(--primary)] text-[var(--background)] good-focus hover:bg-[var(--primary-hover)]">
              Good Focus Button
            </button>
          </div>
          <div className="p-4 border border-[var(--border)] rounded">
            <h2 className="text-xl mb-4">Test Case 4: Custom Focus Style</h2>
            <a
              href="#"
              className="px-4 py-2 bg-[var(--success)] text-[var(--background)] custom-focus"
            >
              Custom Focus Link
            </a>
          </div>
        </section>

        {/* ARIA Tests */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">ARIA Tests</h2>
          <div className="p-4 border border-[var(--border)] rounded space-y-4">
            <button
              aria-label="Valid ARIA button"
              className="px-4 py-2 bg-[var(--success)] text-[var(--background)]"
            >
              ✓
            </button>
            <button className="px-4 py-2 bg-[var(--error)] text-[var(--background)]">
              ❌
            </button>
            <div
              role="button"
              tabIndex={0}
              className="custom-button px-4 py-2 bg-[var(--surface)] text-[var(--text)]"
            >
              Custom Button
            </div>
            <div
              role="alert"
              className="alert p-4 bg-[var(--warning)] text-[var(--background)]"
            >
              Alert Message
            </div>
            <div role="tablist" className="tab-list space-x-2">
              <div
                role="tab"
                tabIndex={0}
                className="inline-block px-4 py-2 bg-[var(--surface)] text-[var(--text)]"
              >
                Tab 1
              </div>
              <div
                role="tab"
                tabIndex={0}
                className="inline-block px-4 py-2 bg-[var(--surface)] text-[var(--text)]"
              >
                Tab 2
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
