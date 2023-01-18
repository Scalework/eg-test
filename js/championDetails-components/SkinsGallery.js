//........... SKIN SECTION .............
async function fetchSkinData() {
  let param = window.localStorage.getItem("champaram");
  let searchparam = JSON.parse(param);
  let _ID = searchparam.championid;

  let api_url = `https://lolbe2.azurewebsites.net/api/v1/champstaticdata?champion=${_ID}`;
  let response = await fetch(api_url);
  let data = await response.json();
  skinData(data[0].skins);
  // console.log("skin-image---->",data[0].skins?.image)
}
var prevImg = document.querySelector(".slider-left");
var nextImg = document.querySelector(".slider-right");
var mainSkinDiv = document.querySelector("#champ-skins");
function skinData(skins) {
  const sliderContainer = skins
    .map((skin, index) => {
      let name = skin?.name;
      let name2 = name.charAt(0).toUpperCase() + name.slice(1);

      return `
     <div class="all-champion-skins carousel fade" key=${index}>
      <img src=${skin?.image} alt=${skin?.name} />
      <span class="skin_name" id="skin_name"> ${name2}</span>
     </div>
    `;
    })
    .join("");
  mainSkinDiv.innerHTML = sliderContainer;
  let slidePosition = 0;
  let slides = document.querySelectorAll(".carousel");
  let slideLength = slides.length;
  let spanText = document.querySelector(".skin_name");

  function updatePosition() {
    for (let i = 0; i < slideLength; i++) {
      slides[i].style.display = "none";
    }
    slides[slidePosition].style.display = "block";
  }
  nextImg.addEventListener("click", () => {
    if (slidePosition === slideLength - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updatePosition();
  });
  prevImg.addEventListener("click", () => {
    if (slidePosition === 0) {
      slidePosition = slideLength - 1;
    } else {
      slidePosition--;
    }
    updatePosition();
  });

  updatePosition();
}


fetchSkinData();
