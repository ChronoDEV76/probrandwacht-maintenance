"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      {/* Achtergrond glow */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(248,113,113,0.25), transparent 60%)",
        }}
      />

      <div className="max-w-md text-center space-y-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400">
          ProSafetyMatch
        </p>

        <h1 className="text-3xl font-semibold leading-snug">
          We zijn bezig met een nieuwe omgeving.
        </h1>

        <p className="text-gray-300 text-sm leading-relaxed">
          Op dit moment werken we achter de schermen aan een verbeterde versie
          van ProSafetyMatch en ProBrandwacht. Binnenkort zijn we weer terug.
        </p>

        <p className="text-xs text-gray-500">
          Under construction · tijdelijk niet beschikbaar
        </p>

        <a
          href="mailto:info@chronosolutions.nl"
          className="inline-block text-xs text-gray-400 underline underline-offset-4 hover:text-gray-200"
        >
          Contact: info@chronosolutions.nl
        </a>
      </div>
    </div>
  );
}
