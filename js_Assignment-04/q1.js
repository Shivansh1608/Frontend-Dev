class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount = (percent) => {
    this.price = this.price - (this.price * percent / 100);
  }

  display = () => `ID: ${this.id} | ${this.name} — ₹${this.price} | ${this.category}`;
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Shoes", 2000, "Fashion"),
  new Product(3, "Book", 500, "Education"),
];

products[0].applyDiscount(10);

const expensive = products.filter(p => p.price > 1000);

console.log("Products with price > 1000:");
expensive.forEach(p => console.log(p.display()));
