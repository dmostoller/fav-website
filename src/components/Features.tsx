import {
  Settings,
  Eye,
  CheckCircle,
  FileBarChart,
  Lightbulb,
  MousePointerClick,
} from "lucide-react";

const features = [
  {
    name: "Real-time Analysis",
    description:
      "Instant feedback on accessibility issues as you develop your forms.",
    icon: Settings,
  },
  {
    name: "Color Vision Simulation",
    description:
      "Test your forms across different types of color vision deficiencies.",
    icon: Eye,
  },
  {
    name: "WCAG Compliance",
    description: "Ensure your forms meet WCAG 2.1 accessibility guidelines.",
    icon: CheckCircle,
  },
  {
    name: "Accessibility Reports",
    description:
      "Generate detailed reports highlighting areas for improvement.",
    icon: FileBarChart,
  },
  {
    name: "Best Practices",
    description:
      "Learn and implement accessibility best practices in real-time.",
    icon: Lightbulb,
  },
  {
    name: "Element Path Detection",
    description: "Easily identify and navigate to problematic form elements.",
    icon: MousePointerClick,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">Everything you need</span>
            <span className="block text-[var(--primary)]">
              for accessible forms
            </span>
          </h2>
          <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
            Comprehensive tools and features to ensure your forms are accessible
            to all users
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative group p-6 bg-[var(--background)] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <feature.icon
                    className="h-8 w-8 text-[var(--primary)]"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{feature.name}</h3>
                  <p className="mt-2 text-base opacity-80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
