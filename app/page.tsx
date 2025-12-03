"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Achtergrond: SaaS glow */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(248,113,113,0.35), transparent 55%), radial-gradient(circle at bottom, #020617, #000000)",
        }}
      />

      <main className="relative mx-auto flex max-w-3xl items-center justify-center px-4 py-10">
        <div className="w-full rounded-3xl border border-white/10 bg-black/90 px-6 py-8 shadow-[0_0_80px_rgba(0,0,0,0.9)] md:px-10 md:py-10 space-y-7">
          {/* Label + titel */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center rounded-full border border-red-500/60 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300">
                Under construction
              </span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500 md:inline">
                ProSafetyMatch · ProBrandwacht
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
              We bouwen aan de nieuwe ProSafetyMatch omgeving.
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-xl md:max-w-none mx-auto md:mx-0">
              Achter de schermen werken we aan een platform waar brandwachten,
              opdrachtgevers en bureaus sneller, eerlijker en overzichtelijker
              met elkaar kunnen samenwerken.
            </p>
          </div>

          {/* 3 bullets – wat er komt */}
          <section className="grid gap-5 text-sm text-gray-100 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Directe matching
              </p>
              <p className="text-sm text-gray-200">
                Brandwachten rechtstreeks gekoppeld aan opdrachtgevers, zonder
                onnodige tussenlagen of ruis.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Slimme spoedpoule
              </p>
              <p className="text-sm text-gray-200">
                Een spoedpoule met rijksgediplomeerde brandwachten voor aanvragen
                die nu echt niet kunnen wachten.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Eén werkprofiel
              </p>
              <p className="text-sm text-gray-200">
                Eén duidelijk profiel voor al je inzet, afspraken en communicatie
                – straks allemaal in één dashboard.
              </p>
            </div>
          </section>

          {/* Kleine “timeline” */}
          <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            <div className="space-y-3 text-sm text-gray-200">
              <h2 className="text-base md:text-lg font-semibold">
                Waar zijn we nu mee bezig?
              </h2>
              <p className="text-sm text-gray-300">
                Op dit moment richten we de basis van het platform in, testen we
                de koppelingen en scherpen we de flows voor spoedaanvragen aan.
              </p>
              <p className="text-xs text-gray-400">
                Deze tijdelijke pagina staat online zodat we in alle rust kunnen
                bouwen zonder valse verwachtingen te wekken.
              </p>
            </div>

            <div className="flex items-stretch gap-3 text-xs text-gray-200">
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                <div className="h-12 w-px bg-gradient-to-b from-red-500/70 via-red-500/20 to-transparent" />
                <div className="h-3 w-3 rounded-full bg-gray-500/60" />
                <div className="h-12 w-px bg-gradient-to-b from-gray-500/60 via-gray-500/20 to-transparent" />
                <div className="h-3 w-3 rounded-full bg-gray-600/40" />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300">
                    Nu
                  </p>
                  <p className="text-xs text-gray-200">
                    Basisplatform, flows en techniek worden gebouwd en getest.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-300">
                    Binnenkort
                  </p>
                  <p className="text-xs text-gray-300">
                    Eerste gebruikers in de nieuwe omgeving en verfijning van
                    de spoedpoule.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Later
                  </p>
                  <p className="text-xs text-gray-400">
                    Volledig ProSafetyMatch-platform met dashboard, chat en
                    whitelabel-mogelijkheden voor bureaus.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer / contact */}
          <section className="border-t border-white/10 pt-5 text-center md:text-left text-xs text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p className="tracking-[0.16em] uppercase">
              ProSafetyMatch · ProBrandwacht · Coming soon
            </p>
            <p className="text-[11px]">
              Vragen? Mail naar{" "}
              <a
                href="mailto:info@chronosolutions.nl"
                className="underline underline-offset-2 hover:text-gray-200"
              >
                info@chronosolutions.nl
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

