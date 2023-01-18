var defaultURI =
  "https://earlygame.com/lol/champion-build-stats-runes-items-dashboard";

//API call and render methods for top champions section
const loadFeaturedTopChampions = async () => {
  var api_url = "https://lolbe2.azurewebsites.net/api/v1/featuredchampions";
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(api_url);
    const featured_champions = await response.json();

    if (response.status === 200) {
      // console.log("--->", featured_champions);
      //** render featured champions **/ //
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
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/top-white.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "jungle"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Jungle.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "mid"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Midlane.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "adc"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/bot-white.png" alt="R"/>`
                  : featuredchamp?.primaryRole === "support"
                  ? `<img src="../../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Support.png" alt="R"/>`
                  : `n`
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
      document.getElementById("featuredchampions").innerHTML =
        featuredChampions;
    } else if (response.status === 404) {
      // document.getElementById("loader").innerHTML = response.statusText;
      console.log("no data found");
    } else if (response.status === 401 || 403) {
      // console.log("Client not permitted to access requested resources");
    } else {
      // console.log("An unknown error occured");
    }
  } catch (error) {
    console.log(error);
    // document.getElementById(
    //   "loader"
    // ).innerHTML = `An unexpected error occured. Please try again later.`;
  }
};

loadFeaturedTopChampions();
