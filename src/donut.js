import Chart from 'chart.js/auto'

const ctx = document.querySelectorAll('.donut');


new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Lorem'],
    datasets: [{
      label: 'Dataset',
      data: [300,50,100],
      borderWidth: 1,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 20,
    }]
  },
});