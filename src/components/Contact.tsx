import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      const response = await fetch(
        "https://formsubmit.co/afzaljawadkhan@gmail.com",
        {
          method: "POST",
          body: formDataObj,
          headers: { Accept: "application/json" },
        }
      );
      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thanks — I'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast({
        title: "Couldn't send message",
        description: "Please try again, or reach me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const detailRows: { k: string; v: string; href?: string; ext?: boolean }[] = [
    { k: "Email", v: "afzaljawadkhan@gmail.com", href: "mailto:afzaljawadkhan@gmail.com" },
    { k: "Phone", v: "+92 337 9755627", href: "tel:+923379755627" },
    {
      k: "LinkedIn",
      v: "in/afzal-khan-939150192",
      href: "http://www.linkedin.com/in/afzal-khan-939150192",
      ext: true,
    },
    { k: "Based", v: "Islamabad, Pakistan" },
    { k: "Time-zone", v: "GMT+5 (PKT)" },
    { k: "Status", v: "Open to roles & collaborations" },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-surface">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="section-eyebrow">06 / Contact</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 section-title">
            Have a system worth shipping?
            <br />
            <span className="italic text-accent">Let's talk.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 gap-y-16">
          {/* Left — details ledger */}
          <div className="col-span-12 lg:col-span-5">
            <p className="font-display text-2xl md:text-[28px] leading-[1.3] max-w-[36ch] mb-10">
              Whether it's an AI engineering role, agent-systems consulting,
              or a tough ML pipeline you need stitched together — I'd love
              to hear about it.
            </p>

            <dl className="border-t border-border">
              {detailRows.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-12 gap-3 py-4 border-b border-border items-baseline"
                >
                  <dt className="col-span-4 font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground">
                    {row.k}
                  </dt>
                  <dd className="col-span-8 font-mono text-[13px] tracking-[0.02em] text-foreground">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.ext ? "_blank" : undefined}
                        rel={row.ext ? "noopener noreferrer" : undefined}
                        className="ul-link"
                      >
                        {row.v}
                      </a>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`${import.meta.env.BASE_URL}Afzal_Khan_Resume.pdf`}
                download
                className="btn-ink"
              >
                Download Résumé
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="http://www.linkedin.com/in/afzal-khan-939150192"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-7 lg:pl-10 lg:border-l lg:border-border flex flex-col"
          >
            <div className="section-eyebrow mb-8">Send a message</div>

            <input
              type="hidden"
              name="_subject"
              value="New portfolio message"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border mb-px">
              <Field
                label="Name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="border border-border bg-card p-6">
              <label
                htmlFor="message"
                className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Project, opportunity, idea — give me a paragraph or two."
                className="w-full bg-transparent border-0 outline-none resize-none text-foreground placeholder:text-muted-foreground/60 text-[15px] leading-relaxed"
              />
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
                Replies typically within 24h
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-ink disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="bg-card p-6">
    <label
      htmlFor={name}
      className="block font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted-foreground mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground/60 text-[15px]"
    />
  </div>
);

export default Contact;
