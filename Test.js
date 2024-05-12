/*

  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Court Sneaker",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.

  cartRec
  {
  "Court Sneaker": { quantity: 2, priceInCents: 8800 },
  "Black Hat": { quantity: 1, priceInCents: 2300 },
}
*/

function printablePrice(priceInCents) {
    const amount = (priceInCents / 100).toFixed(2);
    return `$${amount}`;
  }
  
  function chooseItemByNameAndSize(products, name, size) {
    let selected = null;
    // write your solution here. See the hint in the instructions if you need help.
    
    let numberOfProducts = products.length;
    for (let i = 0; i < numberOfProducts; i++) {
      let productRec = products[i];
      
      if (productRec.name === name && productRec.availableSizes.includes(size)) {
        selected = productRec;
      }
    }
    
    return selected;
  }
  
  
  function calculateTotal(cart) {
    if(!cart) {
      return 0;
    }
    let result = 0;
    // write your solution here. See the hint in the instructions if you need help.
    
    for(let cartItem in cart) {
      let item = cart[cartItem];
      result += item.quantity * item.priceInCents;
    }
    
    return result;
  }
  
  function printReceipt(cart) {
    
    if(Object.keys(cart).length === 0) {
      return null;
    }
    const total = calculateTotal(cart);
    // write your solution here. See the hint in the instructions if you need help.
    let result = "";
    
    let cartNames = Object.keys(cart);
    let cartValues = Object.values(cart);
    
    let numRec = Object.keys(cart).length;
    for (let i=0;i<numRec; i++) {
      result += cartValues[i].quantity + "x" + cartNames[i] + " - $" + ((cartValues[i].quantity * cartValues[i].priceInCents)/100) + ".00\n";
  
    }
    
    return result + `Total: ${printablePrice(total)}`;
  }
  
  module.exports = {
    chooseItemByNameAndSize,
    calculateTotal,
    printReceipt,
  };
  