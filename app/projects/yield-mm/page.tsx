import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yield-MM | Akshat",
  description: "A yield strategy that performs market making for large swaps on Uniswap V4 using Aave liquidity.",
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

export default function YieldMMPage() {
  const techStack = ["Solidity", "Foundry", "Uniswap V4", "Aave V3", "ERC4626", "Octant V2"];

  return (
    <div className="min-h-screen">
      {/* Background decorations */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-0 w-[600px] h-[600px] opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd1] via-transparent to-transparent blur-3xl" />
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
            <span className="text-[var(--accent)] text-sm font-medium">01</span>
            <span className="text-[var(--muted)] text-sm">/ PROJECT</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">
            Yield-MM
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
            A yield strategy that performs market making for large swaps on Uniswap V4
            by temporarily pulling deposited assets from Aave, executing the swap,
            and redepositing.
          </p>
        </header>

        {/* Image placeholder */}
        <div className="mb-16 opacity-0 animate-fade-in-up delay-100">
          <div className="aspect-video bg-[var(--card-bg)] border border-[var(--card-border)] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[var(--muted)] text-sm tracking-wider mb-2">[ARCHITECTURE DIAGRAM]</div>
                <div className="text-xs text-[var(--card-border)]">User → Vault → Aave ↔ Uniswap V4 Hook</div>
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
                  Large swaps on DEXs suffer from high slippage due to limited liquidity.
                  Meanwhile, users depositing in lending protocols like Aave earn modest yields
                  but miss opportunities to capture swap fees from market making.
                </p>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  The challenge: How do you let passive depositors earn both lending yield AND
                  swap fees without requiring them to actively manage liquidity positions?
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
                    Built a system that combines Octant V2 multistrategy vaults, Aave lending,
                    and a Uniswap V4 Coincidence-of-Wants (CoW) hook.
                  </p>

                  <div className="space-y-4 text-[var(--muted)]">
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">1.</span> Users deposit USDC or WETH and receive ERC4626-style vault shares
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">2.</span> Capital automatically earns Aave lending returns
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">3.</span> When large swaps occur, the hook validates order size and pulls liquidity from strategies
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">4.</span> 50 basis point fee charged on executed swaps
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">5.</span> Settlement through Uniswap pool manager, assets redeposited to Aave
                    </div>
                  </div>

                  <p className="text-[var(--muted)] leading-relaxed">
                    The key insight: selective market making only for sufficiently large orders
                    that would otherwise suffer significant slippage. This maximizes fee capture
                    while minimizing impermanent loss risk.
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
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">50</div>
                    <div className="text-sm text-[var(--muted)]">bps swap fee</div>
                  </div>
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">2</div>
                    <div className="text-sm text-[var(--muted)]">yield sources</div>
                  </div>
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">0</div>
                    <div className="text-sm text-[var(--muted)]">active management</div>
                  </div>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  The architecture enables passive depositors to earn both lending yield
                  from Aave and swap fees from large trades, with coordinated redemption
                  guarantees through paired vault mechanics.
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
                  href="https://github.com/pieakshat/Yield-MM"
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
            <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              ← Home
            </Link>
            <Link href="/projects/pm-contracts" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              Next: PM Contracts →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
