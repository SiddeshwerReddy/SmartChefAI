import Image from "next/image";
import Link from "next/link";
import { ChefHat, Refrigerator, Sparkles } from "lucide-react";

const footerLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/recipes",
    label: "Recipes",
  },
  {
    href: "/pantry",
    label: "Pantry",
  },
];

const highlights = [
  {
    icon: Sparkles,
    label: "AI recipe generation",
  },
  {
    icon: Refrigerator,
    label: "Smart pantry tracking",
  },
  {
    icon: ChefHat,
    label: "Step-by-step cooking help",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-linear-to-b from-stone-50 to-orange-50/60 px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-start">
        <div className="space-y-5">
          <Link href="/" className="inline-flex items-center gap-4">
            <div className="rounded-2xl border border-orange-200 bg-white p-2 shadow-sm">
              <Image
                src="/orange-logo.png"
                alt="SmartChefAI Logo"
                width={72}
                height={72}
                className="h-16 w-16 object-contain md:h-[4.5rem] md:w-[4.5rem]"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-stone-900">SmartChefAI</p>
              <p className="max-w-md text-sm text-stone-600">
                Your kitchen companion for discovering recipes, organizing ingredients,
                and cooking with more confidence.
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 border border-orange-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 shadow-sm"
              >
                <Icon className="h-4 w-4 text-orange-600" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
              Explore
            </p>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-stone-600 transition-colors hover:text-orange-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
              Kitchen Note
            </p>
            <p className="text-sm leading-6 text-stone-600">
              Build meals from what you already have, save the ones you love, and let
              SmartChefAI guide the next cooking session.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-stone-200 pt-5 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
        <p>SmartChefAI &copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Made for home cooks, busy planners, and curious food lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;
