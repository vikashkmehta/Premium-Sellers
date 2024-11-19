// JavaScript to handle adding items to the cart
document.querySelectorAll(".add-to-cart").forEach(function(button) {
    button.addEventListener("click", function () {
        const productCard = this.parentElement;
        const productName = productCard.querySelector("h2").innerText;
        const productPrice = productCard.querySelector(".price").innerText;
        
        // Create a new cart item
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${productName}</span>
            <span>${productPrice}</span>
        `;

        // Add the cart item to the cart (both the dropdown and the main cart)
        const cartItems = document.getElementById("cart-items");
        cartItems.appendChild(cartItem);

        // Add the cart item to the cart dropdown in the navigation bar
        const cartItemsDropdown = document.getElementById("cart-items-dropdown");
        cartItemsDropdown.appendChild(cartItem);
    });
});
