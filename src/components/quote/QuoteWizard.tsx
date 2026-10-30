"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { submitForm } from "@/src/utils/submitForm";
import {
  BASEMENT,
  BUILD_YEARS,
  HOUSE_TYPES,
  JOB_TYPES,
  TIMING,
  jobTypeById,
} from "./options";

// Job first, contact details last: contractors need to know what the job is,
// and visitors are more willing to share their number once they've described
// the problem. Field names must match FORMS.tilbud in functions/api/[form].ts.
interface Answers {
  jobtype: string;
  timing: string;
  description: string;
  zip: string;
  address: string;
  city: string;
  housetype: string;
  buildyear: string;
  basement: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

const STEPS = ["Jobben", "Boligen", "Kontakt"];

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-ink-800">
      {label}
      {optional && <span className="font-normal text-text-muted"> (valgfritt)</span>}
      {children}
    </label>
  );
}

function Choice({
  options,
  value,
  onChange,
  name,
}: {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {options.map((option) => (
        <label
          key={option}
          className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors ${
            value === option
              ? "border-brand-500 bg-brand-50 font-medium text-ink-900"
              : "border-border text-ink-800 hover:border-brand-300"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="sr-only"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export function QuoteWizard() {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    jobtype: "",
    timing: "",
    description: "",
    zip: "",
    address: "",
    city: "",
    housetype: "",
    buildyear: "",
    basement: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  // Carry over answers from the quick start on the home and city pages.
  useEffect(() => {
    const job = jobTypeById(params.get("jobb"));
    setAnswers((prev) => ({
      ...prev,
      jobtype: job?.value ?? prev.jobtype,
      zip: params.get("postnr") ?? prev.zip,
      city: params.get("by") ?? prev.city,
    }));
  }, [params]);

  const set = (field: keyof Answers) => (value: string) =>
    setAnswers((prev) => ({ ...prev, [field]: value }));

  const stepValid = [
    Boolean(answers.jobtype),
    /^\d{4}$/.test(answers.zip) && answers.address.trim() !== "",
    answers.firstname.trim() !== "" &&
      answers.lastname.trim() !== "" &&
      answers.phone.replace(/\D/g, "").length >= 8 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email) &&
      consent,
  ];

  const next = () => {
    setError("");
    if (!stepValid[step]) {
      setError(
        step === 0
          ? "Velg hva du trenger hjelp med."
          : step === 1
            ? "Fyll inn postnummer (4 siffer) og adresse."
            : "Fyll inn navn, telefon (8 siffer) og e-post, og godta vilkårene."
      );
      return;
    }
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      send();
    }
  };

  const send = async () => {
    setSending(true);
    try {
      await submitForm("tilbud", { ...answers, consent: "Ja" });
      router.push("/tilbud/takk");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Noe gikk galt. Prøv igjen.");
      setSending(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <ol className="mb-6 flex items-center gap-2" aria-label="Steg">
        {STEPS.map((label, index) => (
          <li key={label} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                index < step
                  ? "bg-brand-600 text-white"
                  : index === step
                    ? "bg-ink-900 text-white"
                    : "bg-slate-200 text-text-muted"
              }`}
            >
              {index < step ? <Check className="h-4 w-4" /> : index + 1}
            </span>
            <span
              className={`text-sm ${index === step ? "font-semibold text-ink-900" : "text-text-muted"}`}
            >
              {label}
            </span>
            {index < STEPS.length - 1 && <span className="h-px flex-1 bg-slate-200" />}
          </li>
        ))}
      </ol>

      <div className="rounded-2xl border border-border bg-white p-5 shadow-xl shadow-ink-900/5 sm:p-8">
        {step === 0 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-ink-900">Hva trenger du hjelp med?</h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {JOB_TYPES.map((type) => (
                  <label
                    key={type.id}
                    className={`cursor-pointer rounded-xl border p-4 transition-colors ${
                      answers.jobtype === type.value
                        ? "border-brand-500 bg-brand-50"
                        : "border-border hover:border-brand-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="jobtype"
                      value={type.value}
                      checked={answers.jobtype === type.value}
                      onChange={() => set("jobtype")(type.value)}
                      className="sr-only"
                    />
                    <span className="block font-semibold text-ink-900">{type.title}</span>
                    <span className="mt-0.5 block text-sm text-text-subtle">{type.hint}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-ink-800">
                Når vil du ha jobben gjort? <span className="font-normal text-text-muted">(valgfritt)</span>
              </p>
              <Choice name="timing" options={TIMING} value={answers.timing} onChange={set("timing")} />
            </div>
            <Field label="Beskriv kort hva du ser eller ønsker" optional>
              <textarea
                rows={3}
                value={answers.description}
                onChange={(event) => set("description")(event.target.value)}
                placeholder="F.eks. fuktflekker nederst på kjellerveggen etter regn, huset er fra 1975."
                className={inputClass}
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-ink-900">Om boligen</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Postnummer">
                <input
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={4}
                  value={answers.zip}
                  onChange={(event) => set("zip")(event.target.value.replace(/\D/g, ""))}
                  className={inputClass}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Sted" optional>
                  <input
                    autoComplete="address-level2"
                    value={answers.city}
                    onChange={(event) => set("city")(event.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>
            <Field label="Adresse">
              <input
                autoComplete="street-address"
                value={answers.address}
                onChange={(event) => set("address")(event.target.value)}
                className={inputClass}
              />
            </Field>
            <div>
              <p className="text-sm font-medium text-ink-800">
                Type bolig <span className="font-normal text-text-muted">(valgfritt)</span>
              </p>
              <Choice name="housetype" options={HOUSE_TYPES} value={answers.housetype} onChange={set("housetype")} />
            </div>
            <div>
              <p className="text-sm font-medium text-ink-800">
                Omtrent når er huset bygget? <span className="font-normal text-text-muted">(valgfritt)</span>
              </p>
              <Choice name="buildyear" options={BUILD_YEARS} value={answers.buildyear} onChange={set("buildyear")} />
            </div>
            <div>
              <p className="text-sm font-medium text-ink-800">
                Har huset kjeller? <span className="font-normal text-text-muted">(valgfritt)</span>
              </p>
              <Choice name="basement" options={BASEMENT} value={answers.basement} onChange={set("basement")} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-ink-900">Hvor kan firmaene nå deg?</h2>
              <p className="mt-1 text-sm text-text-subtle">
                Vi sender forespørselen til opptil 3 dreneringsfirma i ditt område. De
                kontakter deg direkte.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Fornavn">
                <input autoComplete="given-name" value={answers.firstname} onChange={(e) => set("firstname")(e.target.value)} className={inputClass} />
              </Field>
              <Field label="Etternavn">
                <input autoComplete="family-name" value={answers.lastname} onChange={(e) => set("lastname")(e.target.value)} className={inputClass} />
              </Field>
              <Field label="Telefon">
                <input type="tel" inputMode="tel" autoComplete="tel" value={answers.phone} onChange={(e) => set("phone")(e.target.value)} className={inputClass} />
              </Field>
              <Field label="E-post">
                <input type="email" autoComplete="email" value={answers.email} onChange={(e) => set("email")(e.target.value)} className={inputClass} />
              </Field>
            </div>
            <label className="flex items-start gap-3 text-sm text-text-subtle">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 accent-brand-600"
              />
              <span>
                Jeg godtar at forespørselen min sendes til opptil 3 dreneringsfirma, og
                har lest{" "}
                <Link href="/juridisk/personvern" className="text-brand-600 underline" target="_blank">
                  personvernerklæringen
                </Link>
                .
              </span>
            </label>
          </div>
        )}

        {error && (
          <p className="mt-5 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep(step - 1);
              }}
              className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" /> Tilbake
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={next}
            disabled={sending}
            className="flex items-center gap-2 rounded-lg bg-clay-500 px-6 py-3 font-semibold text-white hover:bg-clay-600 disabled:opacity-60"
          >
            {step < STEPS.length - 1 ? (
              <>
                Neste <ArrowRight className="h-4 w-4" />
              </>
            ) : sending ? (
              "Sender …"
            ) : (
              "Send forespørsel"
            )}
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-text-muted">
        Gratis og uforpliktende. Du velger selv om du vil takke ja til et tilbud.
      </p>
    </div>
  );
}
