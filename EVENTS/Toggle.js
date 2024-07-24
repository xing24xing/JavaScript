let modebtn = document.querySelector('#mode');
let body = document.querySelector('body');
let curmode = "light";

modebtn.addEventListener("click",() =>{
// console.log("you are trying to change")
if(curmode == "light")
{
	curmode = "dark";
	// document.querySelector('body').style.backgroundColor = "black";
	body.classList.add("dark");
	body.classList.remove("light");
}
else
{
	curmode = "light";
	// document.querySelector('body').style.backgroundColor = "white";
	body.classList.add("light")
	body.classList.remove("dark");
}
console.log(curmode)
})
