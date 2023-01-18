// global variables
var AllWinRate;
var AllBanRate;
var AllPickRate;
var api_url = `https://lolbe2.azurewebsites.net/api/v1/champstatistics?${newChampParams}`;

//----> API call to get champions details (statistics) <----//
async function getChampionStatistics() {
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(`${api_url}`);
    const responsedata = await response.json();
    if (response.status === 200) {
      const Championstats = { ...{ ...responsedata } };

      //-->asign nested object values :: winrate, pick rate & ban rates
      //winrate
      var WinRate = Championstats[0].winRate;
      let lastwinrate = Object.values(WinRate[Object.keys(WinRate).length - 1]);

      var lastwinrateVal = lastwinrate[0].toString();
      // console.log("converted val", lastwinrateVal);

      //ban rate
      var BanRate = Championstats[0].banRate;
      let lastbanrate = Object.values(BanRate[Object.keys(BanRate).length - 1]);
      var lastBanRateVal = lastbanrate[0].toString();

      //pick rate
      var PickRate = Championstats[0].pickRate;
      let lastpickrate = Object.values(
        PickRate[Object.keys(PickRate).length - 1]
      );
      var lastPickRateeVal = lastpickrate[0].toString();

      //map data to html
      StatisticsWinrateOutput = `
            <span>Win Rate</span>
            <span class="winPercent">${lastwinrate[1]
              .toFixed(1)
              .replace(/[.,]0$/, "")}%</span>
            <span class="patch-ls">Patch ${
              lastwinrateVal.length <= 5
                ? `${lastwinrateVal}`
                : `${parseFloat(lastwinrateVal).toFixed(2)}`
            }</span>
        `;

      StatisticsBanrateOutput = `
            <span>Ban Rate</span>
            <span class="banPercent">${lastbanrate[1]
              .toFixed(1)
              .replace(/[.,]0$/, "")}%</span>
              <span class="patch-ls">Patch ${
                lastBanRateVal.length <= 5
                  ? `${lastBanRateVal}`
                  : `${parseFloat(lastBanRateVal).toFixed(2)}`
              }</span>
        `;

      StatisticsPickrateOutput = `
            <span>Pick Rate</span>
            <span class="pickPercent">${lastpickrate[1]
              .toFixed(1)
              .replace(/[.,]0$/, "")}%</span>
              <span class="patch-ls">Patch ${
                lastPickRateeVal.length <= 5
                  ? `${lastPickRateeVal}`
                  : `${parseFloat(lastPickRateeVal).toFixed(2)}`
              }</span>
        `;

      document.getElementById("win-rate").innerHTML = StatisticsWinrateOutput;
      document.getElementById("ban-rate").innerHTML = StatisticsBanrateOutput;
      document.getElementById("pick-rate").innerHTML = StatisticsPickrateOutput;
    } else if (response.status === 404) {
      document.getElementById("loader").innerHTML = response.statusText;
      // console.log("no data found");
    } else if (response.status === 401 || 403) {
      // console.log("Client not permitted to access requested resources");
    } else {
      // console.log("An unknown error occured");
    }
  } catch (error) {
    // console.log(error);
    document.getElementById("loader").innerHTML = error.message;
  }
}

//all charts func
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

//win rates graph
async function winratesIntegration() {
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(`${api_url}`);
    const responsedata = await response.json();
    if (response.status === 200) {
      const Championstats = { ...{ ...responsedata } };

      //winrates
      AllWinRate = Championstats[0].winRate;

      let xLabels = [];
      var yValues = [];

      // y vals for win rate chart
      AllWinRate.forEach((element) => {
        let newValues = element.value;
        yValues.push(newValues);
      });

      //x vals for win rate chart
      AllWinRate.forEach((element) => {
        let newLabelValues = parseFloat(element.patch);
        xLabels.push(newLabelValues);
      });

      allcharts(xLabels, yValues, "winrates", "green");
    } else {
      // console.log("not showing your data");
    }
  } catch (error) {
    // console.log(error);
  }
}

//ban rates graph
async function banratesIntegration() {
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(`${api_url}`);
    const responsedata = await response.json();
    if (response.status === 200) {
      const Championstats = { ...{ ...responsedata } };

      //-->asign nested object values :: winrate, pick rate & ban rates

      //ban rate
      AllBanRate = Championstats[0].banRate;
      // console.log("All ban rates --->", AllBanRate);

      let xLabels = [];
      var yValues = [];

      // let i;

      //y vals for ban rate chart
      AllBanRate.forEach((element) => {
        let newValues = element.value;
        yValues.push(newValues);
      });

      //x vals for ban rate chart
      AllBanRate.forEach((element) => {
        let newLabelValues = parseFloat(element.patch);
        xLabels.push(newLabelValues);
      });

      allcharts(xLabels, yValues, "banrates", "crimson");

      //
    } else {
      // console.log("not showing your data");
    }
  } catch (error) {
    // console.log(error);
  }
}

//pick rates graph
async function pickratesIntegration() {
  // let test_api = `https://lolbe.azurewebsites.net/lol/champstats`;
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(`${api_url}`);
    const responsedata = await response.json();
    if (response.status === 200) {
      const Championstats = { ...{ ...responsedata } };

      //pick rate
      AllPickRate = Championstats[0].pickRate;

      let xLabels = [];
      var yValues = [];

      // let i;

      //y vals for pick rate
      AllPickRate.forEach((element) => {
        let newValues = element.value;
        yValues.push(newValues);
      });

      //x vals for pick rate chart
      AllPickRate.forEach((element) => {
        let newLabelValues = parseFloat(element.patch);
        xLabels.push(newLabelValues);
      });

      allcharts(xLabels, yValues, "pickrates", "#2c1da1");
      //
    } else {
      // console.log("not showing your data");
    }
  } catch (error) {
    // console.log(error);
  }
}

//graph integration
function getChampionStatisticsRates() {
  winratesIntegration();
  banratesIntegration();
  pickratesIntegration();
}

getChampionStatistics();
getChampionStatisticsRates();
