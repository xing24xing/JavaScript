// function hello() {
// 	// body...
// 	console.log("Hello 1");
// }
// console.log("one");
// // hello();
// setTimeout(hello,4000);
// console.log("Two");
// setTimeout(() =>{
// 	console.log("Hello 2")
// },2000)
// console.log("Three");

// function sum(a,b)
// {
// console.log(a+b);
// }
// function cal(a,b,sumcal)
// {
//   sumcal(a,b);
// }
// cal(1,2,sum)

function getdata(dataId,getnextData)
{
	setTimeout(() =>{
		console.log("Data",dataId);
		if(getnextData)
		{
		getnextData();
	}
	},2000);
 
}
function getdata(dataId,getnextData)
{
	return new Promise((resolve,reject)=>{
	setTimeout(() =>{
		console.log("Data",dataId);
		resolve("Success");
		if(getnextData)
		{
		getnextData();
	}
	},2000)});
}


// promise chain
// let p1 = getdata(1);
// p1.then((res) =>{
// 	console.log(res);
// })

getdata(1).then((res) =>{
	return getdata(2);
})
.then((res) =>{
	console.log(res);
})

// getdata(2,() =>{
// 	getdata(5);



// });
// getdata(5);
// getdata(7);
