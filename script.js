// JavaScript for handling back-to-top button functionality
window.onscroll = function () {
    let backToTop = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Smooth scroll for back-to-top button
document.querySelector(".back-to-top").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form validation for registration and login
function validateForm(form) {
    let valid = true;
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
        if (input.value === "") {
            valid = false;
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    });

    return valid;
}


document.querySelector(".register-form button").addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector(".register-form");
    if (validateForm(form)) {
        alert("Registration successful!");
        form.reset();
    } else {
        alert("Please fill all fields!");
    }
});


document.querySelector(".login-form button").addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector(".login-form");
    if (validateForm(form)) {
        alert("Login successful!");
        form.reset();
    } else {
        alert("Please fill all fields!");
    }
});


let cartCount = 0;
let wishlistCount = 0;


function updateCart() {
    cartCount += 1; 
    document.querySelector(".cart span").textContent = `(${cartCount})`;
}

function updateWishlist() {
    wishlistCount += 1; 
    document.querySelector(".wishlist span").textContent = `(${wishlistCount})`;
}


document.querySelector(".cart").addEventListener("click", updateCart);
document.querySelector(".wishlist").addEventListener("click", updateWishlist);
