// main.js
window.addEventListener("load", () => {
  /* 큰 배너 */
  const btnNext = document.querySelector(".banner_arrow>a.next");
  const btnPrev = document.querySelector(".banner_arrow>a.prev");
  const slide = document.querySelectorAll("div.slide");
  const slideRoll = document.querySelectorAll("div.banner_rolling>ul>li");
  const btnStop = document.querySelector("div.banner_rolling>p>a:first-of-type");
  const btnPlay = document.querySelector("div.banner_rolling>p>a:last-of-type");

  let bnnNum = 0;
  let lastNum = slide.length-1;

  // next 버튼
  btnNext.addEventListener("click", e => {
    e.preventDefault();
    bnnNum++;
    if (bnnNum>lastNum) {
      bnnNum = 0;
    }
    activation(bnnNum, slide);
    activation(bnnNum, slideRoll);
  });

  // prev 버튼
  btnPrev.addEventListener("click", e => {
    e.preventDefault();
    bnnNum--;
    if (bnnNum<0) {
      bnnNum = lastNum;
    }
    activation(bnnNum, slide);
    activation(bnnNum, slideRoll);
  });

  // 오토배너
  function autoBanner(){
    bnnNum++;
    if (bnnNum>lastNum) {
      bnnNum = 0;
    }
    activation(bnnNum, slide);
    activation(bnnNum, slideRoll);

    autoBnn = setTimeout(autoBanner, 5000); // 재귀함수
  }
  let autoBnn = setTimeout(autoBanner, 5000); // 5초마다 next 버튼 누른 것과 같은 기능, 최초호출

  // 배너 재생 멈춤 버튼
  let flag = true;

  btnStop.addEventListener("click", e => {
    e.preventDefault();
    if (flag === true) {
      btnStop.classList.remove("on");
      btnPlay.classList.add("on");
      clearTimeout(autoBnn);
      flag = false;
    }
  });
  btnPlay.addEventListener("click", e => {
    e.preventDefault();
    if (flag === false) {
      btnStop.classList.add("on");
      btnPlay.classList.remove("on");
      autoBnn = setTimeout(autoBanner, 5000);
      flag = true;
    }
  });

  // 롤링 버튼 클릭
  for (let i = 0; i < slideRoll.length; i++) {
    slideRoll[i].addEventListener("click", e => {
      e.preventDefault();
      activation(i, slide);
      activation(i, slideRoll);
    });
  }

  function activation(index, list) {
    for(let el of list){
      el.classList.remove("on", "active");
    }
    list[index].classList.add("on", "active");
  };


  /* 작은 배너 */
  const btnNext2 = document.querySelector(".banner_arrow_white>a.next");
  const btnPrev2 = document.querySelector(".banner_arrow_white>a.prev");
  const slide2 = document.querySelectorAll("div.slides");
  const slideRoll2 = document.querySelectorAll("div.banner_rolling_white>ul>li");
  const btnStop2 = document.querySelector("div.banner_rolling_white>p>a:first-of-type");
  const btnPlay2 = document.querySelector("div.banner_rolling_white>p>a:last-of-type");

  let bnnNum2 = 0;
  let lastNum2 = slide2.length-1;

  // next 버튼
  btnNext2.addEventListener("click", e => {
    e.preventDefault();
    bnnNum2++;
    if (bnnNum2>lastNum2) {
      bnnNum2 = 0;
    }
    activation(bnnNum2, slide2);
    activation(bnnNum2, slideRoll2);
  });

  // prev 버튼
  btnPrev2.addEventListener("click", e => {
    e.preventDefault();
    bnnNum2--;
    if (bnnNum2<0) {
      bnnNum2 = lastNum2;
    }
    activation(bnnNum2, slide2);
    activation(bnnNum2, slideRoll2);
  });

  // 오토배너
  function autoBanner2(){
    bnnNum2++;
    if (bnnNum2>lastNum2) {
      bnnNum2 = 0;
    }
    activation(bnnNum2, slide2);
    activation(bnnNum2, slideRoll2);

    autoBnn2 = setTimeout(autoBanner2, 5000); // 재귀함수
  }
  let autoBnn2 = setTimeout(autoBanner2, 5000); // 5초마다 next 버튼 누른 것과 같은 기능, 최초호출

  // 배너 재생 멈춤 버튼
  let flag2 = true;

  btnStop2.addEventListener("click", e => {
    e.preventDefault();
    if (flag2 === true) {
      btnStop2.classList.remove("on");
      btnPlay2.classList.add("on");
      clearTimeout(autoBnn2);
      flag2 = false;
    }
  });
  btnPlay2.addEventListener("click", e => {
    e.preventDefault();
    if (flag2 === false) {
      btnStop2.classList.add("on");
      btnPlay2.classList.remove("on");
      autoBnn2 = setTimeout(autoBanner2, 5000);
      flag2 = true;
    }
  });

  // 롤링 버튼 클릭
  for (let i = 0; i < slideRoll2.length; i++) {
    slideRoll2[i].addEventListener("click", e => {
      e.preventDefault();
      activation(i, slide2);
      activation(i, slideRoll2);
    });
  }

  function activation(index, list) {
    for(let el of list){
      el.classList.remove("on", "active");
    }
    list[index].classList.add("on", "active");
  };
});