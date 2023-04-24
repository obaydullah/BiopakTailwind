$(document).ready(function () {
  $(".category-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    loop: true,
    dots: false,
    prevArrow:
      '<iconify-icon class="absolute top-[50%] transform translate-y-[-50%] -left-3 z-50 cursor-pointer bg-primary_light_dark text-white h-10 w-10 rounded-full flex justify-center items-center text-xl duration-200 hover:bg-primary" icon="ic:sharp-keyboard-arrow-left"></iconify-icon>',
    nextArrow:
      '<iconify-icon class="absolute top-[50%] transform translate-y-[-50%] z-50 cursor-pointer bg-primary_light_dark text-white h-10 w-10 rounded-full flex justify-center items-center text-xl duration-200 hover:bg-primary" icon="ic:sharp-keyboard-arrow-right" style="right: -12px"></iconify-icon> ',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 8 } },
      { breakpoint: 992, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 576, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 414, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  });

  $(".image-slider").slick({
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    loop: true,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 576, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 414, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  });

  $(".partner-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    loop: true,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 414, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  });
});

// footer accordion
function toggleAccordion(id) {
  let accordion = document.getElementById(id);
  let accordionBody = accordion.querySelector(".accordion-body");

  if (accordionBody.style.maxHeight) {
    accordionBody.style.maxHeight = null;
    accordionBody.style.marginTop = "0px";
  } else {
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    accordionBody.style.marginTop = "10px";
  }
}

//menu open

let mobileMenu = document.getElementById("mobile_menu");
let overlay = document.getElementById("overlay");
let menuCloseIcon = document.getElementById("menu_close_icon");

function menuOpen() {
  mobileMenu.style.transform = "translateX(0%)";
  overlay.style.display = "block";
  menuCloseIcon.style.display = "block";
}
// menu close
function menuClose() {
  mobileMenu.style.transform = "translateX(-100%)";
  overlay.style.display = "none";
  menuCloseIcon.style.display = "none";
}

let isOpen = false;
function toggleDropdown(event) {
  const listHead = event.currentTarget.querySelector(".list_head");
  const ul = event.currentTarget.querySelector("ul");
  listHead.classList.toggle("list_class");
  ul.classList.toggle("dropdown-show");

  const currentItem = event.currentTarget;
  const headerMenuOne = currentItem.querySelector(
    ".list_head .header_menu_one"
  );
  const headerMenuTwo = currentItem.querySelector(
    ".list_head .header_menu_two"
  );
  const headerMenuThree = currentItem.querySelector(
    ".list_head .header_menu_three"
  );

  if (isOpen) {
    headerMenuOne.style.order = 1;
    headerMenuTwo.style.order = 2;
    headerMenuThree.style.order = 3;
    headerMenuThree.style.display = "none";
  } else {
    headerMenuOne.style.order = 2;
    headerMenuTwo.style.order = 1;
    headerMenuThree.style.order = 3;
    headerMenuThree.style.display = "block";
  }

  isOpen = !isOpen;

  const clickedElement = event.currentTarget;
  const allListElements = document.querySelectorAll(".listElem");

  allListElements.forEach((el) => {
    if (el !== clickedElement) {
      el.classList.add("hidden");
    }
  });
}
