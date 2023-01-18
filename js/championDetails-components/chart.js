//all charts functionalities
function allcharts(labels, data, element, color) {
    var ChartInstance = new Chart(element, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0,
            backgroundColor: color,
            borderColor: color,
            data: data,
            fontColor: "#0000",
            labels: false,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        labels: { display: false },
        legend: { display: false },
        scales: {
          x: {
            display: false,
            gridLines: {
              display: false,
            },
          },
  
          y: {
            type: "linear",
            grace: "10%",
            display: false,
            gridLines: {
              display: false,
            },
          },
        },
        layout: {
          padding: {
            right: 5,
            left: 5,
            bottom: 10,
          },
        },
      },
    });
  
    ChartInstance.options.responsive = false;
    ChartInstance.options.animation = {
      duration: 0,
      easing: "",
    };
    ChartInstance.options.transitions = {
      show: {
        animations: {
          x: {
            from: 0,
          },
          y: {
            from: 0,
          },
        },
      },
    };
    ChartInstance.update();
  }