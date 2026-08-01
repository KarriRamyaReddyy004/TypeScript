class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.accountHolder = name;
        this.balance = balance;
    }
    deposit(amount: number) {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
let acc = new BankAccount("Hema", 5000);
console.log("Account Holder:", acc.accountHolder);
acc.deposit(2000);
acc.showBalance();
