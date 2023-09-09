export default function DashboardCard({ name, count }) {
  return (
    <div className="card w-52 h-36 rounded shadow p-5 mb-2 text-center">
      <h2 className="text-5xl font-bold mb-5">{count}</h2>
      <p>{name}</p>
    </div>
  );
}
