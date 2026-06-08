"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "./container";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const roleOptions = [
  { value: "site", label: "Site" },
  { value: "cro", label: "CRO" },
  { value: "sponsor", label: "Sponsor" },
  { value: "other", label: "Other" },
] as const;

type FormState = {
  name: string;
  email: string;
  role: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  role: "site",
  message: "",
};

export const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-brand-ivory border-y border-brand-border px-4 my-8 md:my-28"
    >
      <Container>
        <div className="grid border-x border-brand-border lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden border-brand-border py-10 lg:border-r lg:px-10 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute -left-28 top-20 size-72 rounded-full bg-brand-orange/12 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 size-64 rounded-full bg-brand-indigo/10 blur-3xl"
            />

            <div className="relative max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                Get in touch
              </p>
              <h2 className="mt-5 font-clarion-display text-4xl font-light leading-tight text-brand-cocoa md:text-6xl">
                We&apos;re one click away.
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-muted">
                Let&apos;s discuss your recruitment challenges, operational
                goals, and how WeForge can support your clinical operations.
              </p>

              <ul className="mt-10 divide-y divide-brand-border border-y border-brand-border">
                <ContactDetail
                  icon={<Mail className="size-5" />}
                  label="Email"
                  value="contact@weforgeclinical.com"
                  href="mailto:contact@weforgeclinical.com"
                />
                <ContactDetail
                  icon={<Phone className="size-5" />}
                  label="Phone"
                  value="+48 792 586 357"
                  href="tel:+48792586357"
                />
                <ContactDetail
                  icon={<MapPin className="size-5" />}
                  label="Location"
                  value="Warsaw, Poland"
                />
              </ul>
            </div>
          </div>

          <div className="bg-brand-peach/35 p-4 md:p-8 lg:p-10">
            <div className="relative overflow-hidden border border-brand-border bg-brand-ivory p-5 md:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,79,0,0.13),transparent_70%)]"
              />
              <div className="relative">
                {status === "success" ? (
                  <div className="flex min-h-[460px] flex-col items-center justify-center py-8 text-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-brand-orange text-brand-ivory">
                      <CheckCircle2 className="size-7" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 font-clarion-display text-3xl font-light text-brand-cocoa md:text-4xl">
                      Thank you for reaching out.
                    </h3>
                    <p className="mt-4 max-w-md text-brand-muted">
                      Our team has received your message and will get back to
                      you as soon as possible.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-8"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                        Start the conversation
                      </p>
                      <h3 className="mt-3 font-clarion-display text-3xl font-light text-brand-cocoa md:text-4xl">
                        Tell us what you need.
                      </h3>
                    </div>

                    <Field label="Name" required>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </Field>

                    <Field label="Email" required>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </Field>

                    <Field label="Which best describes you?">
                      <select
                        name="role"
                        value={form.role}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, role: e.target.value }))
                        }
                        className={cn(inputClass, "appearance-none")}
                      >
                        {roleOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Message">
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className={cn(inputClass, "min-h-[132px] resize-y")}
                        placeholder="Tell us about your recruitment goals..."
                      />
                    </Field>

                    {status === "error" && errorMessage && (
                      <p className="text-sm text-destructive" role="alert">
                        {errorMessage}
                      </p>
                    )}

                    <p className="text-xs leading-5 text-brand-muted">
                      By submitting you agree with our Privacy Policy &amp;
                      Terms &amp; Conditions.
                    </p>

                    <Button
                      type="submit"
                      className="w-full bg-brand-cocoa shadow-brand hover:bg-brand-orange sm:w-auto"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : "Send message"}
                      <ArrowRight className="size-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const inputClass =
  "w-full border border-brand-border bg-brand-ivory px-4 py-3 text-sm text-brand-cocoa placeholder:text-brand-muted/60 outline-none transition-colors focus:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25";

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-peach text-brand-orange">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          {label}
        </span>
        <span className="mt-1 block font-medium text-brand-cocoa">
          {value}
        </span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 py-5 transition-colors hover:text-brand-orange"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4 py-5">{content}</div>
      )}
    </li>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-brand-cocoa">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      {children}
    </label>
  );
}
