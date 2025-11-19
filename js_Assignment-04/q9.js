class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty = 1) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((a, b) => a + b.price * b.qty, 0);
  }

  validateCoupon(code) {
    const match = code.match(/^(SAVE|DISC)(\d{1,2})$/i);
    return match ? Number(match[2]) : null;
  }
}

const cart = new Cart();
cart.addItem("Shoes", 2500, 1);
cart.addItem("Socks", 200, 2);

function render(discount = 0) {
  document.getElementById("items").innerHTML =
    cart.items.map(i => `${i.name} x${i.qty} — ₹${i.price}`).join("<br>");

  let total = cart.getTotal();
  let finalTotal = total - (total * discount / 100);

  document.getElementById("total").innerHTML =
    `Total: ₹${total}<br>Final: ₹${finalTotal}`;
}

render();

document.getElementById("applyBtn").addEventListener("click", () => {
  let code = document.getElementById("coupon").value.trim();
  let discount = cart.validateCoupon(code);

  if (!discount) return alert("Invalid coupon!");
  render(discount);
});
