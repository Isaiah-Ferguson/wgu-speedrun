import { pad2 } from "@/lib/format";

/**
 * Numbered editorial section: a mono index + title in the left rail, content
 * in the wide column. Keeps section names quiet so the data can be the big type.
 */
export default function Section({
  index,
  title,
  kicker,
  lede,
  children,
}: {
  index: number;
  title: string;
  kicker?: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ink pt-5 pb-16">
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-12">
        <header className="md:col-span-3">
          <p className="label">
            {`/${pad2(index)} ${title}`}
          </p>
          {kicker && (
            <p className="mt-1 text-lg font-bold tracking-tight text-accent">{kicker}</p>
          )}
          {lede && <p className="mt-3 max-w-[40ch] text-sm text-muted">{lede}</p>}
        </header>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
