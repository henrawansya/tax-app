export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>
      <p className="mt-4 text-gray-600 font-semibold">Memuat data...</p>
    </div>
  )
}
