// let h2=document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " From Xing-Xing"
let divs = document.querySelectorAll(".box");
console.log(divs)
divs[1].innerText ="Unique value";
for(let div of divs)
{
	console.log(div);
}