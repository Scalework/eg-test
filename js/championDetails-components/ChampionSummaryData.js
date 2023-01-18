//----> API call to get champions details <----//

async function getSelectedChampionData() {
  let api_url = `https://lolbe2.azurewebsites.net/api/v1/champstaticdata?${newChampParams}`;

  document.getElementById("loader").innerHTML = `Loading champion's details`;
  try {
    const response = await fetch(`${api_url}`);
    const responsedata = await response.json();

    if (response.status === 200) {
      document.getElementById("loader").style.display = `none`;
      tooltipData(responsedata[0].spells);

      //stringify data into JSON format
      const championDetails = responsedata;
      passiveSpell(responsedata);

      //map champions basic info output
      const championBasicInfo = championDetails
        .map((selectedChamp) => {
          return ` 
            <div class="banner-img-name">
              <img class="champion-banner" src=${selectedChamp?.image?.banner} alt="selected-champion-banner" />
              <span class="selected-champion-name" id="selected-champ-name">${selectedChamp?.name}</span>
            </div>
            <span class="champion-history" id="champ-history">${selectedChamp?.introduction}</span>
          `;
        })
        .join("");
      document.querySelector(".banner__section").innerHTML = championBasicInfo;

      //Best players heading
      let PlayerHeading = championDetails.map((playerHead) => {
        return `Best ${playerHead?.name} Players`;
      });
      document.getElementById("best-plays-heading").innerText = PlayerHeading;

      //map champions primary class output
      const ChampionClass = championDetails
        .map((selectedChamp) => {
          return `<img src=${selectedChamp?.class[0]?.image} alt="primary-class" id="prim-class"/>
          <span>${selectedChamp?.class[0]?.description}</span>`;
        })
        .join("");
      document.getElementById("champ-primary-class").innerHTML = ChampionClass;

      //map champions difficulty output
      const ChampionDifficultyOutput = championDetails
        .map((selectedChamp) => {
          return `<img src=${selectedChamp?.difficulty?.image} alt="difficulty" id="difficulty"/>
          <span>${selectedChamp?.difficulty?.description}</span>`;
        })
        .join("");
      document.getElementById("champion-difficulty-level").innerHTML =
        ChampionDifficultyOutput;

      //AD level
      let APLevels = Object.values(Object.values(...championDetails)[7])[0];

      //AP Level
      let ADLevels = Object.values(Object.values(...championDetails)[7])[1];

      //TD Level
      let TDLevels = Object.values(Object.values(...championDetails)[7])[2];

      const championDamageOutput = championDetails
        .map((selectedChamp) => {
          return ` 
            ${
              ADLevels > APLevels && ADLevels > TDLevels
                ? `<div class="progress-container" style="width: 10.25rem;">
                    <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageAP}%;">
                      <span class="progress" style="width: 100%;" title=${selectedChamp?.damage?.damageAP}%></span>
                      <sub class="desc" title=${selectedChamp?.damage?.damageAP}%>AP</sub>
                    </div>
                    <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageAD}%">
                      <span class="progress" style="width: 100%;" title=${selectedChamp?.damage?.damageAD}%></span>
                      <sub class="desc" style="margin-left: 1rem;" title=${selectedChamp?.damage?.damageAD}%>AD</sub>
                    </div>
                    <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageTrue}%;">
                      <span class="progress" style="width:100%;" title=${selectedChamp?.damage?.damageTrue}%></span>
                      <sub class="desc" title=${selectedChamp?.damage?.damageTrue}%>TD</sub>
                    </div>
                  </div>`
                : APLevels > ADLevels && APLevels > TDLevels
                ? `<div class="progress-container" style="width: 10.25rem;">
                      <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageAD}%">
                        <span class="progress" style="width: 100%;" title=${selectedChamp?.damage?.damageAD}%></span>
                        <sub class="desc" title=${selectedChamp?.damage?.damageAD}%>AD</sub>
                      </div>
                      <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageAP}%;">
                        <span class="progress" style="width: 100%;" title=${selectedChamp?.damage?.damageAP}%></span>
                        <sub class="desc" style="margin-left: 1rem;" title=${selectedChamp?.damage?.damageAP}%>AP</sub>
                      </div>
                      <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageTrue}%;">
                        <span class="progress" style="width:100%;" title=${selectedChamp?.damage?.damageTrue}%></span>
                        <sub class="desc" title=${selectedChamp?.damage?.damageTrue}%>TD</sub>
                      </div>
                    </div>`
                : TDLevels > ADLevels && TDLevels > APLevels
                ? `<div class="progress-container" style="width: 10.25rem;">
                      <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageAD}%">
                        <span class="progress" style="width: 100%;" title=${selectedChamp?.damage?.damageAD}%></span>
                        <sub class="desc" title=${selectedChamp?.damage?.damageAD}%>AD</sub>
                      </div>
                      <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageTrue}%;">
                        <span class="progress" style="width:100%;" title=${selectedChamp?.damage?.damageTrue}%></span>
                        <sub class="desc" style="margin-left: 1rem;" title=${selectedChamp?.damage?.damageTrue}%>TD</sub>
                      </div>
                      <div class="progress-wrapper" style="width: ${selectedChamp?.damage?.damageAP}%;">
                        <span class="progress" style="width: 100%;" title=${selectedChamp?.damage?.damageAP}%></span>
                        <sub class="desc" title=${selectedChamp?.damage?.damageAP}%>AP</sub>
                      </div>
                    </div>`
                : ``
            }           


          `;
        })
        .join("");
      document.getElementById("dm-levels").innerHTML = championDamageOutput;

      //map champions powerspikes output
      const championPowerOutput = championDetails
        .map((selectedChamp) => {
          return ` 
          <span>Power Spike</span>
          <img id="power-spike-img"
            src=${selectedChamp?.powerSpike}
            alt="power-spike"
          />
          `;
        })
        .join("");
      document.getElementById("power-spike").innerHTML = championPowerOutput;

      //map champions active role
      let championPrimaryRole = Object.values(
        Object.values(...championDetails)[4]
      )[0].toLowerCase();

      let champSecondaryRole = Object.values(
        Object.values(...championDetails)[4]
      )[1].toLowerCase();
      let championsRoles = [championPrimaryRole, champSecondaryRole];

      const championActiveRole = ` 
            <button>
              ${
                championsRoles.includes("top")
                  ? `<img class="role-active" 
                src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Highlighted/Toplane-Highlighted.png"
                alt="top" />`
                  : `<img
                src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Toplane.png"
                alt="top" />`
              }
            </button>
            <button>
              ${
                championsRoles.includes("jungle")
                  ? `<img class="role-active" src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Highlighted/Jungle-Highlighted.png"
                alt="mid" />`
                  : `<img src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Jungle.png"
                alt="mid" />`
              }
            </button>
            <button>${
              championsRoles.includes("mid")
                ? `<img class="role-active" src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Highlighted/Midlane-Highlighted.png"
                alt="support" />`
                : `<img src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Midlane.png"
                alt="support" />`
            }
            </button>
            <button>
              ${
                championsRoles.includes("adc")
                  ? `<img class="role-active" src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Highlighted/ADC-Highlighted.png"
                alt="top" />`
                  : `<img src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/ADC.png"
                alt="top" />`
              }
            </button>
            <button>
              ${
                championsRoles.includes("support")
                  ? `<img class="role-active" 
                src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Highlighted/Support-Highlighted.png"
                alt="top" />`
                  : `<img
                src="./imgassets/LoL_Dashboard_Phase_1_Design_Assets/Positions/Basic/Support.png"
                alt="top" />`
              }
            </button>
            
      `;

      document.getElementById("champion-primary role").innerHTML =
        championActiveRole;
    } else if (response.status === 404) {
      document.getElementById("loader").innerHTML = response.statusText;
      // console.log("no data found");
    } else if (response.status === 401 || 403) {
      // console.log("Client not permitted to access requested resources");
    } else {
      // console.log("An unknown error occured");
    }
  } catch (error) {
    // console.log("tippy error", error);
    document.getElementById("loader").innerHTML = error.message;
  }
}

getSelectedChampionData();
