// DOM Manipulation
// Get The Attribute Value
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))

// // Set The Attribute Value

// let p = document.querySelector("p")
// console.log(p.setAttribute("class","newclass"))

// let d = document.querySelector('div')
// // d.style.backgroundColor="green"
// d.style.fontSize="30px";
// d.innerText="China"
// d.style.visibility="hidden"


// insert Elements

// let newbtn = document.createElement("button")
// newbtn.innerText="click me"
// console.log(newbtn)
// let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);
// let p = document.querySelector("p")
// p.after(newbtn);

let newheading = document.createElement("h1");
newheading.innerHTML="<i>My Name Is Xing</i>";
document.querySelector('body').prepend(newheading);

// let para = document.querySelector("p");
// para.remove();
