const decreasebtn = document.getElementById('decrease__btn');
const increasebtn = document.getElementById('increase__btn');
const inputbox = document.getElementById('number_counter');
const add_to_cart_btn = document.getElementById('add_to_cart');

const cart_number = document.getElementById('cart_number');

increasebtn.addEventListener('click', () => {
  inputbox.value++;
});

decreasebtn.addEventListener('click', () => {
  inputbox.value--;
  if (inputbox.value < 0) {
    inputbox.value = 0;
  }
});

const Cart = [];

function add_to_cart(product) {
  if (inputbox.value === 0) {
    alert('Please select a quantity');
  } else {
    Cart.push(product);
    console.log('====================================');
    console.log(`${inputbox.value} ${product} added to cart`);
    console.log(`Total items in the cart is ${Cart.length}`);
    console.log('====================================');
  }
}
add_to_cart_btn.addEventListener('click', () => {
  add_to_cart('Orange');
  add_to_cart('Apple');
});
