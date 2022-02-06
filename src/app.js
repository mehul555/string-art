console.log("send");
document.getElementById("mail").addEventListener("click", (event) => {
  event.preventDefault();

  window.open("mailto:mehultalaviya323@gmail.com");
});
let i = 0;
const bg = document.getElementById("container");
setInterval(function () {
  if (i == 0) {
    bg.style.backgroundImage = "url(img/background.jpg)";
    i++;
  } else if (i == 1) {
    bg.style.backgroundImage = "url(img/image01.jpg)";
    i++;
  } else if (i == 2) {
    bg.style.backgroundImage = "url(img/image02.jpg)";
    i++;
  } else if (i == 3) {
    bg.style.backgroundImage = "url(img/image03.jpg)";
    i = 0;
  }
}, 3000);
