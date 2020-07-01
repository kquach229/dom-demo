// Log document object to console
// console.log(document);

// Get element with  id of "book-list" and log to console
// let bookList = document.getElementById("book-list");
// console.log(bookList)

// Get back all elements that have a class of "title" and logs onto console
// let titles = document.getElementsByClassName("title");
// console.log(titles);

// From the elements returned that have a class of title, extract the one that has an index of 1
// let titles = document.getElementsByClassName("title");
// console.log(titles[1]);

// Get all elements with a tagname of li
// let li = document.getElementsByTagName("li");
// console.log(li);

// From the collection of li's, extract the li with an index of 2
// let li = document.getElementsByTagName("li");
// console.log(li[2]);

// Using forLoop, extract and iterate  through the elements that have a class of title
// let titles = document.getElementsByClassName("title");
// for(let i = 0; i < titles.length; i++){
//     console.log(titles[i]);
// }

// Using Array.from to turn HTML Collection into an array. Then iterate with a forEach method
// let titles = document.getElementsByClassName("title");
// Array.from(titles).forEach(title=> {
//     console.log(title)
// });

// Another example of Array.from, which turns a string into an array
// let letters = "12345678";
// const result = Array.from(letters);
// console.log(result);

// Get the element with an id of wrapper using querySelector
// var wrapper = document.querySelector("#wrapper");
// console.log(wrapper);

// Using querySelector, grab the name of the list item within the book-list id that is the third child
// const kafka = document.querySelector("#book-list li:nth-child(3) .name");
// console.log(kafka)

// Grab every book name within the element with an id of book-list
// const allSpanTags = document.querySelectorAll("#book-list li .name");
// console.log(allSpanTags);

// Get all book names using querySelectorAll,  and iterate  each to the console
// let allBookNames = document.querySelectorAll("#book-list li .name");
// let iterateBooks = Array.from(allBookNames).forEach(book=> {
//     console.log(book.textContent)
// })

// Using querySelectorAll, grab and change the text content of the book names (textContent)
// let allBookNames = document.querySelectorAll("#book-list li .name");
// let iterateBooks = allBookNames.forEach(book=> {
//     book.textContent = "test"
// })

// Using querySelectorAll, grab books amd append to the name. (textContent)
// let allBookNames =  document.querySelectorAll("#book-list li .name");
// let iterateBooks = allBookNames.forEach(book=> {
//     book.textContent += "(book title)"
// })

// Using querySelectorAll, grab and replace the html content
// let allBookNames = document.querySelectorAll("#book-list li .name");
// let iterateBooks = allBookNames.forEach(book=> {
//     book.innerHTML = "<h1>Hello</h1>"
// })

// Grab the element with an id of "book-list" and replace the html content
// let bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h1>Replacement Content</h1>";

// Grab the element with an id of "book-list". Change the HTML and append to it
// let bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h1>Replacement Content</h1>";
// bookList.innerHTML += "<p>This is how you append HTML</p>";

// Get the node type
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner node type is: ",banner.nodeType )

// Get the node name
// const deleteButton = document.querySelector(".delete");
// console.log(".delete node name is: ",deleteButton.nodeName );

// Grab and check whether or not there are child nodes in the element with id of "book-list"
// const bookList = document.querySelector("#book-list");
// console.log("#book-list has child nodes: ", bookList.hasChildNodes());

// Grab element with an id of "book-list" and clone it into a new variable
// const bookList = document.querySelector("#book-list");
// clonedBookList = bookList.cloneNode(true);
// console.log(clonedBookList);

// Important Notes //
/*
    1. Everything in the dom is made up of nodes
    2. Many types of nodes. Element Nodes, Text Nodes, Attribute Nodes, Comments
*/

// Get the parent nodes of the element with an id of "page-banner"
// parentNode/parentElement do the same
// let banner = document.querySelector("#page-banner");
// console.log("The parent nodes of #page-banner is ", banner.parentNode.parentNode.parentNode);

// Get the parent node of the element with an id of "page-banner"
// let banner = document.querySelector("#page-banner");
// console.log("The parent node of #page-banner is ", banner.children)

// Get the next elementSibling
// let bookList = document.querySelector("#book-list");
// console.log("book-list next sibling is ", bookList.nextElementSibling);

// Get previousElementSibling
// let bookList = document.querySelector("#book-list");
// console.log("book-list next sibling is ", bookList.previousElementSibling);

/* Event Listeners */

// Add an event to log the event object when the  h2 inside the book-list id is clicked
// var h2 = document.querySelector("#book-list h2");
// h2.addEventListener("click", function(e) {
//     console.log(e.target);
//     console.log(e)
// });

// Add an event listener to remove items
// var btns = document.querySelectorAll("#book-list .delete");
// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const li = e.target.parentElement;
//         console.log(li)
//         li.parentElement.removeChild(li)

//     })
// })

// Log the input using submit listener
// console.log(document.forms)
// const addForm = document.forms[1];
// addForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     console.log(value)
// })

// Change the color of texr for the last child
// const lastChild = document.querySelector("li:last-child");
// lastChild.style.color = "blue";

// Replace a class name to the last child
// const lastChild = document.querySelector("li:last-child");
// lastChild.className = "newClassName";
// console.log(lastChild);

// Get attribute of the first book name
// const book1 = document.querySelector("li:first-child .name");
// console.log(book1.getAttribute("class"));

// Set attribute of last child
// const lastChild = document.querySelector("li:last-child .delete");
// lastChild.setAttribute("class", 'deleter');
// console.log(lastChild);

// Check whether or not attribute exists in element
// const lastChild = document.querySelector("li:last-child .delete");
// check = lastChild.hasAttribute("class");
// console.log(check);

// Remove the class attribute from the element
// const lastChild = document.querySelector("li:last-child .delete");
// lastChild.removeAttribute("class");
// console.log(lastChild);

// Hide and unhide the list 
// const  list = document.querySelector("#book-list ul")
// const hideBox = document.querySelector("#hide");
// hideBox.addEventListener("change", function(e) {
//     if(hideBox.checked) {
//         list.style.display = "none"
//     }  else {
//         list.style.display = "initial"
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    const  list = document.querySelector("#book-list ul")
    const hideBox = document.querySelector("#hide");
    hideBox.addEventListener("change", function(e) {
        if(hideBox.checked) {
            list.style.display = "none"
        }  else {
            list.style.display = "initial"
        }
})
})