var defaultURI =
  "https://earlygame.com/lol/champion-build-stats-runes-items-dashboard";

//API call and render methods for top champions section
const loadTopChampions = async () => {
  var api_url = "https://lolbe2.azurewebsites.net/api/v1/topchampions";
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(api_url);
    const responsedata = await response.json();

    if (response.status === 200) {
      var top_laners = responsedata[0]?.top.splice(0, 3);
      var junglers = responsedata[0]?.jungler.splice(0, 3);
      var mid_laners = responsedata[0]?.mid.splice(0, 3);
      var bots = responsedata[0]?.Bot.splice(0, 3);
      var supports = responsedata[0]?.Support.splice(0, 3);

      //** render toplaner best players **/ //
      const best_top_laners = top_laners
        .map((toplaner, index) => {
          return `
              <a 
              key=${index}
              href='${defaultURI}#builds?champion=${toplaner?.id}&role=1&rank=1&region=1'

              class="widget__best__img">
                <img src=${toplaner?.image} alt="champ-img">
                <span>${toplaner?.champion_name}</span>
              </a>
          `;
        })
        .join("");
      //append data in html
      document.getElementById("toplane").innerHTML = best_top_laners;

      //** render jungler best players **/ //
      const best_junglers = junglers
        .map((jungler, index) => {
          return `
            <a 
            key=${index}
              href='#builds?champion=${jungler?.id}&role=1&rank=1&region=1'

            class="widget__best__img">
              <img src=${jungler?.image} alt="champ-img">
              <span>${jungler?.champion_name}</span>
            </a>
          `;
        })
        .join("");
      //append data in html
      document.getElementById("junglers").innerHTML = best_junglers;

      //** render mid best players **/ //
      const best_mid_laners = mid_laners
        .map((mid, index) => {
          return `
            <a 
            key=${index}
              href='#builds?champion=${mid?.id}&role=1&rank=1&region=1'

            class="widget__best__img">
              <img src=${mid?.image} alt="champ-img">
              <span>${mid?.champion_name}</span>
            </a>
          `;
        })
        .join("");
      //append data in html
      document.getElementById("midlaners").innerHTML = best_mid_laners;

      //** render bot best players **/ //
      const best_bots = bots
        .map((bot, index) => {
          return `
            <a 
            key=${index}
              href='#builds?champion=${bot?.id}&role=1&rank=1&region=1'

            class="widget__best__img">
              <img src=${bot?.image} alt="champ-img">
              <span>${bot?.champion_name}</span>
            </a>
          `;
        })
        .join("");
      //append data in html
      document.getElementById("bots").innerHTML = best_bots;

      //** render support best players **/ //
      const best_supports = supports
        .map((support, index) => {
          return `
            <a 
            key=${index}
              href='#builds?champion=${support?.id}&role=1&rank=1&region=1'

            class="widget__best__img">
              <img src=${support?.image} alt="champ-img">
              <span>${support?.champion_name}</span>
            </a>
          `;
        })
        .join("");
      //append data in html
      document.getElementById("supports").innerHTML = best_supports;
    } else if (response.status === 404) {
      // document.getElementById("loader").innerHTML = response.statusText;
      console.log("no data found");
    } else if (response.status === 401 || 403) {
      console.log("Client not permitted to access requested resources");
    } else {
      console.log("An unknown error occured");
    }
  } catch (error) {
    console.log(error);
    // document.getElementById(
    //   "loader"
    // ).innerHTML = `An unexpected error occured. Please try again later.`;
  }
};

loadTopChampions();
