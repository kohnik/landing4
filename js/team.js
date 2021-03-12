let logo = [
  "team_logo_facebook.png",
  "team_logo_twitter.png",
  "team_logo_net.png",
  "team_logo_mail.png",
];
let href = [
  "https://www.facebook.com/",
  "https://twitter.com/?lang=ru",
  "www.designagency.net",
  "mailto:info@designagency.net",
];

// function fadeIn(el, speed) {
//   var step = 1 / speed;
//   var interval = setInterval(function() {
//     if (+el.style.opacity >= 1)
//       clearInterval(interval);

//     el.style.opacity = +div.style.opacity + step;
//   }, speed / 1000);
// }

createTeamImage();

function createTeamImage() {
  fetch("js/teamImage.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let team__content = document.querySelector(".team__content");
      let numImage = 0;

      for (let j = 0; j < 6; j++) {
        let team__col = ce("div", null, "team__col");
        team__content.append(team__col);
        let team__img = ce("img", null, "team__img");
        team__img.src = `./img/team/${data[numImage].name}.png`;
        team__col.append(team__img);
        createTeamCard(team__col, numImage, data);
        numImage++;
      }
    });
}
function createTeamCard(elem, id, data) {
  let team__card = ce("div", null, "team__card");
  elem.append(team__card);

  let team__cardContent = ce("div", null, "team__cardContent");
  team__card.append(team__cardContent);

  let team__shape = ce("img", null, "team__shape");
  team__shape.src = "./img/team/team_shape.png";
  team__cardContent.append(team__shape);

  let team__cardHeader = ce("div", null, "team__cardHeader");
  team__cardContent.append(team__cardHeader);

  let team__Cardtitle = ce("span", `${data[id].title}`, "team__Cardtitle");
  team__cardHeader.append(team__Cardtitle);

  let team__CardSpecialty = ce(
    "span",
    `${data[id].specialty}`,
    "team__CardSpecialty"
  );
  team__cardHeader.append(team__CardSpecialty);

  let team__mainText = ce("p", `${data[id].text}`, "team__mainText");
  team__cardContent.append(team__mainText);

  let team__nav = ce("nav", null, "team__navLogo");
  team__cardContent.append(team__nav);

  for (f = 0; f < 4; f++) {
    let team__logoContainer = ce("a", null, "team__logoContainer");
    team__nav.append(team__logoContainer);
    let team__logo = ce("img", null, "team__logo");
    team__logo.src = `./img/team/${logo[f]}`;
    team__logoContainer.href = `${href[f]}`;
    team__logoContainer.append(team__logo);
  }

  // elem.onmouseover = function (event) {
  //   if (
  //     event.target.className == "team__img" ||
  //     event.target.className == "team__card" ||
  //     event.target.className == "team__cardContent" 
  //   ) {
      
  //     if( event.target.className == "team__cardContent" )
  //     {
  //       console.log(event.target)
  //       event.target.parentElement.parentElement.children[1].style.visibility = "visible";
  //     }else
  //     {
  //       console.log(event.target)
  //       event.target.parentElement.children[1].style.visibility = "visible";
  //     }
      
      
  //     let interval = setInterval(function () {
  //       if (+team__card.style.opacity >= 1) clearInterval(interval);

  //       team__card.style.opacity = +team__card.style.opacity + 1 / 80;
  //     }, 1);
  //     team__card.style.opacity = "0";
     
  //   }
  // };
  // elem.onmouseout = function (event) {
  //   if (
  //     event.target.className == "team__img" ||
  //     event.target.className == "team__card"
  //   ) {
  //     event.target.parentElement.children[1].style.visibility = "hidden";
  //   }
  // };
}

function ce(name = "div", text, className, event, fn) {
  let elem = document.createElement(name);
  text != undefined ? (elem.innerHTML = text) : null;
  className != undefined && className != null
    ? (elem.className = className)
    : null;
  event != undefined ? elem.addEventListener(event, fn) : null;
  return elem;
}
