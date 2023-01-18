//-->selected champion --- all parameters
// let searchParam = window.location.href;
// console.log("search", searchParam);

var param = window.localStorage.getItem("champaram");
var searchparam = JSON.parse(param);
var region = searchparam.region;
var role = searchparam.role;
var rank = searchparam.rank;
var championid = searchparam.championid;
var target = searchparam.targetparam;
var targetparam = searchparam.targetparam;

var new_search_param = `#${target}?champion=${championid}&role=${role}&rank=${rank}&region=${region}`;
// console.log("search param", new_search_param);
// console.log("param", searchparam);

var selectedChampionID = championid;
var selectedRole = role;
var selectedRanks = rank;
var selectedRegion = region;

var newChampParams = `champion=${championid}&region=${region}&rank=${rank}&role=${role}`;

var tagParam = searchparam.targetparam;
// console.log("tagParam", tagParam);

if (tagParam === "builds") {
  showchampionBuilds();
  document.getElementById("btn-builds").style = "background-color: #2c1da1;";
  document.getElementById("btn-skins").style = "background-color: #1a1921;";
  document.getElementById("btn-artsvid").style = "background-color: #1a1921";
} else if (tagParam === "skins") {
  showchampionSkins();
  document.getElementById("btn-builds").style = "background-color: #1a1921;";
  document.getElementById("btn-skins").style = "background-color: #2c1da1;";
  document.getElementById("btn-artsvid").style = "background-color: #1a1921";
} else if (tagParam === "articles") {
  showchampionArtsVids();
  document.getElementById("btn-builds").style = "background-color: #1a1921;";
  document.getElementById("btn-skins").style = "background-color: #1a1921";
  document.getElementById("btn-artsvid").style = "background-color: #2c1da1;";
}
