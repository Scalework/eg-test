/*articles and videos*/
const articles_videos = document.querySelector("#champ-artsvids");
fetch("../../template/articles.html")
  .then((res) => res.text())
  .then((data) => {
    articles_videos.innerHTML = data;
  });

//Get champ data id
var param = window.localStorage.getItem("champaram");
var searchparam = JSON.parse(param);
var championid = searchparam.championid;

//API call to get articles
// async function getSelectedChampionDArticles() {
//   var articles_api_url = `https://earlygame.com/lol/champions/tags/${championid}`;

//   try {
//     const response = await fetch(`${articles_api_url}`);
//     const responsedata = await response.json();

//     if (response.status === 200) {
//       //map articles data
//       const ChampionArticles = responsedata
//         .map((selectedChamp) => {
//           return `articles data here`;
//         })
//         .join("");
//       document.getElementById("articlles-data-container").innerHTML =
//         ChampionArticles;
//     } else if (response.status === 404) {
//       document.getElementById("loader").innerHTML = response.statusText;
//       console.log("no data found");
//     } else if (response.status === 401 || 403) {
//       console.log("Client not permitted to access requested resources");
//     } else {
//       console.log("An unknown error occured");
//     }
//   } catch (error) {
//     console.log("tippy error", error);
//     document.getElementById("loader").innerHTML = error.message;
//   }
// }

// getSelectedChampionDArticles();
