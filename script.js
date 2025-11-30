
window.onload = function() {
    console.log("Page loaded."); // Requirement: Console Log 1
};


function addToCart() {
    alert("Item added to cart!"); // Requirement: Alert 1
    console.log("Item added to cart"); // Requirement: Console Log 2
}

function handlePayment(e) {
    e.preventDefault();

    alert("Thanks Guest! Your Order has been placed."); // Requirement: Alert 2
    window.location.href = "index.html"; // Redirect to Home
}

function toggleCardDetails() {
    var method = document.getElementById("payment-method").value;
    var cardBox = document.getElementById("card-details-box");
    if(method === "card") {
        cardBox.style.display = "block";
    } else {
        cardBox.style.display = "none";
    }
}


function showLoginForm() {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('signup-box').style.display = 'none';
}
function showSignupForm() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'block';
}
function handleLogin(e) {
    e.preventDefault();
    alert("Logged in!"); // Requirement: Alert 3
    console.log("User logged in"); // Requirement: Console Log 3
    window.location.href = "index.html";
}
function handleSignup(e) {
    e.preventDefault();
    alert("Account created!");
    window.location.href = "index.html";
}