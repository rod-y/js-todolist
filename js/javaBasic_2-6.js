// javaBasic_2-6.js

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

/* toggle 은 만약 클래스가 없으면 add 아니면 remove 해줌 */

/* 
    function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
      title.classList.add(CLICKED_CLASS);
    } else {
      title.classList.remove(CLICKED_CLASS);
    }
  }

  ! handle 앞에 붙은 느낌표는 반대의 의미 
   결과값이 true 가 나오면, ! 때문에 false가 됨
*/

function init() {
  title.addEventListener("click",handleClick);
}

init();

 

/***********

ver.01

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#00ff66";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }

}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter",handleClick);
}

init();

***********/



// function handdleOffline(params) {
//   console.log("lalala");
// }
// function handdleOnline(params) {
//   console.log("welcome Back");
// }

// window.addEventListener("offline", handdleOffline);
// window.addEventListener("online", handdleOnline);

/* 네트워크 감지하는 기능, offline / online 일때를 감지할 수 있음 */


