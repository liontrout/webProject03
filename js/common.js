window.addEventListener("load", () => {
  // top 버튼
  const btnTop = document.querySelector(".btn_float");
  const btnUp = document.querySelector(".btn_float>a");
  const btnPlus = btnTop.querySelector(".btn_list>a");
  const btnPlusSpan = btnTop.querySelector(".btn_list>a>span");
  const btnList = btnTop.querySelector(".btn_list>ul");

  window.addEventListener("scroll", () => {
    let scroll = document.querySelector("html").scrollTop;
    if (scroll<=0) {
      btnTop.classList.remove("on");
    } else if (scroll>500) {
      btnTop.classList.add("on");
    }
  });

  btnUp.addEventListener("click", e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  btnPlus.addEventListener("click", e => {
    e.preventDefault();
    btnPlusSpan.classList.toggle("on");
    btnList.classList.toggle("on");
  });

  /* 주메뉴 */
  const gnbMenus = document.querySelectorAll(".gnb>ul>li");
  const headerWrap = document.querySelector(".header_wrap");
  const subGnbs = document.querySelectorAll(".gnb>ul>li>.sub_gnb");

  for(let gnbMenu of gnbMenus){
    gnbMenu.addEventListener("mouseover", e => {
      for(let subGnb of subGnbs){
        subGnb.classList.add("on");
        var ht = subGnb.offsetHeight;
        headerWrap.style.height = 81 + ht + "px";
      };
    });
    gnbMenu.addEventListener("mouseout", e => {
      for(let subGnb of subGnbs){
        subGnb.classList.remove("on");
        headerWrap.style.height = "81px";
      };
    });
  };

  /* 검색박스 */
  const srch = document.querySelector(".srch");
  const btnSrch = document.querySelector(".info>.srch_button");
  const btnSrchClose = document.querySelector(".srch_inner>span");

  btnSrch.addEventListener("click", e => {
    e.preventDefault();
    srch.classList.add("on");
  });

  btnSrchClose.addEventListener("click", e => {
    e.preventDefault();
    srch.classList.remove("on");
  });
});