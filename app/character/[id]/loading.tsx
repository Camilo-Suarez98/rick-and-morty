export default function Loading() {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700/50">
        <div className="bg-slate-800 rounded-xl h-80 animate-pulse" />
      </div>
    </div>
  );
}