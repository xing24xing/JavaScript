let btn1 = document.querySelector('#btn');


// btn1.onclick =(e) =>{
// console.log(e);
// }
// btn1.onclick = () => {
	// console.log("button was clicked");
	// let a=23;
	// let b=34;
	// console.log(23+34);
// }

// let div = document.querySelector('div')
// div.onmouseover = () =>{
// 	console.log("You Are Inside Div")
// }

btn1.addEventListener("click",()=>{
		console.log("button was clicked - Handler 1");
}
	)
btn1.addEventListener("click",()=>{
		console.log("button was clicked - Handler 2");
}
	)

btn1.addEventListener("click",()=>{
		console.log("button was clicked - Handler 4");
}
	)
const handler3 = ()=>{
		console.log("button was clicked - Handler 3");
}
btn1.addEventListener("click",handler3)

btn1.removeEventListener("click",handler3)

// Event Listeners
// node.addEventListener(event,callback)
// node.removeEventListner(event,callback)
// note the callback reference should be same to remove