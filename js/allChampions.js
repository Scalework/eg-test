// ------>API call to get champions<------ //
const loadChampions = async () => {
  let api_url = "https://lolbe2.azurewebsites.net/api/v1/staticdata";
  document.getElementById("loader").innerHTML = `Loading...`;
  try {
    const response = await fetch(api_url);
    const responsedata = await response.json();
    if (response.status === 200) {
      //Sort champions data
      const sortData = (championsData) => {
        let sortedChampions = [];
        sortedChampions = championsData.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        return sortedChampions;
      };

      let champions = sortData(responsedata);

      //set champions ids
      localStorage.setItem("all_campions_ID", JSON.stringify(champions?.id));
      document.getElementById("loader").style.display = `none`;

      //stringify data into JSON format

      //render data to html
      const allChampionsData = (champions) => {
        const mappedChampions = champions
          .map((champion, index) => {
            return `
            <a id="champ-card" key=${index}
              href='#builds?champion=${champion?.id}&role=1&rank=1&region=1'
              targetparam = "builds"
              champion = "${champion?.id}"
              role = "1"
              rank = "1"
              region = "1"
              class='champion-card ${champion.roles.primaryRole}  
              ${champion.roles.secondaryRole} ${
              champion?.class[0]?.description
            }'>
              <div class="card">
                  <div class="top-section">
                    <div class=${
                      client_host_name === "riftfeed"
                        ? "active-classes-rift"
                        : "active-classes"
                    } id="champ-active-classes">
                      ${
                        champion?.class[0]?.image
                          ? `<img src=${champion?.class[0]?.image} alt="C" />`
                          : ``
                      }
                    </div>

                    <div class="avatar-container">
                      <img src=${champion?.image?.tile} alt="champ-avatar" />
                    </div>

                    <div class=${
                      client_host_name === "riftfeed"
                        ? "champ-roles-rift"
                        : "champ-roles"
                    } id="champ-active-classes">
                      ${
                        champion?.roles.primaryRole === "top"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/top-white.png" alt="R" class="role-top"/>`
                          : champion?.roles.primaryRole === "jungle"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Jungle.png" alt="R" />`
                          : champion?.roles.primaryRole === "mid"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Midlane.png" alt="R" />`
                          : champion?.roles.primaryRole === "adc"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/bot-white.png" alt="R" class="role-bot"/>`
                          : champion?.roles.primaryRole === "support"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Support.png" alt="R" />`
                          : `n`
                      }
                      ${
                        champion?.roles.secondaryRole === "top"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/top-white.png" alt="R" class="role-top"/>`
                          : champion?.roles.secondaryRole === "jungle"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Jungle.png" alt="R" />`
                          : champion?.roles.secondaryRole === "mid"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Midlane.png" alt="R" />`
                          : champion?.roles.secondaryRole === "adc"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Others/bot-white.png" alt="R" class="role-bot"/>`
                          : champion?.roles.secondaryRole === "support"
                          ? `<img src="../imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Support.png" alt="R" />`
                          : ``
                      }
                    </div>
                  </div>
                
                </div>
                
                
                <div class="champion-summary">
                  <span class="champ-title" id="champion-name"> 
                  ${champion?.name}</span>
                  <span class="champ-description">
                  ${champion?.passive?.name}</span>
                </div>
              </div>
            </a>
        `;
          })
          .join("");

        document.getElementById("champions").innerHTML = mappedChampions;
        //--> champion filter options
        let cardElement = document.querySelectorAll("#champ-card");
        let spansImage = document.querySelectorAll(".icons img");
        let selectedValue = document.querySelector(".filter-select");

        for (let i = 0; i < spansImage.length; i++) {
          spansImage[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            // console.log(e);
            cardElement.forEach((card) => {
              if (filter == "all") {
                card.style.display = "flex";
              } else {
                if (card.classList.contains(filter)) {
                  card.style.display = "flex";
                } else {
                  card.style.display = "none";
                }
              }
            });
          });
        }
        selectedValue.addEventListener("change", (e) => {
          e.preventDefault();
          const filterValue = selectedValue.value;
          // console.log(filterValue);
          cardElement.forEach((card) => {
            if (filterValue == "all classes") {
              card.style.display = "flex";
            } else {
              if (card.classList.contains(filterValue)) {
                card.style.display = "flex";
              } else {
                card.style.display = "none";
              }
            }
          });
        });
      };

      allChampionsData(champions);

      //search for a champion -->
      const searchBar = document.querySelector("#search-champions");
      searchBar.addEventListener("keyup", (e) => {
        const searchString = e.target.value;
        // console.log(searchString);

        const match = new RegExp(`${searchString}`, "gi");

        const searchResults = champions.filter((champion) => {
          return match.test(champion?.name);
          // return champion?.name.includes(searchString);
        });
        // console.log(searchResults);
        allChampionsData(searchResults);
      });
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

loadChampions();

//check browser back button click + events
window.addEventListener("popstate", function (event) {
  console.log("browser back event", event);
  var current_path = event.state.path
  window.location.href=`${event.state.path}`;
  console.log("current path navigated to", current_path);
  // window.location.replace(`${event.state.path}`);

  return;
});



// //check browser forward button click + events
// window.addEventListener("pushstate", function (event) {
//   console.log("browser forward event", event);
//   const current_path = event.state.path
//   console.log("current path navigated to", current_path);
//   window.location.href = current_path;
//   // return;
// });

