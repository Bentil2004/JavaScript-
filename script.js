// // const list1 = document.getElementById("list");

// // // list.textContent displays only the text content of the element. So it won't display HTML tags.
// // console.log(list1.textContent);

// // //list1.textContent = "Hello Eddie";

// // //The innerHTML attribute displays the whole HTML structure. So including the whole HTML structure
// // console.log(list1.innerHTML);

// // //list1.innerHTML = "<li>Hello Eddie</li>";

// // //Use a '.' when selecting a class attribute
// // //Using the querySelector you can select only one class attribute so within a list the 1st li attribute will be selected.
// // const list = document.querySelector(".list");
// // console.log(list);

// // //querySelectorAll will select all the li attributes
// // const listItems = document.querySelectorAll(".list li");
// // console.log(listItems);

// //DOM IN CSS
// const heading = document.getElementById("heading");
// // heading.style.color = "red";
// // heading.style.backgroundColor = "Yellow";
// heading.className = 'changeBG';
// heading.classList.add("changeCL");
// heading.classList.remove("changeCL");

// //NB:We use the querySelector property to get the list items
// const lis = document.querySelectorAll("li");

// for (let i = 0; i < lis.length; i++) {
//   lis[i].style.backgroundColor = "blue";
// }

// lis[0].style.cssText = "background-color:green;font-size:18px;font-weight:bold";

//Event handlers
// const heading = document.querySelector('.heading');
// const btn = document.querySelector('.btn');

// btn.onclick = () => {
//   console.log("Clicked!");
// };

// btn.onmouseover = () => {
//   heading.style.cssText = "background-color: brown; color: white";
// };

// btn.onmouseout = () => {
//   heading.style.cssText = "background-color: transparent; color: black";
// };

// const clickButton = () => {
//   console.log("Clicked!");
// };

// btn.addEventListener("click", e => {
//   heading.style.cssText = "background-color: brown; color: white";
// console.log(e.target);
// });

//DOM ATTRIBUTE
// const paragraph = document.querySelector(".paragraph");
// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.getAttribute("class"));

// paragraph.setAttribute('style','background-color: coral');

//DOM NAVIGATION
const listItem = document.getElementById("list-item");
console.log(listItem.parentNode);
console.log(listItem.parentElement);
console.log(listItem.parentNode.parentNode);

const list = document.querySelector(".list");
console.log(list.children);
console.log(list.children.length);
console.log(list.firstElementChild);


// console.log(listItem.nextElementSibling);

// const newEl = document.createElement("li");

// const text = document.createTextNode("Blog");

// newEl.appendChild(text);

// console.log(newEl);

// list.appendChild(newEl);

// list.insertBefore(newEl, list.children[1]);

// list.removeChild(newEl);

// console.log(list);
