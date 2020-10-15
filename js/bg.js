const body = document.querySelector("body");
const ul = body.querySelector("ul");

const IMG_NUMBER = 5;

function paintIMG(imgNumber) {
  const image = new Image();
  const bg = [`https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`,
  `https://images.unsplash.com/photo-1591571108017-8336803bdc77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80`,
  `https://images.unsplash.com/photo-1574212379864-a593ba7019e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`,
  `https://images.unsplash.com/photo-1601738080815-41dfec859f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`];
  
  image.src = `${bg[imgNumber]}`;
  // `images/${imgNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add("bgImage");
  console.log(imgNumber);
}

function genRandom() {
  const number = Math.floor(Math.random() * 4);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintIMG(randomNumber);
}

init();