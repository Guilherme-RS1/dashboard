import Chart from 'chart.js/auto'

const ctx = document.querySelectorAll('.bar')

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [{
            label: 'Vendas',
            data: [100, 300, 200],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    }
})