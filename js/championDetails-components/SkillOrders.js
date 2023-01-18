//champions skill orders
async function getSkillOrders() {
  let skillsURL = `https://lolbe2.azurewebsites.net/api/v1/skill_order?${newChampParams}`;
  try {
    const response = await fetch(skillsURL);
    const responsedata = await response.json();
    if (response.status === 200) {
      const championSKillOrders = responsedata;
      // console.log("skill order levels-->", championSKillOrders?.skills[0][0]?.levels)

      //map data to html element

      //skill order row items
      const mappedSkills_rowitemA = championSKillOrders?.skills[0][0];
      const mappedSkills_rowitemB = championSKillOrders?.skills[0][1];
      const mappedSkills_rowitemC = championSKillOrders?.skills[0][2];

      //skill order - item order
      const first_order_key = championSKillOrders?.order[0][0];
      const second_order_key = championSKillOrders?.order[1][0];
      const third_order_key = championSKillOrders?.order[2][0];

      const first_order_item = championSKillOrders?.order[0][1];
      const second__order_item = championSKillOrders?.order[1][1];
      const third_order_item = championSKillOrders?.order[2][1];

      let skillOrdersRow = `
            <div key="1" class="sk-order tool firstrowtippy">
              <h4>${first_order_key}</h4>
              <img src=${first_order_item?.image} alt="order" />
              <span class="sk-order-dr" style="margin-top: 30px;">${first_order_key}</span>
            </div>
            <div class="direct-right"><img src="./imgassets/carets/caret-right.svg" alt="caret-next"><img
              src="./imgassets/carets/caret-right.svg" alt="caret-next"><img
              src="./imgassets/carets/caret-right.svg" alt="caret-next">
            </div>
            <div key="1" class="sk-order tool  secondrowtippy">
              <h4>${second_order_key}</h4>
              <img src=${second__order_item?.image} alt="order" />
              <span class="sk-order-dr" style="margin-top: 30px;">${second_order_key}</span>
            </div>
            <div class="direct-right"><img src="./imgassets/carets/caret-right.svg" alt="caret-next"><img
              src="./imgassets/carets/caret-right.svg" alt="caret-next"><img
              src="./imgassets/carets/caret-right.svg" alt="caret-next">
            </div>
            <div key="1" class="sk-order tool  thirdrowtippy">
              <h4>${third_order_key}</h4>
              <img src=${third_order_item?.image} alt="order" />
              <span class="sk-order-dr" style="margin-top: 30px;">${third_order_key}</span>
            </div>
          `;

      //-->row  order tool tips
      first_tip_order_item = `
            <div class="tooltip-header skillOrder-tooltip" id="first-row">
              <div class="tooltip-content skillOrderContent">
              <img src=${first_order_item?.image} alt=${first_order_item?.name} />
                <span class="spanname">${first_order_item?.name}</span>
                <span class="spankey">${first_order_key}</span>
              </div>
              <div class="tooltip-footer">
              <p class="toolspan">${first_order_item?.description}</p>
              </div>
            </div>
          `;

      second_tip_order_item = `
          <div class="tooltip-header skillOrder-tooltip" id="second-row">
            <div class="tooltip-content skillOrderContent">
            <img src=${second__order_item?.image} alt=${second__order_item.name} />
              <span class="spanname">${second__order_item?.name}</span>
              <span class="spankey">${second_order_key}</span>
            </div>
            <div class="tooltip-footer">
            <p class="toolspan">${second__order_item?.description}</p>
            </div>
          </div>
        `;

      third_tip_order_item = `
        <div class="tooltip-header skillOrder-tooltip" id="third-row">
          <div class="tooltip-content skillOrderContent">
          <img src=${third_order_item?.image} alt=${third_order_item.name} />
            <span class="spanname">${third_order_item?.name}</span>
            <span class="spankey">${third_order_key}</span>
          </div>
          <div class="tooltip-footer">
          <p class="toolspan">${third_order_item?.description}</p>
          </div>
        </div>
      `;

      document.querySelector("#first_row_tooltips").innerHTML =
        first_tip_order_item;
      document.querySelector("#second_row_tootltips").innerHTML =
        second_tip_order_item;
      document.querySelector("#third_row_tooltips").innerHTML =
        third_tip_order_item;

      let first_row_tip = document.querySelector("#first_row_tooltips");
      let second_row_tip = document.querySelector("#second_row_tootltips");
      let third_row_tip = document.querySelector("#third_row_tooltips");

      //---> skill order column
      const mappedSkillsCOlQ = championSKillOrders?.skills[0][0];
      const mappedSkillsColW = championSKillOrders?.skills[0][1];
      const mappedSkillsColE = championSKillOrders?.skills[0][2];
      const mappedSkillsColR = championSKillOrders?.skills[0][3];

      let skillOrderQ = `
        <div class="tooltip-header skillOrder-tooltip" id=${mappedSkillsCOlQ?.id}>
          <div class="tooltip-content skillOrderContent">
           <img src=${mappedSkillsCOlQ?.image} alt="slot.name" />
            <span class="spanname">${mappedSkillsCOlQ?.name}</span>
             <span class="spankey">Q</span>
          </div>
          <div class="tooltip-footer">
          <p class="toolspan">${mappedSkillsCOlQ?.description}</p>
          </div>
        </div>
      `;

      let skillOrderW = `
        <div class="tooltip-header   skillOrder-tooltip" id=${mappedSkillsColW?.id}">
          <div class="tooltip-content skillOrderContent">
           <img src=${mappedSkillsColW?.image} alt="slot.name" />
            <span class="spanname">${mappedSkillsColW?.name}</span>
             <span class="spankey">W</span>
          </div>
          <div class="tooltip-footer">
          <p class="toolspan">${mappedSkillsColW?.description}</p>
          </div>
        </div>
      `;

      let skillOrderE = `
        <div class="tooltip-header skillOrder-tooltip" id=${mappedSkillsColE?.id}>
          <div class="tooltip-content skillOrderContent">
           <img src=${mappedSkillsColE.image} alt="slot.name" />
            <span class="spanname">${mappedSkillsColE.name}</span>
             <span class="spankey">E</span>
          </div>
          <div class="tooltip-footer">
          <p class="toolspan">${mappedSkillsColE.description}</p>
          </div>
        </div>
      `;

      let skillOrderR = `
        <div class="tooltip-header   skillOrder-tooltip" id=${mappedSkillsColR?.id}>
          <div class="tooltip-content skillOrderContent">
           <img src=${mappedSkillsColR?.image} alt="slot.name" />
            <span class="spanname">${mappedSkillsColR?.name}</span>
             <span class="spankey">R</span>
          </div>
          <div class="tooltip-footer">
          <p class="toolspan">${mappedSkillsColR?.description}</p>
          </div>
        </div>
      `;
      document.getElementById("sk-order-combination").innerHTML =
        skillOrdersRow;
      document.querySelector(".skill__order_header_img").innerHTML =
        skillOrdersRow;
      document.querySelector("#skillOrderQ_tootltips").innerHTML = skillOrderQ;
      document.querySelector("#skillOrderW_tootltips").innerHTML = skillOrderW;
      document.querySelector("#skillOrderE_tootltips").innerHTML = skillOrderE;
      document.querySelector("#skillOrderR_tootltips").innerHTML = skillOrderR;

      let templateQ = document.querySelector("#skillOrderQ_tootltips");
      let templateW = document.querySelector("#skillOrderW_tootltips");
      let templateE = document.querySelector("#skillOrderE_tootltips");
      let templateR = document.querySelector("#skillOrderR_tootltips");

      // skill order cells

      //-->Skill cell A
      let championSkillCellA = `
          <td><img src=${
            mappedSkillsCOlQ?.image
          } alt="sk-ord" class="tippyQ" /><sub>Q</sub></td>
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("1.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("2.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("3.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("4.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("5.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("6.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("7.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("8.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("9.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("10.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("11.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("12.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("13.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("14.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("15.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("16.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("17.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][0]?.levels.includes("18.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
      `;
      let championSkill_One = `
        <div class="skillImage-show">
        <img src=${mappedSkillsCOlQ?.image} alt="sk-ord" class="tippyQ" /><sub>Q</sub>
          </div>
      `;
      let championSkillCell_one = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("1.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_two = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("2.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_three = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("3.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_four = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("4.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_five = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("5.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_six = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("6.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_seven = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("7.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_eight = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("8.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_nine = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("9.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_ten = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("10.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_eleven = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("11.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_twelve = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("12.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_thirteen = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("13.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_fourteen = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("14.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_fifteen = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("15.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_sixteen = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("16.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_seventeen = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("17.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCell_eighteen = `
        ${
          championSKillOrders?.skills[0][0]?.levels.includes("18.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      document.getElementById("skillcellsa").innerHTML = championSkillCellA;
      document.querySelector(".img-one").innerHTML = championSkill_One;
      document.querySelector(".skill__order_buble").innerHTML =
        championSkillCell_one;
      document.querySelector(".skill__order_buble_two").innerHTML =
        championSkillCell_two;
      document.querySelector(".skill__order_buble_three").innerHTML =
        championSkillCell_three;
      document.querySelector(".skill__order_buble_four").innerHTML =
        championSkillCell_four;
      document.querySelector(".skill__order_buble_five").innerHTML =
        championSkillCell_five;
      document.querySelector(".skill__order_buble_six").innerHTML =
        championSkillCell_six;
      document.querySelector(".skill__order_buble_seven").innerHTML =
        championSkillCell_seven;
      document.querySelector(".skill__order_buble_eight").innerHTML =
        championSkillCell_eight;
      document.querySelector(".skill__order_buble_nine").innerHTML =
        championSkillCell_nine;
      document.querySelector(".skill__order_buble_ten").innerHTML =
        championSkillCell_ten;
      document.querySelector(".skill__order_buble_eleven").innerHTML =
        championSkillCell_eleven;
      document.querySelector(".skill__order_buble_twelve").innerHTML =
        championSkillCell_twelve;
      document.querySelector(".skill__order_buble_thirteen").innerHTML =
        championSkillCell_thirteen;
      document.querySelector(".skill__order_buble_fourteen").innerHTML =
        championSkillCell_fourteen;
      document.querySelector(".skill__order_buble_fifteen").innerHTML =
        championSkillCell_fifteen;
      document.querySelector(".skill__order_buble_sixteen").innerHTML =
        championSkillCell_sixteen;
      document.querySelector(".skill__order_buble_seventeen").innerHTML =
        championSkillCell_seventeen;
      document.querySelector(".skill__order_buble_eighteen").innerHTML =
        championSkillCell_eighteen;

      //-->Skill cell B
      let championSkillCellB = `
          <td class="tippyW"><img src=${
            mappedSkillsColW?.image
          } alt="sk-ord" /><sub>W</sub></td>
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("1.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("2.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("3.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("4.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("5.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("6.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("7.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("8.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("9.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("10.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("11.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("12.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("13.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("14.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("15.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("16.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("17.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][1]?.levels.includes("18.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
      `;
      let championSkill_Two = `
       <div class="skillImage-show">
         <img src=${mappedSkillsColW?.image} alt="sk-ord" class="tippyW"/><sub>W</sub>
          </div>
      `;
      let championSkillCellB_one = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("1.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_two = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("2.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_three = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("3.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_four = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("4.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_five = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("5.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_six = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("6.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_seven = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("7.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_eight = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("8.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_nine = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("9.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_ten = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("10.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_eleven = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("11.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_twelve = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("12.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_thirteen = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("13.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_fourteen = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("14.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_fifteen = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("15.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_sixteen = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("16.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_seventeen = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("17.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellB_eighteen = `
        ${
          championSKillOrders?.skills[0][1]?.levels.includes("18.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      document.getElementById("skillcellsb").innerHTML = championSkillCellB;
      document.querySelector(".img-two").innerHTML = championSkill_Two;
      document.querySelector(".skill__orderB_One").innerHTML =
        championSkillCellB_one;
      document.querySelector(".skill__orderB_two").innerHTML =
        championSkillCellB_two;
      document.querySelector(".skill__orderB_three").innerHTML =
        championSkillCellB_three;
      document.querySelector(".skill__orderB_four").innerHTML =
        championSkillCellB_four;
      document.querySelector(".skill__orderB_five").innerHTML =
        championSkillCellB_five;
      document.querySelector(".skill__orderB_six").innerHTML =
        championSkillCellB_six;
      document.querySelector(".skill__orderB_seven").innerHTML =
        championSkillCellB_seven;
      document.querySelector(".skill__orderB_eight").innerHTML =
        championSkillCellB_eight;
      document.querySelector(".skill__orderB_nine").innerHTML =
        championSkillCellB_nine;
      document.querySelector(".skill__orderB_ten").innerHTML =
        championSkillCellB_ten;
      document.querySelector(".skill__orderB_eleven").innerHTML =
        championSkillCellB_eleven;
      document.querySelector(".skill__orderB_twelve").innerHTML =
        championSkillCellB_twelve;
      document.querySelector(".skill__orderB_thirteen").innerHTML =
        championSkillCellB_thirteen;
      document.querySelector(".skill__orderB_fourteen").innerHTML =
        championSkillCellB_fourteen;
      document.querySelector(".skill__orderB_fifteen").innerHTML =
        championSkillCellB_fifteen;
      document.querySelector(".skill__orderB_sixteen").innerHTML =
        championSkillCellB_sixteen;
      document.querySelector(".skill__orderB_seventeen").innerHTML =
        championSkillCellB_seventeen;
      document.querySelector(".skill__orderB_eighteen").innerHTML =
        championSkillCellB_eighteen;

      //-->Skill cell C
      let championSkillCellC = `
          <td class="tippyE"><img src=${
            mappedSkillsColE?.image
          } alt="sk-ord"/><sub>E</sub></td>
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("1.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("2.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("3.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("4.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("5.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("6.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("7.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("8.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("9.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("10.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("11.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("12.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("13.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("14.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("15.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("16.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("17.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
          ${
            championSKillOrders?.skills[0][2]?.levels.includes("18.0")
              ? `<td><span class="bubble"></span></td>`
              : `<td><span></span></td>`
          }
      `;
      let championSkill_Three = `
        <div class="skillImage-show">
        <img src=${mappedSkillsColE?.image} alt="sk-ord" class="tippyE"/><sub>E</sub>
        </div>
      `;
      let championSkillCellC_one = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("1.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_two = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("2.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_three = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("3.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_four = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("4.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_five = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("5.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_six = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("6.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_seven = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("7.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_eight = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("8.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_nine = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("9.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_ten = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("10.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_eleven = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("11.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_twelve = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("12.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_thirteen = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("13.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_fourteen = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("14.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_fifteen = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("15.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_sixteen = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("16.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_seventeen = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("17.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellC_eighteen = `
        ${
          championSKillOrders?.skills[0][2]?.levels.includes("18.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      document.getElementById("skillcellsc").innerHTML = championSkillCellC;
      document.querySelector(".img-three").innerHTML = championSkill_Three;
      document.querySelector(".skill__orderC_One").innerHTML =
        championSkillCellC_one;
      document.querySelector(".skill__orderC_two").innerHTML =
        championSkillCellC_two;
      document.querySelector(".skill__orderC_three").innerHTML =
        championSkillCellC_three;
      document.querySelector(".skill__orderC_four").innerHTML =
        championSkillCellC_four;
      document.querySelector(".skill__orderC_five").innerHTML =
        championSkillCellC_five;
      document.querySelector(".skill__orderC_six").innerHTML =
        championSkillCellC_six;
      document.querySelector(".skill__orderC_seven").innerHTML =
        championSkillCellC_seven;
      document.querySelector(".skill__orderC_eight").innerHTML =
        championSkillCellC_eight;
      document.querySelector(".skill__orderC_nine").innerHTML =
        championSkillCellC_nine;
      document.querySelector(".skill__orderC_ten").innerHTML =
        championSkillCellC_ten;
      document.querySelector(".skill__orderC_eleven").innerHTML =
        championSkillCellC_eleven;
      document.querySelector(".skill__orderC_twelve").innerHTML =
        championSkillCellC_twelve;
      document.querySelector(".skill__orderC_thirteen").innerHTML =
        championSkillCellC_thirteen;
      document.querySelector(".skill__orderC_fourteen").innerHTML =
        championSkillCellC_fourteen;
      document.querySelector(".skill__orderC_fifteen").innerHTML =
        championSkillCellC_fifteen;
      document.querySelector(".skill__orderC_sixteen").innerHTML =
        championSkillCellC_sixteen;
      document.querySelector(".skill__orderC_seventeen").innerHTML =
        championSkillCellC_seventeen;
      document.querySelector(".skill__orderC_eighteen").innerHTML =
        championSkillCellC_eighteen;

      //-->Skill cell D
      let championSkillCellD = `
           <td class="tippyR"><img src=${
             mappedSkillsColR?.image
           } alt="sk-ord" /><sub>R</sub></td>
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("1.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("2.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("3.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("4.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("5.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("6.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("7.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("8.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("9.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("10.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("11.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("12.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("13.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("14.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("15.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("16.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("17.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
           ${
             championSKillOrders?.skills[0][3]?.levels.includes("18.0")
               ? `<td><span class="bubble"></span></td>`
               : `<td><span></span></td>`
           }
       `;
      let championSkill_Four = `
       <div class="skillImage-show">
       <img src=${mappedSkillsColR?.image} alt="sk-ord" class="tippyR"/><sub>R</sub>
         </div>  
      `;
      let championSkillCellD_one = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("1.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_two = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("2.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_three = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("3.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_four = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("4.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_five = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("5.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_six = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("6.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_seven = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("7.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_eight = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("8.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_nine = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("9.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_ten = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("10.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_eleven = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("11.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_twelve = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("12.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_thirteen = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("13.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_fourteen = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("14.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_fifteen = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("15.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_sixteen = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("16.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_seventeen = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("17.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      let championSkillCellD_eighteen = `
        ${
          championSKillOrders?.skills[0][3]?.levels.includes("18.0")
            ? `<span class="bubble"></span>`
            : `<span></span>`
        }
      `;
      document.getElementById("skillcellsd").innerHTML = championSkillCellD;
      document.querySelector(".img-four").innerHTML = championSkill_Four;
      document.querySelector(".skill__orderD_One").innerHTML =
        championSkillCellD_one;
      document.querySelector(".skill__orderD_two").innerHTML =
        championSkillCellD_two;
      document.querySelector(".skill__orderD_three").innerHTML =
        championSkillCellD_three;
      document.querySelector(".skill__orderD_four").innerHTML =
        championSkillCellD_four;
      document.querySelector(".skill__orderD_five").innerHTML =
        championSkillCellD_five;
      document.querySelector(".skill__orderD_six").innerHTML =
        championSkillCellD_six;
      document.querySelector(".skill__orderD_seven").innerHTML =
        championSkillCellD_seven;
      document.querySelector(".skill__orderD_eight").innerHTML =
        championSkillCellD_eight;
      document.querySelector(".skill__orderD_nine").innerHTML =
        championSkillCellD_nine;
      document.querySelector(".skill__orderD_ten").innerHTML =
        championSkillCellD_ten;
      document.querySelector(".skill__orderD_eleven").innerHTML =
        championSkillCellD_eleven;
      document.querySelector(".skill__orderD_twelve").innerHTML =
        championSkillCellD_twelve;
      document.querySelector(".skill__orderD_thirteen").innerHTML =
        championSkillCellD_thirteen;
      document.querySelector(".skill__orderD_fourteen").innerHTML =
        championSkillCellD_fourteen;
      document.querySelector(".skill__orderD_fifteen").innerHTML =
        championSkillCellD_fifteen;
      document.querySelector(".skill__orderD_sixteen").innerHTML =
        championSkillCellD_sixteen;
      document.querySelector(".skill__orderD_seventeen").innerHTML =
        championSkillCellD_seventeen;
      document.querySelector(".skill__orderD_eighteen").innerHTML =
        championSkillCellD_eighteen;
      //column tooltips
      tippy(".tippyQ", {
        content: templateQ.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });
      tippy(".tippyE", {
        content: templateE.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });
      tippy(".tippyW", {
        content: templateW.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });
      tippy(".tippyR", {
        content: templateR.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });

      //row tooltips
      tippy(".firstrowtippy", {
        content: first_row_tip.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });
      tippy(".secondrowtippy", {
        content: second_row_tip.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });
      tippy(".thirdrowtippy", {
        content: third_row_tip.innerHTML,
        allowHTML: true,
        theme: "tomato",
      });
    } else if (response.status === 404) {
      // document.getElementById("loader").innerHTML = response.statusText;
      // console.log("no data found");
    } else if (response.status === 401 || 403) {
      // console.log("Client not permitted to access requested resources");
    } else {
      // console.log("An unknown error occured");
    }
  } catch (error) {
    // console.log(error);
  }
}

getSkillOrders();
