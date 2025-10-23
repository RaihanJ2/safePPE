import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const mockData = {
  labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
  datasets: [
    {
      label: 'PPE Compliance %',
      data: [85, 88, 92, 90, 95, 89, 92],
      borderColor: '#EAB308', // Yellow-600
      backgroundColor: 'rgba(234, 179, 8, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
};

export default function PPEChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: mockData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'white',
            titleColor: '#111827',
            bodyColor: '#111827',
            borderColor: '#E5E7EB',
            borderWidth: 1,
            padding: 12,
            titleFont: {
              size: 14,
            },
            bodyFont: {
              size: 13
            },
            callbacks: {
              label: function(context) {
                return `Compliance: ${context.raw}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: '#F3F4F6'
            },
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative h-[300px] w-full">
      <canvas ref={chartRef} />
    </div>
  );
}