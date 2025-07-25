import Chart from 'chart.js/auto'

const Utils = {
  CHART_COLORS: {
    blue: 'rgba(54, 162, 235, 1)',
    yellow: 'rgba(255, 206, 86, 1)',
    red: 'rgba(255, 99, 132, 1)',
  }
};

const finances = document.querySelectorAll('.finance');

(async function () {
  const data = [
    { year: 2016, count: Math.floor(Math.random() * 31) },
    { year: 2017, count: Math.floor(Math.random() * 31) },
    { year: 2018, count: Math.floor(Math.random() * 31) },
    { year: 2019, count: Math.floor(Math.random() * 31) },
    { year: 2020, count: Math.floor(Math.random() * 31) },
    { year: 2021, count: Math.floor(Math.random() * 31) },
    { year: 2022, count: Math.floor(Math.random() * 31) },
    { year: 2023, count: Math.floor(Math.random() * 31) },
    { year: 2024, count: Math.floor(Math.random() * 31) },
    { year: 2025, count: Math.floor(Math.random() * 31) },
  ];

  finances.forEach((canvas, index) => {

    let width, height, gradient;
    function getGradient(ctx, chartArea) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, Utils.CHART_COLORS.blue);
        gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
        gradient.addColorStop(1, Utils.CHART_COLORS.red);
      }

      return gradient;
    }

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [{
          label: 'Finance',
          data: data.map(row => row.count),
          tension: 0.2,
          borderColor: (context) => {
            const { ctx, chartArea } = context.chart;
            if (!chartArea) return null;
            return getGradient(ctx, chartArea);
          }
        }]
      },
      options: {
        responsive: false,
        animation: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    })
  })
})(); 