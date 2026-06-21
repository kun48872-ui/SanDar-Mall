// =========================
// SANDAR STORE SCRIPT
// =========================

// CART
let cart = [];

// WISHLIST
let wishlist = [];

// ADD TO CART
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCartCount();
    updateCartList();

    alert(name + " added to cart!");
}

// UPDATE CART COUNT
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// UPDATE CART LIST
function updateCartList() {

    const cartItems = document.getElementById("cart-items");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price} Ks</span>
                <button onclick="removeCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    const totalBox = document.getElementById("cart-total");

    if (totalBox) {
        totalBox.innerText = total + " Ks";
    }
}

// REMOVE CART ITEM
function removeCart(index) {
    cart.splice(index, 1);

    updateCartCount();
    updateCartList();
}

// CLEAR CART
function clearCart() {

    if (confirm("Clear all cart items?")) {

        cart = [];

        updateCartCount();
        updateCartList();
    }
}

// =========================
// PRODUCT SEARCH
// =========================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter =
            searchInput.value.toLowerCase();

        let cards =
            document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let text =
                card.innerText.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =========================
// DARK MODE
// =========================

const darkButton =
    document.getElementById("darkMode");

if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        let mode =
            document.body.classList.contains("dark")
            ? "dark"
            : "light";

        localStorage.setItem("theme", mode);

    });

}

// LOAD SAVED THEME
window.addEventListener("load", () => {

    let savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

});

// =========================
// WISHLIST
// =========================

function addWishlist(name) {

    if (!wishlist.includes(name)) {

        wishlist.push(name);

        updateWishlist();

        alert(name + " added to wishlist");
    }
}

// UPDATE WISHLIST
function updateWishlist() {

    let list =
        document.getElementById("wishlist");

    if (!list) return;

    list.innerHTML = "";

    wishlist.forEach(item => {

        list.innerHTML += `
            <li>${item}</li>
        `;

    });

}

// =========================
// PRODUCT POPUP
// =========================

function openProduct(title, image, price) {

    const popup =
        document.getElementById("product-popup");

    const popupTitle =
        document.getElementById("popup-title");

    const popupImage =
        document.getElementById("popup-image");

    const popupPrice =
        document.getElementById("popup-price");

    popupTitle.innerText = title;

    popupImage.src = image;

    popupPrice.innerText =
        price + " Ks";

    popup.style.display = "flex";
}

// CLOSE POPUP
function closePopup() {

    document.getElementById(
        "product-popup"
    ).style.display = "none";

}

// =========================
// CART SIDEBAR
// =========================

function openCart() {

    let sidebar =
        document.getElementById("cart-sidebar");

    if (sidebar) {
        sidebar.style.right = "0";
    }
}

function closeCart() {

    let sidebar =
        document.getElementById("cart-sidebar");

    if (sidebar) {
        sidebar.style.right = "-400px";
    }
}

// =========================
// ORDER VIA FACEBOOK
// =========================

function orderFacebook() {

    window.open(
        "https://m.me/YOUR_PAGE_ID",
        "_blank"
    );

}

// =========================
// PRODUCT FILTER
// =========================

function filterCategory(category) {

    const cards =
        document.querySelectorAll(
            ".product-card"
        );

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// =========================
// SCROLL TO TOP
// =========================

window.addEventListener("scroll", () => {

    let btn =
        document.getElementById("topBtn");

    if (!btn) return;

    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

});

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// =========================
// PAGE LOADED
// =========================

window.onload = function () {

    updateCartCount();

    console.log(
        "Sandar Store Loaded Successfully"
    );

};