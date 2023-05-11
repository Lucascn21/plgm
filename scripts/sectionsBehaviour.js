import { TOASTMSGS } from "./constants.js";

//This module handles the sidebar highlighting and toasts popup while scrolling sections.

//Sidebar Nav highlighting
let sectionsOffsets = {};
let sidebarElementsRight = Array.from(
  document.getElementsByClassName("sidebarElementRight")
);

//Storing the sections offsets in an array
let landing = document.getElementById("landing");
sectionsOffsets["landing"] = landing.offsetTop;

let sections = document.querySelectorAll("section");
sections.forEach((section) => {
  //I only need the main sections which are the only ones that have an ID
  if (section.id) sectionsOffsets[section.id] = section.offsetTop;
});

let matchingSection = "";
//return the closest Y offset in my array 	that matches the current scrollY position
const findMatchingSection = (sectionsOffsets, currentSection) => {
  sectionsOffsets.reduce((a, b) => {
    matchingSection =
      Math.abs(b[1] - currentSection) < Math.abs(a[1] - currentSection) ? b : a;
    return matchingSection;
  });

  //If the current section matches or not an element on the right, add or remove the nav's highlight
  sidebarElementsRight.forEach((rightSidebarElement) => {
    if (rightSidebarElement.innerText.toLowerCase() === matchingSection[0]) {
      rightSidebarElement.classList.add("highlightCurrent");
    } else {
      rightSidebarElement.classList.remove("highlightCurrent");
    }
  });
  //Show the section's corresponding Toast
  showToast(matchingSection[0]);
};

//Find the current-on-view section, highlight it in the navbar and show its toast
window.addEventListener("scroll", () => {
  findMatchingSection(Object.entries(sectionsOffsets), scrollY);
});

//Bootstrap Toast
let toastElList = [].slice.call(document.querySelectorAll(".toast"));

let toastList = toastElList.map(function (toastEl) {
  let option = {
    animation: true,
    autohide: false,
  };
  return new bootstrap.Toast(toastEl, option);
});

let toastText = document.getElementById("toastText");
let isToastHidden =
  document.getElementById("toastText").classList[1] == "hidden" ? true : false;
const showToast = (currentSection) => {
  if (toastText.innerHTML != TOASTMSGS[currentSection] && !isToastHidden) {
    toastText.innerHTML = TOASTMSGS[currentSection];
    toastList[0].show();
  }
};
