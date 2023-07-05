class Order {
   
    constructor(product, quantity, unitPrice){
      this.product = product;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
    }

    totalPrice(quantity, unitPrice){
      return quantity*unitPrice; 
    }

}