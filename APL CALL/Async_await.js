// async function hello()
// {
// 	console.log("hello");
// }

// function api()
// {
// 	return new Promise((resolve,reject)=>{
// 		setTimeout (()=>{console.log("Weather Data")

// 		resolve(200);
// 	},2000)
// 	});
// }
function getdata(dataId)
{
	return new Promise((resolve,reject) =>{
	setTimeout(() =>{
		console.log("Data",dataId);
		resolve("success");
		
	},1000);
 
})
};


// async function getweatherdata()
// {
// 	await api();//1st
// 	await api(); // 2nd
// 	await api(); //3rd
// }

// Async -await
// async function getALlData()
// {
// 	await getdata(1);
// 	await getdata(2);
// 	await getdata(3);
// 	await getdata(4);
// 	await getdata(6);
// 	await getdata(5);
// }
// IIFE : Immediately Invoked Function Expression

(async function ()
{
	await getdata(1);
	await getdata(2);
	await getdata(3);
	await getdata(4);
	await getdata(6);
	await getdata(5);
})();