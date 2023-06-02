class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.cart = []; 
    }
  
    addToCart(product) {
      this.cart.push(product);
      this.updateCart();
      console.log(`Продукт ${product} додано в корзину користувача ${this.name}`);
    }
  
    updateCart() {
      const cartElement = document.getElementById(`${this.name}-cart`);
      cartElement.textContent = this.cart.join(", ");
    }
  }
  
  const user1 = new User("Іван", "ivan@example.com");
  const user2 = new User("Олена", "olena@example.com");
  
  function addToCart(user) {
    const product = document.getElementById(`${user.name}-product`).value;
    user.addToCart(product);
  }
  console.log()
  document.addEventListener("DOMContentLoaded", function() {
    user1.updateCart();
    user2.updateCart();
  });
  