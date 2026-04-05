const subtleLink =
  "text-[clamp(0.6875rem,2.8dvmin,0.8125rem)] text-white/60 transition-[opacity,color] duration-150 hover:text-white/90 hover:underline hover:decoration-white/50 hover:underline-offset-[0.2em] sm:text-[clamp(0.75rem,2dvw,0.8125rem)]";

export default function HomePage() {
  return (
    <main className="box-border flex h-full min-h-0 max-h-full flex-col items-center justify-center gap-2 overflow-hidden px-4 py-3 text-center [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))] [padding-top:max(0.75rem,env(safe-area-inset-top))] animate-fade-in sm:gap-4 sm:px-6 sm:py-4">
      <div className="flex min-h-0 flex-col items-center gap-2 sm:gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimizer */}
        <img
          className="block h-auto max-h-[min(26dvh,9.5rem)] w-[min(10.5rem,42dvmin)] max-w-[min(72dvw,100%)] object-contain opacity-100 sm:max-h-none sm:w-[min(10.5rem,48dvw)]"
          src="/logo.svg"
          alt=""
          width={2000}
          height={2000}
          decoding="async"
        />
        <h1 className="text-[clamp(0.95rem,4.2dvmin,1.375rem)] font-semibold tracking-tight text-white sm:text-[clamp(1.05rem,3.2dvw,1.375rem)]">
          Bell-Towne Technologies
        </h1>
      </div>
      <p className="max-w-[22rem] text-[clamp(0.8rem,3.4dvmin,1rem)] leading-snug tracking-wide text-white/80 sm:leading-normal sm:text-[clamp(0.875rem,2.4dvw,1rem)]">
        Software, platforms, and systems.
      </p>
      <p
        className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[clamp(0.625rem,2.8dvmin,0.8125rem)] text-white/65 sm:gap-x-3 sm:text-[clamp(0.65rem,2.6dvw,0.8125rem)]"
        aria-label="Location and contact"
      >
        <span>Seattle, Washington</span>
        <span className="text-white/35 max-sm:hidden" aria-hidden>
          ·
        </span>
        <a
          className={`break-all underline-offset-2 sm:break-normal sm:underline-offset-[0.2em] ${subtleLink}`}
          href="mailto:alex@belltownetech.com"
        >
          alex@belltownetech.com
        </a>
        <span className="text-white/35 max-sm:hidden" aria-hidden>
          ·
        </span>
        <a
          className={subtleLink}
          href="https://github.com/alexbbt"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </main>
  );
}
