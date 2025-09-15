
const cardBtn = document.getElementById('cardBtn');
const cardModal = document.getElementById('cardModal');
const closeCard = document.getElementById('closeCard');
let continueShop = document.getElementById('continueShop');
const cart = [];
const cartItems = document.getElementById('cartItems')
const cartTotal = document.getElementById('cart-total');

cardBtn.addEventListener("click", () => {
  cardModal.classList.remove("hidden")
});

closeCard.addEventListener("click", () => {
  cardModal.classList.add("hidden")
});

continueShop.addEventListener("click", () => {
  cardModal.classList.add("hidden")
});

document.querySelectorAll(".add-to-card").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    const img = btn.dataset.img;

    cart.push({ name, price, img });
    updateCard();
    console.log(cart);
  });
});

function updateCard() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li class="flex items-center gap-4">
        <img src="${item.img}" class="size-16 rounded-sm object-cover" />
        <div class="flex-1">
          <h3 class="text-sm text-gray-900">${item.name}</h3>
          <p class="text-xs text-gray-600">$${item.price.toFixed(2)}</p>
        </div>
        <button onclick="removeItem(${index})" class="text-red-500">❌</button>
      </li>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCard();
}

document.getElementById('checkoutBtn').addEventListener("click", () => {

  if (cart.length === 0) {
    alert('masihh kosong bang tambahin barang');
    return;
  }


  let message = "halo admin saya mau order: %0A%0A";
  let total = 0;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ${item.price}%0A`
    total += item.price
  });

  message += `%0Atotal: ${total}`

  const phone = 6285816285231;
  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");


});

const serchInput = document.getElementById('cari');
const kata = document.getElementById('kata');

serchInput.addEventListener("input", () => {
  const keyword = serchInput.value.toLowerCase();
  const products = document.querySelectorAll('.produk');

  products.forEach(product => {
    const name = product.querySelector(".nama-produk").textContent.toLowerCase()

    if (name.includes(keyword)) {
      product.classList.remove("hidden");
      kata.classList.remove("hidden");
    } else {
      product.classList.add("hidden"); 
      kata.classList.add("hidden");
    }
  });
})