function carregarGraficos() {

  
  const labels = [
    'Engenharia de Software I',
    'Desenvolvimento Web I',
    'Modelagem de Banco de Dados',
    'Sistemas Operacionais e Redes',
    'Design Digital',
    'Algoritmos e Lógica'
  ];
  const dataNotas = [10, 9, 10, 8, 9, 7];
  const coresBackground = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 205, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)'
  ];
  const coresBorda = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(255, 159, 64)'
  ];

  
  const ctxBarV = document.getElementById('meuGraficoBarraV');
  if (ctxBarV) { 
    new Chart(ctxBarV, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nota Final',
          data: dataNotas,
          backgroundColor: coresBackground,
          borderColor: coresBorda,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }

  
  const ctxBarH = document.getElementById('meuGraficoBarraH');
  if (ctxBarH) {
    new Chart(ctxBarH, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nota Final',
          data: dataNotas,
          backgroundColor: coresBackground,
          borderColor: coresBorda,
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }

  
  const ctxLinha = document.getElementById('meuGraficoLinha');
  if (ctxLinha) {
    new Chart(ctxLinha, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Desempenho (Nota)',
          data: dataNotas,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }

  
  const ctxPizza = document.getElementById('meuGraficoPizza');
  if (ctxPizza) {
    new Chart(ctxPizza, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Proporção de Notas',
          data: dataNotas,
          backgroundColor: coresBackground,
          hoverOffset: 4
        }]
      }
    });
  }

  
  const ctxDoughnut = document.getElementById('meuGraficoDoughnut');
  if (ctxDoughnut) {
    new Chart(ctxDoughnut, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Proporção de Notas',
          data: dataNotas,
          backgroundColor: coresBackground,
          hoverOffset: 4
        }]
      }
    });
  }

  
  const ctxMisto = document.getElementById('meuGraficoMisto');
  if (ctxMisto) {
    new Chart(ctxMisto, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            type: 'bar',
            label: 'Nota Final',
            data: dataNotas,
            backgroundColor: coresBackground
          },
          {
            type: 'line',
            label: 'Média de Aprovação (6.0)',
            data: [6, 6, 6, 6, 6, 6],
            borderColor: 'rgb(255, 99, 132)',
            fill: false
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }

}

carregarGraficos();