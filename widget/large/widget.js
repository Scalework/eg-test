const defaultURI =
  "https://earlygame.com/lol/champion-build-stats-runes-items-dashboard";

const widget = `
<!-- Featured champions -->
        <div class="widget__featured__section" id="feature__champ">
            <div class="widget__title__area">
                <h1>LOL Champions Stats</h1>
                <h3>Featured Champions</h3>
                <p>Looking for a new champ to play? Here are some few recommendations</p>
            </div>
            <!-- return featured champions from script -->
            <div class="widget__featured__cards" id="featuredchampions">

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
                        <span>Top</span>
                    </div>

                    <!-- return top laners data from script -->
                    <div class="widget__best__img_section" id="toplane">

                    </div>
                </div>
                <div class="widget__best__cards">
                    <div class="widget__lane_icons">
                        <img src="./assets/Positions/Basic/Jungle.png" alt="jungle">
                        <span>Jungle</span>
                    </div>

                    <!-- return junglers data from script -->
                    <div class="widget__best__img_section" id="junglers">

                    </div>
                </div>
            </div>
            <div class="widget__best__cards_section">
                <div class="widget__best__cards">
                    <div class="widget__lane_icons">
                        <img src="./assets/Positions/Basic/Midlane.png" alt="mid">
                        <span>Midlane</span>
                    </div>

                    <!-- return mid laners data from script -->
                    <div class="widget__best__img_section" id="midlaners">

                    </div>
                </div>
                <div class="widget__best__cards">
                    <div class="widget__lane_icons">
                        <img src="./assets/Positions/Basic/ADC.png" alt="bot">
                        <span>BOT/ADC</span>
                    </div>

                    <!-- return mid laners data from script -->
                    <div class="widget__best__img_section" id="bots">

                    </div>
                </div>
                <div class="widget__best__cards">
                    <div class="widget__lane_icons">
                        <img src="./assets/Positions/Basic/Support.png" alt="support">
                        <span>Support</span>
                    </div>
                    <div class="widget__best__img_section" id="supports">

                    </div>
                </div>
            </div>
        </div>
`;

document.getElementById("widget__container").innerHTML = widget;

//API call and render methods for top champions section
const loadTopChampions = async () => {
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

      // console.log(" tope-->", top_laners);

      //** render toplaner best players **/ //
      const best_top_laners = top_laners
        .map((toplaner, index) => {
          return `
              <a
                key=${index + 1}
              href='${defaultURI}#builds?champion=${
            toplaner?.champion_id
          }&role=1&rank=1&region=1'
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
                key=${index + 1}
              href='${defaultURI}#builds?champion=${
            jungler?.champion_id
          }&role=1&rank=1&region=1'
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
                key=${index + 1}
              href='${defaultURI}#builds?champion=${
            mid?.champion_id
          }&role=1&rank=1&region=1'
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
                key=${index + 1}
              href='${defaultURI}#builds?champion=${
            bot?.champion_id
          }&role=1&rank=1&region=1'
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
                key=${index + 1}
              href='${defaultURI}#builds?champion=${
            support?.champion_id
          }&role=1&rank=1&region=1'
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

loadTopChampions();

//--------Featured champions logic------------//
//API call and render methods for featued champions section

//get champion keys (option to populate param values with API keys)
var FeaturedChampIDs = async () => await loadChampionKeys();
// console.log(FeaturedChampIDs);

//API call and render methods for top champions section
const loadFeaturedTopChampions = async (
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
      //** render featured champions **//
      const featuredChampions = featured_champions
        .map((featuredchamp, index) => {
          return `
          <a 
           key=${index + 1}
              href='${defaultURI}#builds?champion=${
            featuredchamp?.id
          }&role=1&rank=1&region=1'
            class="widget__featured__card">
            <div class="widget__top__section">
              <div class="widget__active__class">${
                featuredchamp?.primaryRole === "top"
                  ? `<img src="./assets/Positions/Others/top-white.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "jungle"
                  ? `<img src="./assets/Positions/Basic/Jungle.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "mid"
                  ? `<img src="./assets/Positions/Basic/Midlane.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "adc"
                  ? `<img src="./assets/Positions/Others/bot-white.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "support"
                  ? `<img src="./assets/Positions/Basic/Support.png" alt="R"/>`
                  : `n`
              }</div>
              <div class="widget__avatar__container">
                <img src=${featuredchamp?.image} alt="champ">
              </div>
              <div class="widget__champ__role">${
                featuredchamp?.secondaryRole === "top"
                  ? `<img src="./assets/Positions/Others/top-white.png" alt="R" class="role-top"/>`
                  : featuredchamp?.secondaryRole === "jungle"
                  ? `<img src="./assets/Positions/Basic/Jungle.png" alt="R" />`
                  : featuredchamp?.secondaryRole === "mid"
                  ? `<img src="./assets/Positions/Basic/Midlane.png" alt="R" />`
                  : featuredchamp?.secondaryRole === "adc"
                  ? `<img src="./assets/Positions/Others/bot-white.png" alt="R" class="role-bot"/>`
                  : featuredchamp?.secondaryRole === "support"
                  ? `<img src="./assets/Positions/Basic/Support.png" alt="R" />`
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
      document.getElementById("featuredchampions").innerHTML =
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

loadFeaturedTopChampions();
