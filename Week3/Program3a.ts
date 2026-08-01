class College {
    static collegeName = "SVECW";
    rollNo: number;
    studentName: string;
    constructor(roll: number, name: string) {
        this.rollNo = roll;
        this.studentName = name;
    }
    display() {
        console.log("College:", College.collegeName);
        console.log("Roll No:", this.rollNo);
        console.log("Student:", this.studentName);
    }
}
let s = new College(4556, "Hema");
s.display();
