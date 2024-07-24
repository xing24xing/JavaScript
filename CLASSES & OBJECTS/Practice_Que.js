let data = "Secret Information";
class User{
	constructor(name,email)
	{
      this.name = name;
      this.email = email;
	}
	viewData()
	{
		console.log("Website Data",data);
	}
}
class Admin extends User{
	constructor(name,email)
	{
      super(name,email);
	}
	editData()
	{
		data = "Some New Value";
	}
}
let std1 = new User("Khushi","Khushi@gmail.com");

let std2 = new User("Xing-Xing","Xing-Xing@gmail.com");

let adm = new Admin("Admin","Admin@gmail.com");