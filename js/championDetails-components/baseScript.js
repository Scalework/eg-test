//-->selected champion --- all parameters
// let searchParam = window.location.href;
// console.log("search", searchParam);

const default_url =
  "https://earlygame.com/lol/champion-build-stats-runes-items-dashboard";

var param = window.localStorage.getItem("champaram");
var searchparam = JSON.parse(param);
var region = searchparam.region;
var role = searchparam.role;
var rank = searchparam.rank;
var championid = searchparam.championid;
var target = searchparam.targetparam;
var targetparam = searchparam.targetparam;

var new_search_param = `#${target}?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;

//updating filter query params
var selectedChampionID = championid;
var selectedRole = role;
var selectedRanks = rank;
var selectedRegion = region;

var newChampParams = `champion=${championid}&region=${region}&rank=${rank}&role=${role}`;

var tagParam = searchparam.targetparam;
// console.log("tagParam", tagParam);

if (tagParam === "builds") {
  showchampionBuilds();
} else if (tagParam === "skins") {
  showchampionSkins();
} else if (tagParam === "articles") {
  showchampionArtsVids();
}

function showchampionBuilds() {
  document.getElementById("btn-builds").className = "active";
  document.getElementById("champ-build").style.display = "block";
  document.getElementById("champion-skins").style.display = "none";
  document.getElementById("champ-artsvids").style.display = "none";
  document.getElementById("slider-arrows").style.display = "none";
  document.getElementById("slider-arrow-right").style.display = "none";
  document.getElementById("orders-bestplays").style.display = "grid";
  document.getElementById("btn-builds").style =
    "background-color: var(--button-color-1); color: var(--button-active-text-color);";
  document.getElementById("btn-skins").style =
    "background-color: var(--champcard-background-dark-mode)";
  document.getElementById("btn-artsvid").style =
    "background-color: var(--champcard-background-dark-mode)";
  if (history.pushState) {
    var newURL =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `#builds?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
    window.history.pushState({ path: newURL }, "", newURL);
  }
}

//set champions skins section to true
// document.getElementById("btn-skins").addEventListener("click", showchampionSkins);

function showchampionSkins() {
  document.getElementById("champ-build").style.display = "none";
  document.getElementById("champion-skins").style.display = "flex";
  document.getElementById("champ-artsvids").style.display = "none";
  document.getElementById("slider-arrows").style.display = "flex";
  document.getElementById("slider-arrow-right").style.display = "flex";
  document.getElementById("orders-bestplays").style.display = "none";
  document.getElementById("btn-builds").style =
    "background-color: var(--champcard-background-dark-mode)";
  document.getElementById("btn-skins").style =
    "background-color: var(--button-color-1); color: var(--button-active-text-color);";
  document.getElementById("btn-artsvid").style =
    "background-color: var(--champcard-background-dark-mode)";
  if (history.pushState) {
    var newURL =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `#skins?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
    window.history.pushState({ path: newURL }, "", newURL);
  }
}

//set champions arts and video section to true
document
  .getElementById("btn-artsvid")
  .addEventListener("click", showchampionArtsVids);

function showchampionArtsVids() {
  document.getElementById("champ-build").style.display = "none";
  document.getElementById("champion-skins").style.display = "none";
  document.getElementById("champ-artsvids").style.display = "flex";
  document.getElementById("slider-arrows").style.display = "none";
  document.getElementById("slider-arrow-right").style.display = "none";
  document.getElementById("orders-bestplays").style.display = "none";
  document.getElementById("btn-builds").style =
    "background-color: var(--champcard-background-dark-mode)";
  document.getElementById("btn-skins").style =
    "background-color: var(--champcard-background-dark-mode)";
  document.getElementById("btn-artsvid").style =
    "background-color: var(--button-color-1); color: var(--button-active-text-color);";
  if (history.pushState) {
    var newURL =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `#articles?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
    window.history.pushState({ path: newURL }, "", newURL);
  }
}

//champion detail filters
//Append champion roles -filter options to document

var selectedRolesval;

var roleFilters = `
    <option value="1" id="allroles">All Roles</option>
    <option value="2" id="toplanetole">Top</option>
    <option value="3" id="fillrole">Mid</option>
    <option value="4" id="junglerrole">Jungle</option>
    <option value="5" id="supportrole">Support</option>
    <option value="6" id="botrole">Bot</option>
  `;
document.getElementById("roles-filter").innerHTML = roleFilters;
document
  .getElementById("roles-filter")
  .addEventListener("change", function (event) {
    selectedRole = event.target.value;
    var role = selectedRole;
    var filter = "roles";
    var data = { championid, role, rank, region, targetparam, filter };
    window.localStorage.setItem("champaram", JSON.stringify(data));
    $.ajax({
      url: "ajaxdetails.html",
      type: "GET",
      data: {},
      success: function (data) {
        $(".displaycontent").html(data);
        if (history.pushState) {
          var newURL =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            `#builds?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
          window.history.pushState({ path: newURL }, "", newURL);
        }
      },
      error: function (data) {
        // console.log(data);
      },
    });
  });

//Append champion ranks -filter options to document
var rankFilters = `
    <option value="1" id="allranks">All Ranks</option>
    <option value="2" id="challengerrank">Challenger</option>
    <option value="3" id="grandmasterrank">Grandmaster</option>
    <option value="4" id="masterrank">Master</option>
    <option value="5" id="diamondrank">Diamond</option>
    <option value="6" id="platinumrank">Platinum</option>
    <option value="7" id="goldrank">Gold</option>
    <option value="8" id="silverrank">Silver</option>
    <option value="9" id="bronzerank">Bronze</option>
    <option value="10" id="ironrank">Iron</option>
  `;

document.getElementById("ranks-filter").innerHTML = rankFilters;
document
  .getElementById("ranks-filter")
  .addEventListener("change", function (event) {
    selectedRanks = event.target.value;
    var rank = selectedRanks;
    var filter = "rank";
    var data = { championid, role, rank, region, targetparam, filter };
    window.localStorage.setItem("champaram", JSON.stringify(data));
    $.ajax({
      url: "ajaxdetails.html",
      type: "GET",
      data: {},
      success: function (data) {
        $(".displaycontent").html(data);
        if (history.pushState) {
          var newURL =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            `#builds?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
          window.history.pushState({ path: newURL }, "", newURL);
        }
      },
      error: function (data) {
        // console.log(data);
      },
    });
  });

//Append champion regions -filter options to document
var regionFilters = `
    <option value="1" id="all-regions">All Regions</option>
    <option value="2" id="BR1">BR</option>
    <option value="3" id="RU">RU</option>
    <option value="4" id="EUW1">EUW</option>
    <option value="5" id="EUN1">EUN</option>
    <option value="6" id="LA1">LA</option>
    <option value="7" id="NA1">NA</option>
    <option value="8" id="KR">KR</option>
    <option value="9" id="TR1">TR</option>
    <option value="10" id="JP1">JP</option>
    <option value="11" id="OC1">OC</option>
  `;

document.getElementById("regions-filter").innerHTML = regionFilters;
document
  .getElementById("regions-filter")
  .addEventListener("input", function (event) {
    selectedRegion = event.target.value;

    var region = selectedRegion;
    var filter = "region";
    var data = { championid, role, rank, region, targetparam, filter };
    window.localStorage.setItem("champaram", JSON.stringify(data));
    $.ajax({
      url: "ajaxdetails.html",
      type: "GET",
      data: {},
      success: function (data) {
        $(".displaycontent").html(data);
        if (history.pushState) {
          var newURL =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            `#builds?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
          window.history.pushState({ path: newURL }, "", newURL);
        }
      },
      error: function (data) {
        // console.log(data);
      },
    });
  });

//get selected filter values
function getSelectVals() {
  //roles

  var rolesSel = document.getElementById("roles-filter");
  var i;
  for (i = 0; i < rolesSel.length; i++) {
    if (rolesSel.options[i].value === selectedRole) {
      rolesSel.selectedIndex = i;
    } else {
    }
  }

  //ranks
  var ranksSel = document.getElementById("ranks-filter");
  var x;
  for (x = 0; x < ranksSel.length; x++) {
    if (ranksSel.options[x].value === selectedRanks) {
      ranksSel.selectedIndex = x;
    } else {
    }
  }

  //regions
  var regionsSel = document.getElementById("regions-filter");
  var n;
  for (n = 0; n < regionsSel.length; n++) {
    if (regionsSel.options[n].value === selectedRegion) {
      regionsSel.selectedIndex = n;
    } else {
    }
  }
}

var currentdate = new Date();
var logDate =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

//browser back button events
window.addEventListener("popstate", function (event) {
  const eventlog = {
    date: logDate,
    content: event.state,
  };
  // console.log("event state", event.state);
  if (event.state === null) {
    window.location.href = default_url;
    const current_path = window.location;
    window.localStorage.setItem("log", JSON.stringify(eventlog));
    // console.log("browser nav eventlog", eventlog);
  } else {
    const event_state = event.state;
    window.location.href = event_state.path;
    window.localStorage.setItem("log", JSON.stringify(eventlog));
    // console.log("browser nav eventlog", eventlog);
  }
});
