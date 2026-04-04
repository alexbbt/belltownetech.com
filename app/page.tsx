export default function HomePage() {
  return (
    <main className="flex min-h-dvh min-h-screen flex-col items-center justify-center gap-2 px-6 text-center animate-fade-in">
      <div className="flex flex-col items-center gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimizer */}
        <img
          className="block h-auto w-[min(10.5rem,48vw)] max-w-full mb-4 opacity-100"
          src="/logo.svg"
          alt=""
          width={2000}
          height={2000}
          decoding="async"
        />
        <h1 className="text-[clamp(1.05rem,3.2vw,1.375rem)] font-semibold tracking-tight text-white">
          Bell-Towne Technologies
        </h1>
      </div>
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
