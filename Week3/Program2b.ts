class Student2 {
    name: string;
    marks: number;
    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }
}
class Result extends Student2 {
    display() {
        console.log("Student:", this.name);
        console.log("Marks:", this.marks);
        if (this.marks >= 35)
            console.log("Result: Pass");
        else
            console.log("Result: Fail");
    }
}
let r = new Result("Hema", 82);
r.display();
