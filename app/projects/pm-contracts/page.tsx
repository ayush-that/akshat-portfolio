import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PM Contracts V2 | Akshat",
  description: "Prediction markets using the CTF framework on Gnosis with a custom AMM for efficient price discovery.",
};

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function PMContractsPage() {
  const techStack = ["Solidity", "Foundry", "ERC1155", "CTF Framework", "FPMM", "Gnosis"];

  return (
    <div className="min-h-screen">
      {/* Background decorations */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#00ffd1] via-transparent to-transparent blur-3xl" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-16 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeftIcon /></span>
          <span className="text-sm">Back to home</span>
        </Link>

        {/* Header */}
        <header className="mb-16 opacity-0 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[var(--accent)] text-sm font-medium">02</span>
            <span className="text-[var(--muted)] text-sm">/ PROJECT</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">
            PM Contracts V2
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
            Prediction markets using the Conditional Token Framework (CTF) on Gnosis
            with a custom AMM designed for efficient price discovery.
          </p>
        </header>

        {/* Image placeholder */}
        <div className="mb-16 opacity-0 animate-fade-in-up delay-100">
          <div className="aspect-video bg-[var(--card-bg)] border border-[var(--card-border)] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[var(--muted)] text-sm tracking-wider mb-2">[MARKET INTERFACE]</div>
                <div className="text-xs text-[var(--card-border)]">YES: 0.65 | NO: 0.35 | Volume: $24k</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-5" />
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-16">
          {/* Problem */}
          <section className="opacity-0 animate-fade-in-up delay-200">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <h2 className="text-sm tracking-widest text-[var(--muted)]">PROBLEM</h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-lg leading-relaxed text-[var(--foreground)]">
                  Traditional prediction markets suffer from liquidity fragmentation
                  and inefficient price discovery. Standard AMM curves aren&apos;t optimized
                  for binary outcome markets.
                </p>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  The challenge: Build a prediction market system that provides
                  efficient price discovery while maintaining deep liquidity,
                  using a framework that can handle complex conditional outcomes.
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* Approach */}
          <section className="opacity-0 animate-fade-in-up delay-300">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <h2 className="text-sm tracking-widest text-[var(--muted)]">APPROACH</h2>
              </div>
              <div className="md:col-span-9">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-[var(--foreground)]">
                    Built on the Conditional Token Framework (CTF) — a standard for representing
                    conditional outcomes as ERC1155 tokens — combined with a Fixed Product
                    Market Maker (FPMM) for automated liquidity.
                  </p>

                  <div className="space-y-4 text-[var(--muted)]">
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">CTF Integration</span>
                      <p className="mt-1">Outcomes represented as conditional tokens that can be combined, split, and traded independently</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">Custom AMM</span>
                      <p className="mt-1">FPMM implementation optimized for prediction market dynamics with bounded price ranges</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">ERC1155 Positions</span>
                      <p className="mt-1">Gas-efficient batch operations for managing multiple market positions</p>
                    </div>
                  </div>

                  <p className="text-[var(--muted)] leading-relaxed">
                    The architecture allows for complex market structures while maintaining
                    composability with other DeFi protocols through standard token interfaces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* Outcome */}
          <section className="opacity-0 animate-fade-in-up delay-400">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <h2 className="text-sm tracking-widest text-[var(--muted)]">OUTCOME</h2>
              </div>
              <div className="md:col-span-9">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">31</div>
                    <div className="text-sm text-[var(--muted)]">commits</div>
                  </div>
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">CTF</div>
                    <div className="text-sm text-[var(--muted)]">framework</div>
                  </div>
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">FPMM</div>
                    <div className="text-sm text-[var(--muted)]">market maker</div>
                  </div>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  A complete prediction market implementation with deployment scripts,
                  comprehensive tests, and integration with the Gnosis ecosystem.
                  Designed for extensibility and composability.
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* Tech Stack */}
          <section className="opacity-0 animate-fade-in-up delay-500">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <h2 className="text-sm tracking-widest text-[var(--muted)]">TECH STACK</h2>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* Links */}
          <section className="opacity-0 animate-fade-in-up delay-600">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <h2 className="text-sm tracking-widest text-[var(--muted)]">LINKS</h2>
              </div>
              <div className="md:col-span-9">
                <a
                  href="https://github.com/pieakshat/pm-contracts-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
                >
                  <span className="link-hover">View on GitHub</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ExternalLinkIcon />
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-24 pt-8 border-t border-[var(--card-border)]">
          <div className="flex justify-between items-center">
            <Link href="/projects/yield-mm" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              ← Yield-MM
            </Link>
            <Link href="/projects/smol-evm" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              Next: smol-evm-rust →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
