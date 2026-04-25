import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Email", href: "mailto:afzaljawadkhan@gmail.com", ext: false },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/afzal-khan-939150192", ext: true },
    { label: "GitHub", href: "https://github.com/afzalkhanlala1", ext: true },
    { label: "Résumé", href: `${import.meta.env.BASE_URL}Afzal_Khan_Resume.pdf`, ext: false, dl: true },
  ];

  return (
    <footer className="relative bg-foreground text-background">
      <div className="container py-20 md:py-28">
        {/* huge wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block w-full text-left group"
          aria-label="Back to top"
        >
          <span className="glyph block text-[clamp(5rem,18vw,16rem)] leading-[0.85] tracking-[-0.04em]">
            <span className="not-italic">Afzal</span>{" "}
            <span className="italic text-accent">Khan.</span>
          </span>
        </button>

        <div className="mt-12 grid grid-cols-12 gap-x-6 lg:gap-x-10 gap-y-10 pt-10 border-t border-background/15">
          <div className="col-span-12 md:col-span-5">
            <p className="font-display text-2xl md:text-[28px] leading-[1.3] max-w-[34ch] text-background/90">
              Building agent systems and production AI from Islamabad — open
              to roles and collaborations worldwide.
            </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-background/60 mb-3">
              Elsewhere
            </div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.ext ? "_blank" : undefined}
                    rel={l.ext ? "noopener noreferrer" : undefined}
                    {...(l.dl ? { download: true } : {})}
                    className="group inline-flex items-center gap-1.5 font-mono text-[12px] tracking-[0.04em] hover:text-accent transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-background/60 mb-3">
              Index
            </div>
            <ul className="grid grid-cols-2 gap-y-2">
              {[
                ["About", "#about"],
                ["Selected Work", "#projects"],
                ["Experience", "#experience"],
                ["Stack", "#skills"],
                ["Archive", "/projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={
                      href.startsWith("#")
                        ? href
                        : `${import.meta.env.BASE_URL}${href.replace(/^\//, "")}`
                    }
                    className="font-mono text-[12px] hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-background/15 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-background/55">
          <span>© {year} Afzal Khan · All systems set in IBM Plex & Instrument Serif</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent" />
            v3 · Editorial release
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
