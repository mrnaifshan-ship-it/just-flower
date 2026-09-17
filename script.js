let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");

}

function scrollToProducts() {

    document.getElementById("bouquets").scrollIntoView({
        behavior: "smooth"
    });

}

function orderNow() {

    const phoneNumber = "966546316391";

    const message =
        "Hello JUST FLOWER! I want to place an order.";

    const url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");

}