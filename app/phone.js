// get all messages
const msgElement = document.getElementsByClassName("msg");
let Elo = document.querySelector(".chat_container");
// loop and add class [show] Then [Opacity:100%] in every element
for (let i = 0; msgElement.length > i; i++) {
  setTimeout(() => msgElement[i].classList.add("show"), 700 * i);

  setTimeout(() => {
    msgElement[i].classList.add("visable");
    // scroll down with message
    Elo.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  }, 750 * i);
}
