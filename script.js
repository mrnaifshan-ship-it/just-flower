```javascript
let cart = [];

let selectedProduct = "";
let selectedPrice = 0;


/* ORDER NOW */

function orderNow(product, price) {

    selectedProduct = product;
    selectedPrice = price;

    document.getElementById("selected-product").textContent =
        product;

    document.getElementById("selected-price").textContent =
        price + " SAR";

    document.getElementById("order-modal").classList.add("active");
}


/* CONFIRM ORDER */

function confirmOrder() {

    const name =
        document.getElementById("customer-name").value.trim();

    const phone =
        document.getElementById("customer-phone").value.trim();

    const message =
        document.getElementById("customer-message").value.trim();


    if (!name || !phone) {

        alert("Please enter your name and WhatsApp number.");

        return;
    }


    const orderText =
        "JUST FLOWER Order%0A%0A" +
        "Product: " + selectedProduct + "%0A" +
        "Price: " + selectedPrice + " SAR%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "WhatsApp: " + encodeURIComponent(phone) + "%0A" +
        "Details: " + encodeURIComponent(message);


    /*
      Replace YOUR_SAUDI_WHATSAPP_NUMBER
      with the actual Saudi WhatsApp number later.

      Example:
      9665XXXXXXXX
    */

    const whatsappNumber = "YOUR_SAUDI_WHATSAPP_NUMBER";

    if (whatsappNumber === "YOUR_SAUDI_WHATSAPP_NUMBER") {

        alert(
            "Your order form is working! " +
            "Add the Saudi WhatsApp number in script.js to receive orders."
        );

        return;
    }


    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + orderText,
        "_blank"
    );
}


/* ADD TO CART */

function addToCart(product, price) {

    cart.push({
        product: product,
        price: price
    });

    updateCartCount();

    alert(product + " added to cart!");
}


/* UPDATE CART COUNT */

function updateCartCount() {

    document.getElementById("cart-count").textContent =
        cart.length;
}


/* SHOW CART */

function showCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent =
            "Total: 0 SAR";

    } else {

        let html = "";
        let total = 0;


        cart.forEach(function(item, index) {

            total += item.price;

            html += `
                <div class="cart-item">
                    <span>
                        ${item.product}
                    </span>

                    <strong>
                        ${item.price} SAR
                    </strong>
                </div>
            `;

        });


        cartItems.innerHTML = html;

        cartTotal.textContent =
            "Total: " + total + " SAR";
    }


    document.getElementById("cart-modal")
        .classList.add("active");
}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cart-modal")
        .classList.remove("active");
}


/* CHECKOUT CART */

function checkoutCart() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    const items =
        cart.map(function(item) {

            return item.product +
                " - " +
                item.price +
                " SAR";

        }).join("\n");


    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });


    const message =
        "JUST FLOWER Cart Order\n\n" +
        items +
        "\n\nTotal: " +
        total +
        " SAR";


    const whatsappNumber =
        "YOUR_SAUDI_WHATSAPP_NUMBER";


    if (whatsappNumber === "YOUR_SAUDI_WHATSAPP_NUMBER") {

        alert(
            "Cart is working! Add the Saudi WhatsApp number in script.js."
        );

        return;
    }


    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}


/* CONTACT */

function showContact() {

    alert(
        "Thank you for contacting JUST FLOWER! " +
        "WhatsApp ordering will be available soon."
    );
}


/* CLOSE ORDER MODAL */

function closeModal() {

    document.getElementById("order-modal")
        .classList.remove("active");
}


/* CLICK OUTSIDE MODAL */

window.addEventListener("click", function(event) {

    const orderModal =
        document.getElementById("order-modal");

    const cartModal =
        document.getElementById("cart-modal");


    if (event.target === orderModal) {
        closeModal();
    }

    if (event.target === cartModal) {
        closeCart();
    }

});
```
