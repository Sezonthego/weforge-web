"use client";

import { useState } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
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
    <section id="contact" className="bg-brand-ivory py-10 md:py-20 lg:pt-32 px-4">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Get in touch
            </p>
            <Heading className="mt-4 mb-4" as="h2">
              We&apos;re one click away.
            </Heading>
            <SubHeading className="max-w-lg">
              Let&apos;s discuss your recruitment challenges, operational goals,
              and how WeForge can support your clinical operations.
            </SubHeading>

            <ul className="mt-10 space-y-4 text-brand-muted">
              <li>
                <span className="block text-sm text-brand-muted">
                  Email
                </span>
                <a
                  href="mailto:contact@weforgeclinical.com"
                  className="font-medium text-brand-cocoa hover:text-brand-orange hover:underline"
                >
                  contact@weforgeclinical.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-brand-muted">
                  Phone
                </span>
                <a
                  href="tel:+48792586357"
                  className="font-medium text-brand-cocoa hover:text-brand-orange hover:underline"
                >
                  +48 792 586 357
                </a>
              </li>
              <li>
                <span className="block text-sm text-brand-muted">
                  Location
                </span>
                <span className="font-medium text-brand-cocoa">
                  Warsaw, Poland
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-border bg-brand-peach p-6 md:p-10">
            {status === "success" ? (
              <div className="py-8 text-center">
                <h3 className="text-xl font-bold font-display text-brand-cocoa">
                  Thank you for reaching out!
                </h3>
                <p className="mt-3 text-brand-muted">
                  Our team has received your message and will get back to you as
                  soon as possible.
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                    className={cn(inputClass, "resize-y min-h-[120px]")}
                    placeholder="Tell us about your recruitment goals..."
                  />
                </Field>

                {status === "error" && errorMessage && (
                  <p className="text-sm text-destructive" role="alert">
                    {errorMessage}
                  </p>
                )}

                <p className="text-xs text-brand-muted">
                  By submitting you agree with our Privacy Policy &amp; Terms
                  &amp; Conditions.
                </p>

                <Button
                  type="submit"
                  className="shadow-brand w-full sm:w-auto"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

const inputClass =
  "w-full rounded-lg border border-brand-border bg-brand-ivory px-4 py-2.5 text-sm text-brand-cocoa placeholder:text-brand-muted/60 outline-none focus-visible:ring-2 focus-visible:ring-brand-orange";

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
