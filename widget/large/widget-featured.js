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
        
`;

document.getElementById("widget__container").innerHTML = widget;

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
