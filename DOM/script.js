// console.log("Hello");
// alert("Welcome");
// window.console.log("Hello");
// window object represents an open window in a browser .it is browser's object (not javascripts)
// & is automatically created by browser.
// it is a global with lots of properties & method

// DOM (Document Object Model)

// when a web page is loaded ,the browser creates a DOM of page
// console.dir(document.body);
// console.log(document.body);

// console.dir(document.body.childNodes[2]);
// document.body.childNodes[2].innerText = " my name is xing-xing ";

// console.dir(document.body);
// let heading=document.getElementById('heading');//h1
// console.dir(heading);
// let headclass=document.getElementsByClassName('classhead');
// console.dir(headclass)
// console.log(headclass)

// let button=document.getElementById('myid');
// console.log(button)


// let paras=document.getElementsByTagName('p');
// console.log(paras);


//Query Selector
// let elements = document.querySelector('p'); //1st element
// // console.dir(elements);


// let Allelements = document.querySelectorAll('p'); //All element
// // console.dir(Allelements);

// let firstclass = document.querySelector('.classhead')
// console.dir(firstclass);

// let Allclass = document.querySelectorAll('.classhead'); 
// console.dir(Allclass);

// DOM manipulation

/*
1.tagName: Returns tag
2.innerText: returns the text content of the element and all its children
3.innerHTML : returns the plain text or HTML contents in the element
4.textContent: returns textual content even for hidden elements
*/

// console.dir(document.body.firstChild);
let div=document.querySelector("div");
console.dir(div);
let heading=document.querySelector('h1');