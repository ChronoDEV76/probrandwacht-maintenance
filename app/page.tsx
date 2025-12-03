"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-lg px-6 text-center space-y-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400">
          ProSafetyMatch
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          We bouwen aan een nieuwe ProSafetyMatch omgeving.
        </h1>

        <p className="text-gray-300 text-sm leading-relaxed">
          Op dit moment zijn we achter de schermen bezig met een vernieuwd
          platform voor brandwachten, opdrachtgevers en bureaus.
          Deze pagina staat tijdelijk online terwijl we verder ontwikkelen.
        </p>

        <p className="text-xs text-gray-400">
          Kom binnenkort terug voor de nieuwe mini-ProSafetyMatch ervaring.
        </p>

        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 pt-2">
          Under construction · tijdelijk offline
        </p>
      </div>
    </div>
  );
}

