import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "AI Assistant", href: "#ai" },
    { label: "Download", href: "#download" },
    { label: "App Preview", href: "#preview" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: "https://github.com" },
    { label: "API Reference", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/80">
      <div className="absolute inset-0 bg-gradient-to-t from-healix-cyan/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-healix-cyan to-healix-blue">
                <span className="text-sm font-bold text-healix-navy">H</span>
              </div>
              <span className="text-lg font-semibold text-slate-900">
                Heal<span className="text-healix-cyan">ix</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm text-healix-muted leading-relaxed">
              AI-powered healthcare assistance for Android. Intelligent, connected, and accessible health support — built for the future.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-healix-muted transition-all hover:text-healix-cyan hover:border-healix-cyan/30 hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-slate-900">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-healix-muted transition-colors hover:text-healix-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-healix-dim">
            © {new Date().getFullYear()} Healix. All rights reserved.
          </p>
          <p className="text-xs text-healix-dim">
            Built with intelligence · Designed for healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
