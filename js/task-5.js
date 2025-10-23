function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", Foo );

function Foo(event){
  const backgroundcolor = document.querySelector(".color");
  
  const color = getRandomHexColor();
  console.log(color);

  backgroundcolor.textContent = color;
  
  document.body.style.backgroundColor = color;
}
