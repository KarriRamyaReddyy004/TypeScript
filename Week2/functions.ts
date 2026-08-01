//Program to demonstrate functions, parameters,return types
//1
function add(a: number, b: number): number {
    return a + b;
}
let result = add(10, 20);
console.log("Sum =", result);
//2
function square(num: number): number {
    return num * num;
}
let ans = square(6);
console.log("Square =", ans);
//3
function greet(name: string): string {
    return "Hello, " + name + "!";
}
let message = greet("Hema");
console.log(message);
