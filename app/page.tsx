import Link from "next/link";

const projects = [
  {
    title: "Yield-MM",
    description: "A yield strategy that performs market making for large swaps on Uniswap V4 by pulling assets from Aave, executing the swap, and redepositing.",
    tags: ["Solidity", "Uniswap V4", "Aave", "DeFi"],
    href: "/projects/yield-mm",
    github: "https://github.com/pieakshat/Yield-MM",
  },
  {
    title: "PM Contracts V2",
    description: "Prediction markets using the CTF framework on Gnosis with a custom AMM for efficient price discovery.",
    tags: ["Solidity", "Foundry", "AMM", "Prediction Markets"],
    href: "/projects/pm-contracts",
    github: "https://github.com/pieakshat/pm-contracts-v2",
  },
  {
    title: "smol-evm-rust",
    description: "A minimal EVM implementation in Rust. Educational project to understand bytecode execution from the ground up.",
    tags: ["Rust", "EVM", "Bytecode", "Systems"],
    href: "/projects/smol-evm",
    github: "https://github.com/pieakshat/smol-evm-rust",
  },
];

const achievements = [
  {
    title: "5+ Hackathon Wins",
    description: "Consistent track record of building and shipping under pressure across web3 hackathons.",
    icon: "trophy",
  },
  {
    title: "Cerbit Video Agency",
    description: "Founded and scaled a video production agency to $3k+ MRR. Built operations and distribution from scratch.",
    icon: "video",
  },
  {
    title: "Web3 Startup Residency",
    description: "Ran a 3-month program for early-stage crypto startups. Interviewed teams, pressure-tested ideas, and helped navigate ecosystem grants.",
    icon: "rocket",
  },
];

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

const iconMap: Record<string, () => React.ReactElement> = {
  trophy: TrophyIcon,
  video: VideoIcon,
  rocket: RocketIcon,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Decorative grid background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Gradient orb decoration */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd1] via-transparent to-transparent blur-3xl" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Header */}
        <header className="mb-32 opacity-0 animate-fade-in-up">
          <div className="mb-6">
            <span className="text-[var(--muted)] text-sm tracking-wider">// 001</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            Akshat
          </h1>
          <div className="flex items-center gap-3 text-[var(--muted)] text-lg">
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="terminal-prompt cursor">DeFi Builder & Researcher</span>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-32 opacity-0 animate-fade-in-up delay-200">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="text-sm tracking-widest text-[var(--muted)] mb-4">ABOUT</h2>
              <div className="w-16 h-px bg-[var(--card-border)]" />
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--foreground)] mb-6">
                I mess around with systems until they make sense.
              </p>
              <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                <p>
                  Building on EVMs (mostly Solidity) — DeFi protocols, yield mechanics, and prediction market architectures.
                  I spend time pulling protocols apart to understand where yield actually comes from, how incentives break,
                  and why some architectures scale while others quietly die.
                </p>
                <p>
                  Product-side web3 experience: ran a 3-month residency for early-stage crypto startups,
                  interviewing teams, pressure-testing ideas, and navigating ecosystem funding.
                </p>
                <p className="text-[var(--foreground)]">
                  End-to-end thinker — code, economics, product, and the human behavior that glues it all together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-32" />

        {/* Projects Section */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 opacity-0 animate-fade-in-up delay-300">
            <div>
              <h2 className="text-sm tracking-widest text-[var(--muted)] mb-2">PROJECTS</h2>
              <p className="font-serif text-3xl md:text-4xl italic text-[var(--foreground)]">Selected work</p>
            </div>
            <span className="text-[var(--muted)] text-sm hidden md:block">03 projects</span>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className={`card group block p-8 opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[var(--accent)] text-sm font-medium">0{index + 1}</span>
                      <h3 className="text-2xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]">
                        <ArrowIcon />
                      </span>
                    </div>
                    <p className="text-[var(--muted)] mb-6 max-w-2xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block w-48 h-32 bg-[var(--card-border)] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)] text-xs tracking-wider">
                      [PREVIEW]
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="section-divider mb-32" />

        {/* Achievements Section */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12 opacity-0 animate-fade-in-up delay-500">
            <div>
              <h2 className="text-sm tracking-widest text-[var(--muted)] mb-2">ACHIEVEMENTS</h2>
              <p className="font-serif text-3xl md:text-4xl italic text-[var(--foreground)]">Track record</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon];
              return (
                <div
                  key={achievement.title}
                  className={`card p-8 opacity-0 animate-fade-in-up`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="mb-6 text-[var(--accent)]">
                    <IconComponent />
                  </div>
                  <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="section-divider mb-32" />

        {/* Contact Section */}
        <section className="opacity-0 animate-fade-in-up delay-700">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6">
              <h2 className="text-sm tracking-widest text-[var(--muted)] mb-4">CONTACT</h2>
              <p className="font-serif text-4xl md:text-5xl italic text-[var(--foreground)] mb-6">
                Let&apos;s build something.
              </p>
              <p className="text-[var(--muted)]">
                Open to collaborations, interesting problems, and conversations about DeFi mechanics.
              </p>
            </div>
            <div className="md:col-span-6 flex justify-start md:justify-end gap-6">
              <a
                href="https://github.com/pieakshat"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
                <span className="text-sm link-hover">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-patil-909bb828a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
                <span className="text-sm link-hover">LinkedIn</span>
              </a>
              <a
                href="https://x.com/pieakshat"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label="X Profile"
              >
                <XIcon />
                <span className="text-sm link-hover">X</span>
              </a>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-[var(--card-border)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-[var(--muted)]">
              <span>akshat.05p@gmail.com</span>
              <span className="text-xs tracking-widest">BUILDING IN PUBLIC</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
