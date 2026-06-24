type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-black tracking-normal text-ink md:text-4xl">{title}</h1>
      <p className="mt-3 text-base leading-7 text-ink/65">{description}</p>
    </div>
  );
}
