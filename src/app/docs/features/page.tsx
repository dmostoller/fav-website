export default function FeaturesGuide() {
  const features = [
    {
      title: "Real-time Form Analysis",
      description: "Automatically scans and validates forms as you browse",
      details: [
        "Instant feedback on accessibility issues",
        "Color-coded indicators for different severity levels",
        "Non-intrusive overlay highlighting",
      ],
    },
    {
      title: "WCAG Compliance Checking",
      description: "Validates against latest WCAG guidelines",
      details: [
        "WCAG 2.1 Level AA support",
        "Customizable compliance levels",
        "Detailed violation explanations",
      ],
    },
    {
      title: "Quick Fix Suggestions",
      description: "One-click solutions for common issues",
      details: [
        "Auto-generated fix proposals",
        "Code snippet suggestions",
        "Best practice recommendations",
      ],
    },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Features</h1>

      <section className="prose dark:prose-invert opacity-80">
        <p className="text-lg mb-8 text-zinc-800 dark:text-zinc-200">
          Form Accessibility Validator comes packed with powerful features to
          help you create and maintain accessible web forms.
        </p>

        <div className="space-y-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h2>
              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                {feature.description}
              </p>

              <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                Key Capabilities:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                {feature.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg mt-12 border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
            Configuration Options
          </h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Access these features through the extension popup or configuration
            panel:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Customize scanning rules</li>
            <li>Set notification preferences</li>
            <li>Adjust highlighting colors</li>
            <li>Configure auto-fix behavior</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
