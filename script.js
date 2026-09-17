let cart = [];
let currentProduct = "";
let currentPrice = 0;

function orderNow(product, price) {
    currentProduct = product;
    currentPrice = price;

    document.getElementById("selected-product").textContent = product;
    document.getElementById("selected-price").textContent = price + " SAR";

    document.getElementById("summary-flower-price").textContent =
        price + " SAR";

    document.getElementById("delivery-charge").textContent =
        "0 SAR";

    document.getElementById("order-total").textContent =
        price + " SAR";

    document.getElementById("distance").value = "";

    document.getElementById("order-modal").style.display = "flex";
}

function calculateTotal() {
    const deliveryCharge = Number(
        document.getElementById("distance").value
    );

    const total = currentPrice + deliveryCharge;

    document.getElementById("delivery-charge").textContent =
        deliveryCharge + " SAR";

    document.getElementById("order-total").textContent =
        total + " SAR";
}

function confirmOrder() {
    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-message").value.trim();
    const distance = document.getElementById("distance").value;

    if (!name || !phone || !address || !distance) {
        alert("Please fill in all order details.");
        return;
    }

    const deliveryCharge = Number(distance);
    const total = currentPrice + deliveryCharge;

    const whatsappNumber = "YOUR_SAUDI_WHATSAPP_NUMBER";

    if (whatsappNumber === "YOUR_SAUDI_WHATSAPP_NUMBER") {
        alert(
            "Order details are ready. WhatsApp number will be connected soon.\n\n" +
            "Product: " + currentProduct + "\n" +
            "Flower Price: " + currentPrice + " SAR\n" +
            "Delivery: " + deliveryCharge + " SAR\n" +
            "Total: " + total + " SAR"
        );
        return;
    }

    const whatsappMessage =
        "JUST FLOWER ORDER\n\n" +
        "Product: " + currentProduct + "\n" +
        "Flower Price: " + currentPrice + " SAR\n" +
        "Delivery Charge: " + deliveryCharge + " SAR\n" +
        "Total: " + total + " SAR\n\n" +
        "Customer Name: " + name + "\n" +
        "WhatsApp: " + phone + "\n" +
        "Delivery Address: " + address;

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");
}

function addToCart(product, price) {
    cart.push({
        product: product,
        price: price
    });

    updateCartCount();

    alert(product + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cart-count").textContent =
        cart.length;
}

function showCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "Total: 0 SAR";
    } else {
        let total = 0;

        cart.forEach(function(item, index) {
            total += item.price;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${item.product}</span>
                    <span>${item.price} SAR</span>
                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>
            `;
        });

        cartTotal.textContent = "Total: " + total + " SAR";
    }

    document.getElementById("cart-modal").style.display = "flex";
}

function removeFromCart(index) {
    cart.splice(index, 1);

    updateCartCount();
    showCart();
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Cart checkout will be connected to WhatsApp soon.");
}

function showContact() {
    alert("WhatsApp contact will be available soon.");
}

function closeModal() {
    document.getElementById("order-modal").style.display =
        "none";
}

function closeCart() {
    document.getElementById("cart-modal").style.display =
        "none";
}

window.onclick = function(event) {
    const orderModal = document.getElementById("order-modal");
    const cartModal = document.getElementById("cart-modal");

    if (event.target === orderModal) {
        orderModal.style.display = "none";
    }

    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
};
