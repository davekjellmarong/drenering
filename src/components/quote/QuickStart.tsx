"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { JOB_TYPES } from "./options";

// First step of the quote form, embedded on the home and city pages. It sends
// the visitor to /tilbud with their answers in the URL, so nothing is lost.
export function QuickStart({ city }: { city?: string }) {
  const router = useRouter();
  const [job, setJob] = useState<string>("");
  const [zip, setZip] = useState("");

  const start = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (job) params.set("jobb", job);
    if (zip) params.set("postnr", zip);
    if (city) params.set("by", city);
    router.push(`/tilbud${params.size ? `?${params}` : ""}`);
  };

  return (
    <form
      onSubmit={start}
      className="rounded-2xl border border-border bg-white p-5 shadow-xl shadow-ink-900/5 sm:p-6"
    >
      <p className="text-lg font-semibold text-ink-900">
        Hva trenger du hjelp med{city ? ` i ${city}` : ""}?
      </p>
      <div className="mt-4 grid gap-2">
        {JOB_TYPES.map((type) => (
          <label
            key={type.id}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
              job === type.id
                ? "border-brand-500 bg-brand-50 text-ink-900"
                : "border-border hover:border-brand-300"
            }`}
          >
            <input
              type="radio"
              name="jobb"
              value={type.id}
              checked={job === type.id}
              onChange={() => setJob(type.id)}
              className="accent-brand-600"
            />
            <span className="font-medium">{type.title}</span>
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm font-medium text-ink-800" htmlFor="quick-zip">
        Postnummer
      </label>
      <input
        id="quick-zip"
        inputMode="numeric"
        autoComplete="postal-code"
        maxLength={4}
        placeholder="F.eks. 0580"
        value={zip}
        onChange={(event) => setZip(event.target.value.replace(/\D/g, ""))}
        className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-clay-500 py-3 font-semibold text-white hover:bg-clay-600"
      >
        Fortsett <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-xs text-text-muted">
        Gratis og uforpliktende. Tar rundt 2 minutter.
      </p>
    </form>
  );
}
