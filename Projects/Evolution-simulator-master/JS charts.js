var chart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{ 
        data: [],
        label: "Score",
        borderColor: "#3e95cd",
        fill: false
      }, 
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Score over generations'
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Generation'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Score'
        }  
      }]
    },
    responsive: true
  }
});

function addData(chart, label, data) {
chart.data.labels.push(label);
chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
});
chart.update();
}

function removeData(chart) {
  chart.data.datasets.forEach((dataset) => {
      var length = chart.data.labels.length;
      for(i=0;i<length;i++) {
        dataset.data.pop();
        chart.data.labels.pop();
      }
  });
  chart.update();
} 

var chart2 = new Chart(document.getElementById("line-chart2"), {
type: 'line',
data: {
  labels: [],
  datasets: [{ 
      data: [],
      label: "Score",
      borderColor: "#3e95cd",
      fill: false
    }, 
  ]
},
options: {
  title: {
    display: true,
    text: 'Highest score over generations'
  },
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Generation'
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Score'
      }  
    }]
  },
  responsive: true
}
});
