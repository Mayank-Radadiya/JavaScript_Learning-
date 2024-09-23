class ProductComponent {
  constructor(name, price, quantities) {
    this.name = name;
    this.price = price;
    this.quantities = quantities;
  }
  displayProductInfo() {
    console.log(
      `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantities}`
    );
    let value = this.price * this.quantities;
    console.log("Total Price: ", value);
  }
}

let product1 = new ProductComponent("Laptop", 15000, 2);
product1.displayProductInfo();


// using Function
function ProductInfo(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.displayProductInfo = function () {
    console.log(
      `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
    let value = this.price * this.quantity;
    console.log("Total Price: ", value);
  };
}

let product2 = new ProductInfo("Mobile", 5000, 3);
product2.displayProductInfo();
