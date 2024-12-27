"use client";

import "./tests.css";

export default function TestPage() {
  return (
    <main className="container mx-auto p-8">
      <form name="a11y-test-form">
        <h1 className="text-3xl font-bold mb-8">
          Accessibility Test Form Cases
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Contrast Tests */}
          <section className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">Color Contrast Tests</h2>
            <div className="p-4 border border-[var(--border)] rounded space-y-4">
              {/* Passing Examples */}
              <div>
                <label htmlFor="goodContrastInput">
                  Good Contrast Text Input
                </label>
                <input
                  id="goodContrastInput"
                  type="text"
                  className="px-4 py-2 border bg-[var(--background)] text-[var(--text)] good-focus"
                  aria-label="Good contrast input"
                />

                <label htmlFor="goodContrastSelect">Good Contrast Select</label>
                <select
                  id="goodContrastSelect"
                  className="px-4 py-2 border bg-[var(--background)] text-[var(--text)] good-focus"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <fieldset>
                  <legend className="text-[var(--text)]">
                    Good Contrast Radio
                  </legend>
                  <input
                    type="radio"
                    id="goodRadio1"
                    name="goodRadio"
                    className="good-focus"
                  />
                  <label htmlFor="goodRadio1" className="text-[var(--text)]">
                    Choice 1
                  </label>
                </fieldset>
              </div>

              {/* Failing Examples (only contrast fails) */}
              <div>
                <label
                  htmlFor="lowContrastInput"
                  className="text-[var(--low-contrast)]"
                >
                  Low Contrast Text Input
                </label>
                <input
                  id="lowContrastInput"
                  type="text"
                  className="px-4 py-2 border bg-[var(--background)] text-[var(--low-contrast)] good-focus"
                  aria-label="Low contrast input"
                />

                <label
                  htmlFor="lowContrastSelect"
                  className="text-[var(--low-contrast)]"
                >
                  Low Contrast Select
                </label>
                <select
                  id="lowContrastSelect"
                  className="px-4 py-2 border bg-[var(--background)] text-[var(--low-contrast)] good-focus"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <fieldset>
                  <legend className="text-[var(--low-contrast)]">
                    Low Contrast Radio
                  </legend>
                  <input
                    type="radio"
                    id="lowRadio1"
                    name="lowRadio"
                    className="good-focus"
                  />
                  <label
                    htmlFor="lowRadio1"
                    className="text-[var(--low-contrast)]"
                  >
                    Choice 1
                  </label>
                </fieldset>
              </div>
            </div>
          </section>

          {/* ARIA Label Tests */}
          <section className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">ARIA Label Tests</h2>
            <div className="p-4 border border-[var(--border)] rounded space-y-4">
              {/* Passing Examples */}
              <div>
                <input
                  type="text"
                  className="px-4 py-2 border good-focus"
                  aria-label="Text input with aria label"
                />

                <select
                  aria-label="Select with aria label"
                  className="px-4 py-2 border good-focus"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <textarea
                  aria-label="Textarea with aria label"
                  className="px-4 py-2 border good-focus"
                ></textarea>
              </div>

              {/* Failing Examples (only aria-label fails) */}
              <div>
                <input
                  type="text"
                  className="px-4 py-2 border good-focus"
                  // Missing aria-label intentionally
                />

                <select className="px-4 py-2 border good-focus">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <textarea className="px-4 py-2 border good-focus"></textarea>
              </div>
            </div>
          </section>

          {/* Form Label Tests */}
          <section className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">Form Label Tests</h2>
            <div className="p-4 border border-[var(--border)] rounded space-y-4">
              {/* Passing Examples */}
              <div>
                <label htmlFor="properTextInput">Text Input</label>
                <input
                  id="properTextInput"
                  type="text"
                  className="px-4 py-2 border good-focus"
                />

                <label htmlFor="properSelect">Select Menu</label>
                <select
                  id="properSelect"
                  className="px-4 py-2 border good-focus"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <label htmlFor="properCheckbox">Checkbox</label>
                <input
                  id="properCheckbox"
                  type="checkbox"
                  className="px-4 py-2 border good-focus"
                />
              </div>

              {/* Failing Examples (only htmlFor/id relationship fails) */}
              <div>
                <label>Text Input Without For</label>
                <input type="text" className="px-4 py-2 border good-focus" />

                <label>Select Without For</label>
                <select className="px-4 py-2 border good-focus">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <label>Checkbox Without For</label>
                <input
                  type="checkbox"
                  className="px-4 py-2 border good-focus"
                />
              </div>
            </div>
          </section>

          {/* Focus Tests */}
          <section className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">Focus Indicator Tests</h2>
            <div className="p-4 border border-[var(--border)] rounded space-y-4">
              {/* Passing Examples */}
              <div>
                <label htmlFor="goodFocusInput">Text Input</label>
                <input
                  id="goodFocusInput"
                  type="text"
                  className="px-4 py-2 border good-focus"
                />
                <label htmlFor="goodFocusSelect">Select</label>
                <select
                  id="goodFocusSelect"
                  className="px-4 py-2 border good-focus"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <label htmlFor="goodFocusTextarea">Textarea</label>
                <textarea
                  id="goodFocusTextarea"
                  className="px-4 py-2 border good-focus"
                ></textarea>
              </div>

              {/* Failing Examples (only focus indication fails) */}
              <div>
                <label htmlFor="noFocusInput">Text Input</label>
                <input
                  id="noFocusInput"
                  type="text"
                  className="px-4 py-2 border no-focus"
                />

                <label htmlFor="noFocusSelect">Select</label>
                <select
                  id="noFocusSelect"
                  className="px-4 py-2 border no-focus"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>

                <label htmlFor="noFocusTextarea">Textarea</label>
                <textarea
                  id="noFocusTextarea"
                  className="px-4 py-2 border no-focus"
                ></textarea>
              </div>
            </div>
          </section>
        </div>
      </form>
    </main>
  );
}
