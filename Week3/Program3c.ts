class Bank {
    static bankName = "State Bank";
    accountNumber: number;
    customerName: string;
    balance: number;
    constructor(accNo: number, name: string, balance: number) {
        this.accountNumber = accNo;
        this.customerName = name;
        this.balance = balance;
    }
    deposit(amount: number) {
        this.balance += amount;
    }
    display() {
        console.log("Bank:", Bank.bankName);
        console.log("Account No:", this.accountNumber);
        console.log("Customer:", this.customerName);
        console.log("Balance:", this.balance);
    }
}
let b = new Bank(12345, "Hema", 10000);
b.deposit(3000);
b.display();
