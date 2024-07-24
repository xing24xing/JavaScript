let btn = document.createElement('button')
btn.innerHTML="Click me!"

btn.style.backgroundColor="red";
btn.style.color="white";

document.querySelector('body').prepend(btn);


// que2
let para = document.querySelector('p')
 para.getAttribute("class")
para.classList.add("newclass");
