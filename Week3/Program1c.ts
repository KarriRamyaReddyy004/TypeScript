class Book {
    title: string;
    author: string;
    price: number;
    pages: number;

    constructor(title: string, author: string, price?: number, pages?: number) {
        this.title = title;
        this.author = author;
        this.price = price ?? 500;
        this.pages = pages ?? 200;
    }
    displayDetails() {
        console.log("Book Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
        console.log("Pages:", this.pages);
    }
    applyDiscount(discount: number) {
        this.price = this.price - discount;
        console.log("Price after Discount:", this.price);
    }
    bookCategory() {
        if (this.pages > 300)
            console.log("Category: Large Book");
        else
            console.log("Category: Regular Book");
    }
}
let b1 = new Book("Java", "James");
let b2 = new Book("Python", "Guido", 750, 350);
b1.displayDetails();
b1.bookCategory();
b2.displayDetails();
b2.applyDiscount(100);
b2.bookCategory();