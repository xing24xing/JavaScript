function ascfuction()
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
          console.log("Data 1")
          resolve("Success");
		},4000)
	})
}
function ascfuction2()
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
          console.log("Data 2")
          resolve("Success");
		},5000)
	})
}
console.log("Fetching Data 1....")
ascfuction().then((res)=>{
	console.log(res);
	console.log("Fetching Data 2.....")
	ascfuction2().then((res)=>{
		console.log(res);
	})
})


// console.log("Fetching Data 1....")
// let p1 =ascfuction();
// p1.then((res)=>{
// 	console.log(res);
// 	console.log("Fetching Data 2.....")
// 	let p2 =ascfuction2();
// 	p2.then((res)=>{
// 		console.log(res);
// 	})
// })
// console.log("Fetching Data 2")
// let p2 =ascfuction2();
// p2.then((res)=>{
// 	console.log(res);
// })

// let promise =  new Promise((resolve,reject) =>{
// console.log("I am Promise");
// resolve(123);
// reject("Faild");
// })

// const getPromise=() =>{
//  return new Promise((resolve,reject) =>{
// console.log("I am Promise");
// resolve("Successfully");
// // reject("Faild");
// })
// }
// let promise = getPromise();
// promise.then((res) =>{
// 	console.log("Promise Fulfilled ",res)
// })
// promise.catch((err)=>{
// 	console.log("Rejected ",err)
// })



// function getdata(dataId,getnextData)
// {
// 	return new Promise((resolve,reject) =>{
// 	setTimeout(() =>{
// 		console.log("Data",dataId);
// 		resolve("success");
// 		if(getnextData)
// 		{
// 		getnextData();
// 	}
// 	},5000);
 
// })
// };





