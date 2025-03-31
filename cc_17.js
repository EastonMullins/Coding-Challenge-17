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

//Task 2 - Created Sales Rep Class

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
      super(name, email);
      this.vipLevel = vipLevel;
    }

    getTotalSpent() {
        const baseTotal = super.getTotalSpent();
        return baseTotal * 1.1;
    }
}

//Task 4 - Build a Client Report System

const customer2 = new VIPCustomer("Lebron James", "kingjames@gmail.com", "Platinum");
customer2.addPurchase(1000);
customer2.addPurchase(750);

const customer3 = new Customer ("Colby Mullins", "cdog@gmail.com");
customer3.addPurchase(250);
customer3.addPurchase(100);

const customer4 = new VIPCustomer("Tom Brady", "tb12@gmail.com", "Gold");
customer4.addPurchase(500);
customer4.addPurchase(700);

salesRep.addClient(customer2);
salesRep.addClient(customer3);
salesRep.addClient(customer4);

const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue}`);

const highSpenders = salesRep.clients.filter(client => client.getTotalSpent() > 500);
console.log("High Spenders:", highSpenders.map(client => `${client.name} ($${client.getTotalSpent()})`));

const customerSummary = salesRep.clients.map(client => ({
    name: client.name,
    totalSpent: client.getTotalSpent()
  }));
  console.log("Customer Summary:", customerSummary);