// for(let i=0;i<5;i++)
// {
// 	if(i==3){
// 		break;
// 	}
// 	console.log("Khushi")
// }

//Use For String And Array
// let str="xing-xing";
// for(let val of str)
// {
// 	console.log("val:- ",val);
// // }

// let stu = {
// 	name:"xing-xing",
// 	age:20,
// 	cgpa:9.5,
// 	ispass:true,
// };
// for(let key in stu)
// {
// 	console.log("key:- ",key, "value:- ",stu[key]);
// }

let game_no=30;
let user_no=prompt("Guess The Game No.:- ");

while(game_no!=user_no)
{
let user_no=prompt("You Guess Wrong No. Guess Again !:- ");
}
console.log("Bravo!,You Guess The Right No.");