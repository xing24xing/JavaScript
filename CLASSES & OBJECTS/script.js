// const student = {
// 	fullname : "xing-xing",
// 	marks : 94.5,
// 	printmarks : function(){
// 		console.log("Marks = ",this.marks);
// 	}
// };

// const employee ={
// 	caltax()
// 	{
// 		console.log("Tax Rate Is 10 %");
// 	},
// 	// caltax2 : function () {
// 	// 	// body...
// 	// 	console.log("Tax Rate Is 5%");
// 	// }
// }

// const xingxing = {
// 	salary : 50000,
// 	caltax(){
// 		console.log("Tax Rate Is 20%");
// 	},
// }

// xingxing.__proto__ = employee;

// class ToyotaCar{
// 	constructor(brand,mileage)
// 	{
// 		console.log("Creating New Object");
// 		this.brand =brand;
// 		this.mileage = mileage;
// 	}
// 	start(){
// 		console.log("Start");
// 	}
// 	stop()
// 	{
// 		console.log("Stop");
// 	 }
// 	// setBrand(brand)
// 	// {
// 	// 	this.brand = brand;
// 	// }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner)
// let tesla = new ToyotaCar("Tesla",20);
// console.log(tesla)
// // fortuner.setBrand("fortuner");

// Inheritance
// class Parent{
// 	constructor()
// 	{
// 		this.species = "Homo Sapiens";

// 	}
// 	hello()
// 	{
// 		console.log("Hello");
// 	}
// }
// class Child extends Parent{
// }

// let child = new Child();

class Person{
	constructor(name)
	{
		// console.log("Enter Parent Constructor")
		this.species = "Homo Sapiens";
		this.name = name;

    }
	
	eat()
	{
     console.log("Eat");
	}
	// sleep()
	// {
	// 	console.log("Sleep");
	// }
}
class Engineer extends Person{
	constructor(name)
	{
		// console.log("Enter Child Constructor")
		super(name);//To Envoke Parent Class Constructor
		// this.branch = branch;
		// console.log("Exit Child Constructor")
	}
	 work()
	 {
	 	super.eat();
	 	console.log("Solve Problems,Build Something");
	 }
      
}
let eng = new Engineer("Khushii");
// let eng = new Engineer("Software Engineer");

// Super KeyWord

