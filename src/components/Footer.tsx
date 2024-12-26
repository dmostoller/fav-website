import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Documentation", href: "/docs" },
    { name: "Install", href: "/docs/installation" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <Image
          src="/github-mark-white.png"
          alt=""
          width={36}
          height={36}
          className="opacity-80 hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base opacity-80 hover:opacity-100"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base opacity-60">
          &copy; {new Date().getFullYear()} Form Accessibility Validator. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
