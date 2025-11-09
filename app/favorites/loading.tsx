export default function Loading() {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-slate-800 rounded-xl h-80 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
