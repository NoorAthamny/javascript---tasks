const myLi = document.querySelector(".start-here");

myLi.textContent = "Main title";

const myLiNextSibling = myLi.nextElementSibling;

const myUl = myLiNextSibling.firstElementChild;

const newSubTitle = document.createElement("li");

const node = document.createTextNode("sub title 4");

newSubTitle.appendChild(node);
myUl.appendChild(newSubTitle);

const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

const head = document.querySelector("head");
const title = document.head.querySelector("title");
title.textContent = "DOM Master";

const div = myLiParent.nextElementSibling;
const p = div.firstElementChild;
p.textContent = "Now I know how to traverse the DOM :D";

//
