import { useEffect, useState } from "react";
import { Moon, SunMedium, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
  { id: "01", label: "Index", href: "#hero" },
  { id: "02", label: "About", href: "#about" },
  { id: "03", label: "Selected Work", href: "#projects" },
  { id: "04", label: "Experience", href: "#experience" },
  { id: "05", label: "Stack", href: "#skills" },
  { id: "06", label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.querySelector(i.href)).filter(
      (el): el is Element => Boolean(el)
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Mark */}
          <button
            onClick={() => go("#hero")}
            className="group flex items-baseline gap-2 select-none"
            aria-label="Afzal Khan — top"
          >
            <span className="font-display italic text-2xl md:text-[28px] leading-none">
              Afzal<span className="text-accent">.</span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
              AI · ENG
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => go(item.href)}
                    className={`group flex items-baseline gap-2 px-3 py-2 font-mono text-[12px] tracking-[0.14em] uppercase transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="text-[10px] text-muted-foreground/70 group-hover:text-accent">
                      {item.id}
                    </span>
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-500 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="h-9 w-9 inline-flex items-center justify-center border border-border hover:border-foreground hover:text-accent transition-colors"
            >
              <SunMedium className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <a
              href={`${import.meta.env.BASE_URL}Afzal_Khans_Resume.pdf`}
              download
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3 border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-colors font-mono text-[11px] tracking-[0.18em] uppercase"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-9 w-9 relative inline-flex items-center justify-center border border-border"
            >
              <span
                className={`absolute h-px w-4 bg-foreground transition-transform ${
                  open ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-foreground transition-transform ${
                  open ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-surface border-l border-border transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-10 px-8">
            <div className="section-eyebrow mb-10">Menu</div>
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="rule-bottom">
                  <button
                    onClick={() => go(item.href)}
                    className="w-full flex items-baseline justify-between py-5 group"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                        {item.id}
                      </span>
                      <span className="font-display text-3xl group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <a
                href={`${import.meta.env.BASE_URL}Afzal_Khans_Resume.pdf`}
                download
                className="btn-ink w-full"
                onClick={() => setOpen(false)}
              >
                Download Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
