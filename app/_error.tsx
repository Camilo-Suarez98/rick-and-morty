export default function Error() {
  return (
    <div className="p-6 mx-auto max-w-7xl text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Error</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <p className="text-center text-red-500">Error fetching Characters</p>
      </div>
    </div>
  );
}