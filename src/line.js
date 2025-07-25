import Chart from 'chart.js/auto'

const ctx = document.querySelectorAll('.line')

new Chart (ctx,{
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }]
    },
})