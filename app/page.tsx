export default function HomePage() {
  return (
    <main className="flex min-h-dvh min-h-screen flex-col items-center justify-center gap-7 px-6 text-center animate-fade-in">
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimizer */}
      <img
        className="block h-auto w-[min(20rem,85vw)] opacity-100"
        src="/logo.svg"
        alt="Bell-Towne Technologies"
        width={420}
        height={44}
        decoding="async"
      />
      <p className="max-w-[22rem] text-[clamp(0.875rem,2.4vw,1rem)] leading-normal tracking-wide text-white/80">
        Software, platforms, and systems.
      </p>
      <a
        className="text-[clamp(0.75rem,2vw,0.8125rem)] text-white/60 transition-[opacity,color] duration-150 hover:text-white/90 hover:underline hover:decoration-white/50 hover:underline-offset-[0.2em]"
        href="mailto:alex@belltownetech.com"
      >
        alex@belltownetech.com
      </a>
    </main>
  );
}
