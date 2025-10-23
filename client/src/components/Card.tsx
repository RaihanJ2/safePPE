type Props = {
  title: string;
  value: string;
  accent?: 'yellow' | 'red' | 'green';
}

const accentMap: Record<string,string> = {
  yellow: 'bg-yellow-100 text-yellow-700',
  red: 'bg-red-100 text-red-700',
  green: 'bg-green-100 text-green-700'
}

export default function Card({title, value, accent='yellow'}: Props){
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold text-gray-900 mt-1">{value}</div>
      </div>
      <div className={`${accentMap[accent]} rounded-md px-3 py-2 font-semibold`}> 
        {accent === 'yellow' ? '⚠' : accent === 'red' ? '‼' : '✓'}
      </div>
    </div>
  );
}
