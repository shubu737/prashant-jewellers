type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-widest text-gold">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-serif tracking-tight text-black sm:text-4xl">{title}</h2>
    </div>
  );
}
