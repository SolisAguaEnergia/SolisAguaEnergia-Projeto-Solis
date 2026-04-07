const carrossel = document.getElementById("carrossel");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

let cards = document.querySelectorAll("#carrossel .card");

// clonar primeiro e último
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

carrossel.appendChild(firstClone);
carrossel.insertBefore(lastClone, cards[0]);

cards = document.querySelectorAll("#carrossel .card");

let index = 1;

function getCardWidth() {
  return cards[0].offsetWidth + 20;
}

// posição inicial (já começa no "primeiro real")
carrossel.style.transform = `translateX(-${getCardWidth() * index}px)`;

// botão NEXT
btnNext.addEventListener("click", () => {
  index++;
  carrossel.style.transition = "transform 0.5s ease";
  carrossel.style.transform = `translateX(-${getCardWidth() * index}px)`;
});

// botão PREV
btnPrev.addEventListener("click", () => {
  index--;
  carrossel.style.transition = "transform 0.5s ease";
  carrossel.style.transform = `translateX(-${getCardWidth() * index}px)`;
});

// corrigir quando chega no clone
carrossel.addEventListener("transitionend", () => {
  if (cards[index].isEqualNode(firstClone)) {
    carrossel.style.transition = "none";
    index = 1;
    carrossel.style.transform = `translateX(-${getCardWidth() * index}px)`;
  }

  if (cards[index].isEqualNode(lastClone)) {
    carrossel.style.transition = "none";
    index = cards.length - 2;
    carrossel.style.transform = `translateX(-${getCardWidth() * index}px)`;
  }
});