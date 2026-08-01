 //any
    let any1:any = 10;
    console.log(any1);
    let any2:any = "Hello";
    console.log(any2);
    let any3:any = true;
    console.log(any3);
    //unknown
    let unknown1:unknown = 10;
    console.log(unknown1);
    let unknown2:unknown = "Hello";
    console.log(unknown2);
    let unknown3:unknown = true;
    console.log(unknown3);
    //void
    function voidFunction():void{
        console.log("This is a void function");
    }
    voidFunction();

    function greet(): void {
    console.log("Welcome to TypeScript");
    }
    greet();
    function greeting(): void {
    console.log("Hello");
    }
    greeting();