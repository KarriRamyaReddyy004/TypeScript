class Employee2 {
    empName: string;
    password: string;
    constructor(name: string, password: string) {
        this.empName = name;
        this.password = password;
    }
    login(pass: string) {
        if (pass === this.password)
            console.log("Login Successful");
        else
            console.log("Invalid Password");
    }
    display() {
        console.log("Employee:", this.empName);
    }
}
let e = new Employee2("Hema", "admin123");
e.display();
e.login("admin123");
