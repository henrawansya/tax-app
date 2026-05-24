export default function DashboardCard({ title, value, icon, color }) {
  return (
    <div className={`${color} rounded-lg p-6 shadow`>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-gray-600 text-sm font-semibold">{title}</h3>
      <p className={`text-3xl font-bold mt-2 ${color.replace('100', '600')}`}>{value}</p>
    </div>
  )
}
