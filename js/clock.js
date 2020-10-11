

// 바닐라 자바스크립트로 개발할 때 써주기
'use strict';

// 변수는 전역변수보다 블록 스코프 안에 쓰는 게 좋음
// hoisting 은 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 의미합니다.
// hoisting 은 끌어올려주다 라는 뜻임

//var은 변수선언을 block scope에 해두어도 어디에서나 뜸 (그래서 쓰지 마..)

// constants immutable data -- 보안상의 이유, 동시의 값을 변경할 수 없음의 안정성, 실수를 방지할 수 있음
// 이러한 이유로 const 를 사용해서 개발하는 것을 권장 mutable data는 let 사용

// null empty 값
// undefinded 값이 들었는지 안 들었는지 모름
// symbol 고유한 식별자를 만들 때 사용 -- 유용하게 사용 가능 .description 을 사용하여 문자열로 바꿔서 사용해야함


const count = 14;
console.log(`value: ${count}, type: ${typeof count}`);





const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10  ? `0${seconds}` : seconds}`;

}

function init() {
  getTime();
  setInterval(getTime,1000);
}

init();