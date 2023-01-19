const defaultURI =
  "https://earlygame.com/lol/champion-build-stats-runes-items-dashboard";

const widget = `
<!-- Top champions  -->
<div class="widget__best__section" id="widget_best__champ">
  <div class="widget__best__cards_section">
    <div class="widget__title__area">
      <h3>Best Champions</h3>
      <p>Check out the top 3 champions with the highest win rate in each position right now.</p>
    </div>
    <div class="widget__best__cards">
      <div class="widget__lane_icons">
        <img src="./assets/Positions/Basic/Toplane.png" alt="top">
        <span>TOP</span>
      </div>

      <!-- return top laners data from script -->
      <div class="widget__best__img_section" id="widget_mini_toplane">

      </div>
    </div>
    <div class="widget__best__cards">
      <div class="widget__lane_icons">
        <img src="./assets/Positions/Basic/Jungle.png" alt="jungle">
        <span>JUNGLE</span>
      </div>

      <!-- return junglers data from script -->
      <div class="widget__best__img_section" id="widget_mini_junglers">

      </div>
    </div>
  </div>
  <div class="widget__best__cards_section">
    <div class="widget__best__cards">
      <div class="widget__lane_icons">
        <img src="./assets/Positions/Basic/Midlane.png" alt="mid">
        <span>MID</span>
      </div>

      <!-- return mid laners data from script -->
      <div class="widget__best__img_section" id="widget_mini_midlaners">

      </div>
    </div>
    <div class="widget__best__cards">
      <div class="widget__lane_icons">
        <img src="./assets/Positions/Basic/ADC.png" alt="bot">
        <span>BOT/ADC</span>
      </div>

      <!-- return mid laners data from script -->
      <div class="widget__best__img_section" id="widget_mini_bots">

      </div>
    </div>
    <div class="widget__best__cards">
      <div class="widget__lane_icons">
        <img src="./assets/Positions/Basic/Support.png" alt="support">
        <span>SUPPORT</span>
      </div>
      <div class="widget__best__img_section" id="widget_mini_supports">

      </div>
    </div>
  </div>
</div>
`;

document.getElementById("widget__mini_container").innerHTML = widget;

//API call and render methods for top champions section
const loadTopChampionsMini = async () => {
  var api_url = "https://lolbe2.azurewebsites.net/api/v1/topchampions";
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
            <a   key=${index + 1}
              href='${defaultURI}#builds?champion=${
            toplaner?.champion_id
          }&role=1&rank=1&region=1' class="widget__best__img">
              <img src=${toplaner?.image} alt="champ-img">
              <span>${toplaner?.champion_name}</span>
            </a>
        `;
        })
        .join("");
      //append data in html
      document.getElementById("widget_mini_toplane").innerHTML =
        best_top_laners;

      //** render jungler best players **/ //
      const best_junglers = junglers
        .map((jungler, index) => {
          return `
          <a   key=${index + 1}
              href='${defaultURI}#builds?champion=${
            jungler?.champion_id
          }&role=1&rank=1&region=1' class="widget__best__img">
            <img src=${jungler?.image} alt="champ-img">
            <span>${jungler?.champion_name}</span>
          </a>
        `;
        })
        .join("");
      //append data in html
      document.getElementById("widget_mini_junglers").innerHTML = best_junglers;

      //** render mid best players **/ //
      const best_mid_laners = mid_laners
        .map((mid, index) => {
          return `
          <a   key=${index + 1}
              href='${defaultURI}#builds?champion=${
            mid?.champion_id
          }&role=1&rank=1&region=1' class="widget__best__img">
            <img src=${mid?.image} alt="champ-img">
            <span>${mid?.champion_name}</span>
          </a>
        `;
        })
        .join("");
      //append data in html
      document.getElementById("widget_mini_midlaners").innerHTML =
        best_mid_laners;

      //** render bot best players **/ //
      const best_bots = bots
        .map((bot, index) => {
          return `
          <a   key=${index + 1}
              href='${defaultURI}#builds?champion=${
            bot?.champion_id
          }&role=1&rank=1&region=1' class="widget__best__img">
            <img src=${bot?.image} alt="champ-img">
            <span>${bot?.champion_name}</span>
          </a>
        `;
        })
        .join("");
      //append data in html
      document.getElementById("widget_mini_bots").innerHTML = best_bots;

      //** render support best players **/ //
      const best_supports = supports
        .map((support, index) => {
          return `
          <a   key=${index + 1}
              href='${defaultURI}#builds?champion=${
            support?.champion_id
          }&role=1&rank=1&region=1' class="widget__best__img">
            <img src=${support?.image} alt="champ-img">
            <span>${support?.champion_name}</span>
          </a>
        `;
        })
        .join("");
      //append data in html
      document.getElementById("widget_mini_supports").innerHTML = best_supports;
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
    document.getElementById(
      "loader"
    ).innerHTML = `An unexpected error occured. Please try again later.`;
  }
};

loadTopChampionsMini();

// document.getElementById("widget__container__mini").innerHTML = widget;
