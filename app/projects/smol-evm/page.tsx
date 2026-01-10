import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "smol-evm-rust | Akshat",
  description: "A minimal EVM implementation in Rust. Educational project to understand bytecode execution from the ground up.",
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

export default function SmolEVMPage() {
  const techStack = ["Rust", "EVM", "Bytecode", "Systems Programming"];

  return (
    <div className="min-h-screen">
      {/* Background decorations */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-1/2 left-0 w-[600px] h-[600px] opacity-15 pointer-events-none -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd1] via-transparent to-transparent blur-3xl" />
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
            <span className="text-[var(--accent)] text-sm font-medium">03</span>
            <span className="text-[var(--muted)] text-sm">/ PROJECT</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">
            smol-evm-rust
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
            A minimal Ethereum Virtual Machine implementation in Rust.
            An educational deep-dive into how bytecode execution actually works.
          </p>
        </header>

        {/* Image placeholder */}
        <div className="mb-16 opacity-0 animate-fade-in-up delay-100">
          <div className="aspect-video bg-[var(--card-bg)] border border-[var(--card-border)] relative overflow-hidden font-mono">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-[var(--accent)] text-xs">PUSH1 0x60 PUSH1 0x40 MSTORE</div>
                <div className="text-[var(--muted)] text-sm tracking-wider">[BYTECODE EXECUTION]</div>
                <div className="text-xs text-[var(--card-border)]">Stack: [0x60, 0x40] | PC: 0x04</div>
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
                  To truly understand smart contract security and optimization,
                  you need to understand how the EVM actually executes bytecode.
                  Reading documentation only goes so far.
                </p>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  The challenge: Build a working EVM from scratch to internalize
                  the execution model — stack operations, memory management,
                  gas accounting, and opcode semantics.
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
                    Implemented a minimal EVM in Rust, focusing on core execution mechanics
                    rather than full Ethereum compatibility.
                  </p>

                  <div className="space-y-4 text-[var(--muted)]">
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">Stack Machine</span>
                      <p className="mt-1">256-bit word stack with push, pop, dup, and swap operations</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">Memory Model</span>
                      <p className="mt-1">Byte-addressable memory with MLOAD, MSTORE, and expansion tracking</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">Opcode Execution</span>
                      <p className="mt-1">Arithmetic, comparison, bitwise, and control flow instructions</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[var(--card-border)]">
                      <span className="text-[var(--accent)] font-medium">Program Counter</span>
                      <p className="mt-1">Sequential execution with JUMP and JUMPI for control flow</p>
                    </div>
                  </div>

                  <p className="text-[var(--muted)] leading-relaxed">
                    Rust was chosen for its memory safety guarantees and performance characteristics —
                    ideal for implementing low-level virtual machine semantics.
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
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">100%</div>
                    <div className="text-sm text-[var(--muted)]">Rust</div>
                  </div>
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">EVM</div>
                    <div className="text-sm text-[var(--muted)]">compatible</div>
                  </div>
                  <div className="card p-6">
                    <div className="text-3xl font-light text-[var(--accent)] mb-2">0</div>
                    <div className="text-sm text-[var(--muted)]">dependencies</div>
                  </div>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  A working EVM that can execute basic bytecode, with documentation
                  explaining how execution works. The kind of project that makes you
                  a better smart contract developer by understanding what happens
                  beneath the Solidity abstraction.
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
                  href="https://github.com/pieakshat/smol-evm-rust"
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
            <Link href="/projects/pm-contracts" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              ← PM Contracts
            </Link>
            <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              Home →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
