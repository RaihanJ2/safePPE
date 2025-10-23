export default function ChartPPE(){
  // Placeholder simple sparkline using SVG — replace with Chart.js / Recharts when adding dep
  const data = [70, 75, 80, 85, 82, 87, 90];
  const max = Math.max(...data);
  const points = data.map((d,i) => `${(i/(data.length-1))*100},${100 - (d/max)*100}`).join(' ');

  return (
    <div className="w-full h-48 flex items-center">
      <svg viewBox="0 0 100 100" className="w-full h-32">
        <polyline fill="none" stroke="#F59E0B" strokeWidth="2" points={points} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="ml-4">
        <div className="text-2xl font-semibold">87%</div>
        <div className="text-sm text-gray-400">Average PPE coverage</div>
      </div>
    </div>
  );
}
