//champion spells
var spell_desc = document.querySelector(".spells1");
var tooltiDisplay = document.querySelector("#spell-descriptions");
var passiveDiv = document.querySelector(".passive_main");
function tooltipData(spells) {
  let spellImage = spells
    .map((spell, index) => {
      return `
                <div class="spell-main">
                 <img src=${spell?.image} data-template=${spell?.name} alt=${spell?.name} class="skills-img" />
                 <span class="order-key">${spell?.key}</span>
                </div>
          `;
    })
    .join("");

  spell_desc.insertAdjacentHTML("beforeend", spellImage);
  let spellToolTipShow = spells
    .map((spell, index) => {
      let cooldown = spell?.cooldown.toString();
      return `
            <div class="tooltip-header" id=${spell?.name}>
              <div class="tooltip-content">
               <img src=${spell?.image} alt=${
        spell?.name
      } class="skills-imgTool"/>
               <span class="span1 spankey">${spell?.key}</span>
               <span class="spanname">${spell?.name}</span>
              </div>
              <div class="tooltip-footer">
              <p class="toolspan">${spell?.description}</p>
              <p class="toolspanCool">
                      <span><a href="#" class="cooldown">Cooldown:</a>${" "}<strong>${cooldown.replace(
        /[,]+/g,
        "/"
      )}</strong></span>
              </p>
              </div>
            </div>
            `;
    })
    .join("");
  tooltiDisplay.innerHTML = spellToolTipShow;
  tippy(".skills-img", {
    content: (reference) => {
      const id = reference.getAttribute("data-template");
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML:true,
    theme:"tomato",
  });
}
