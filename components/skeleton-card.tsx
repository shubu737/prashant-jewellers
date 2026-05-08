export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-[2rem] bg-white p-6 shadow-soft">
      <div className="h-72 rounded-3xl bg-slate-200" />
      <div className="mt-6 h-5 w-1/2 rounded-full bg-slate-200" />
      <div className="mt-4 h-5 w-1/3 rounded-full bg-slate-200" />
    </div>
  );
}
