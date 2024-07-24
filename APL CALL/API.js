const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getfacts = async () =>{
console.log("Getting Data....");
let promise = await fetch(URL);
console.log(promise);
// console.log(promise.status);
let data = await promise.json();
// console.log(data[2].text);
factpara.innerText = data[0].text;
}
// function getfacts()
// {
// fetch(URL).then((response) =>{
//  return response.json();
// }).then((data) =>{
// 	console.log();
// 	factpara.innerText = data[0].text;
// })
// }
btn.addEventListener("click",getfacts);

// Topics 
// Request & Response
// HTTP Verbs
// Response status code
// HTTP Response headers also contains details about the response ,such as content type ,HTTP status code
