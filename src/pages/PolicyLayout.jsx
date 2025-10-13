import { Link } from 'react-router-dom';

export function PolicyLayout({ title, description, lastUpdated, children }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 mb-6"
        >
          <span aria-hidden="true" className="mr-2">&larr;</span>
          Back to KMATS Home
        </Link>

        <div className="bg-card/80 backdrop-blur border border-border/50 rounded-3xl shadow-xl overflow-hidden">
          <div className="px-6 sm:px-10 py-10 sm:py-14">
            <header className="space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Policy Document
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h1>
              {description && (
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
                  {description}
                </p>
              )}
              {lastUpdated && (
                <p className="text-sm text-muted-foreground/80">
                  Last updated: {lastUpdated}
                </p>
              )}
            </header>

            <div className="space-y-10 text-base leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PolicySection({ number, title, eyebrow, children }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
        {number && (
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:mt-1">
            {number}
          </span>
        )}
        <div className="space-y-2">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
              {eyebrow}
            </span>
          )}
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="space-y-3 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function PolicyKeyPoints({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
      {items.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
