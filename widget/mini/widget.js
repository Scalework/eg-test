const defaultURI =
  "https://earlygame.com/lol/champion-build-stats-runes-items-dashboard";

const widget = `
<!-- Featured champions -->
<div class="widget__featured__section" id="feature__champ">
  <div class="widget__title__area">
    <h1>Champions Stats</h1>
    <h3>Featured Champions</h3>
    <p>Looking for a new champ to play? Here are some few recommendations</p>
  </div>
  <!-- return featured champions from script -->
  <div class="widget__featured__cards" id="widget_mini_featuredchampions">

  </div>
</div>

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

//--------Featured champions logic------------//
//API call and render methods for featued champions section

//get champion keys (option to populate param values with API keys)
var FeaturedChampIDs = async () => await loadChampionKeys();
// console.log(FeaturedChampIDs);

//API call and render methods for top champions section
const loadFeaturedTopChampionsMini = async (
  param1 = 1,
  param2 = 10,
  param3 = 101,
  param4 = 104
) => {
  var api_url = `https://lolbe2.azurewebsites.net/api/v1/featuredchampions?champ1=${param1}&champ2=${param2}&champ3=${param3}&champ4=${param4} `;
  try {
    const response = await fetch(api_url);
    const featured_champions = await response.json();

    if (response.status === 200) {
      // console.log("--->", featured_champions);
      //** render featured champions **/ //
      const featuredChampions = featured_champions
        .map((featuredchamp, index) => {
          return `
          <a key=${index + 1}
                href='${defaultURI}#builds?champion=${
            featuredchamp?.id
          }&role=1&rank=1&region=1' 
            class="widget__featured__card">
            <div class="widget__top__section">
              <div class="widget__active__class">${
                featuredchamp?.primaryRole === "top"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/top-white.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "jungle"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Jungle.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "mid"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Midlane.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "adc"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/bot-white.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "support"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Support.png" alt="R"/>`
                  : ``
              }</div>
              <div class="widget__avatar__container">
                <img src=${featuredchamp?.image} alt="champ">
              </div>
              <div class="widget__champ__role">${
                featuredchamp?.secondaryRole === "top"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/top-white.png" alt="R" class="role-top"/>`
                  : featuredchamp?.secondaryRole === "jungle"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Jungle.png" alt="R" />`
                  : featuredchamp?.secondaryRole === "mid"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Midlane.png" alt="R" />`
                  : featuredchamp?.secondaryRole === "adc"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/bot-white.png" alt="R" class="role-bot"/>`
                  : featuredchamp?.secondaryRole === "support"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Support.png" alt="R" />`
                  : ``
              }</div>
            </div>
            <div class="widget__champion__summary">
              <span class="widget__champ__title">
                ${featuredchamp?.name}
              </span>
              <span class="widget__champ__descritpion">
                ${featuredchamp?.title}
              </span>
            </div>
          </a>
        `;
        })
        .join("");
      //append data in html
      document.getElementById("widget_mini_featuredchampions").innerHTML =
        featuredChampions;
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

loadFeaturedTopChampionsMini();

//API call and render methods for top champions section
const loadTopChampionsMini = async () => {
  var api_url = "https://lolbe2.azurewebsites.net/api/v1/topchampions";
  try {
    const response = await fetch(api_url);
    const responsedata = await response.json();

    if (response.status === 200) {
      var top_laners = responsedata[0]?.top;
      var junglers = responsedata[0]?.jungler;
      var mid_laners = responsedata[0]?.mid;
      var bots = responsedata[0]?.Bot;
      var supports = responsedata[0]?.Support;

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
