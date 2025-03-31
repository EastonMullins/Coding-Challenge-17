//Task 1 - Create a Customer Class

class Customer {
    constructor(name, email) {
     this.name = name;
     this.email = email;
     this.purchaseHistory = [];
     console.log(`New customer created: ${this.name}`);
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`${this.name} made a $${amount} purchase.`);
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}
//test customer
const customer1 = new Customer("Bruce Wayne", "thedarkknight@gmail.com");
customer1.addPurchase(500);
customer1.addPurchase(250);
console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);

