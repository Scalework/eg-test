//Champion best players
async function getBestPlayers() {
  let bestPlayerURL = `https://lolbe2.azurewebsites.net/api/v1/bestplayers?${newChampParams}`;
  try {
    const response = await fetch(bestPlayerURL);
    const responsedata = await response.json();
    if (response.status === 200) {
      const bestPlayers = responsedata.splice(0, 8);

      //All best players -- API response returns challenger & grand masters only
      let mappedPlayers;
      //map data to html element
      bestPlayers.length === 0
        ? (mappedPlayers = `<span class="no-player-data">No best players for this champion.</span>`)
        : (mappedPlayers = bestPlayers
            .map((bests, index) => {
              return `
          <tr key=${index}>
            <td>${bests?.summoner}</td>
           <td>${
             bests?.region === "LA1"
               ? `<span>LAN</span> `
               : bests?.region === "LA2"
               ? `<span>LAS</span>`
               : `<span>${bests?.region.replace(/[0-9]/g, "")}</span>`
           }</td>
            <td><img src=${bests?.ranked_emblem_url} alt="Rank" title="${
                bests?.rank
              }"/></td>
            <td>${bests?.winrate}%</td>
            <td>${bests?.played}</td>
          </tr>
        `;
            })
            .join(""));

      document.getElementById("best-plays-body").innerHTML = mappedPlayers;
    } else if (response.status === 404) {
      // console.log("no data found");
    } else if (response.status === 401 || 403) {
      // console.log("Client not permitted to access requested resources");
    } else {
      // console.log("An unknown error occured");
    }
  } catch (error) {
    // console.log(error);
  }
}

getBestPlayers();
