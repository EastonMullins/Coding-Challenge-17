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

//Task 2 - Created SalesRep Class

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
        console.log(`New sales rep created: ${this.name}`);
    }
    addClient(customer) {
        this.clients.push(customer);
    }
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        if (client) {
            const totalSpent = client.getTotalSpent();
            return totalSpent;
        } else {
            return null;
        }
    }
}

const salesRep = new SalesRep("Mark Grayson");
salesRep.addClient(customer1);
console.log(`Sales Rep: ${salesRep.name}, Client: ${customer1.name}, Total Spent: $${salesRep.getClientTotal("Bruce Wayne")}`);

//Task 3 - Created VIP class

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];  
      this.vipLevel = vipLevel;
    }
    getTotalSpent() {
        const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        const bonus = totalSpent * 0.1;
        const totalWithBonus = totalSpent + bonus;
        return totalWithBonus
    }
}