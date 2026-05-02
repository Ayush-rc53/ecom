/*
    ============================================
    RentEase - JavaScript File
    ============================================
    
    This JavaScript file adds interactivity to the RentEase website.
    
    JavaScript makes websites interactive!
    - We can respond to clicks
    - Update content
    - Store data
    
    Let's learn each part step by step:
*/

/* ==================== */
/* GLOBAL VARIABLES    */
/* ==================== */
/*
    A variable is like a container that stores data.
    We use 'let' to create variables that can change.
    We use 'const' for values that don't change.
*/

// Cart array - stores all items added to cart
let cart = [];

// Total price of all items in cart
let totalPrice = 0;


/* ==================== */
/* ADD TO CART FUNCTION */
/* ==================== */
/*
    A function is a reusable block of code.
    We define it once, then call it when needed.
    
    This function:
    1. Takes the product name and price as input
    2. Adds the item to our cart
    3. Updates the display
*/

function addToCart(productName, price) {
    // Step 1: Add item to cart array
    cart.push({
        name: productName,
        price: price
    });
    
    // Step 2: Add price to total
    totalPrice += price;
    
    // Step 3: Update cart count in navbar
    // We get the element with id="cart-count" and change its text
    document.getElementById('cart-count').textContent = cart.length;
    
    // Step 4: Show success message to user
    // alert() is a built-in function that shows a popup message
    alert(productName + " added to cart!\nPrice: $" + price + "/day");
    
    // Step 5: Console log for debugging (view in browser dev tools)
    console.log("Cart:", cart);
    console.log("Total:", totalPrice);
}


/* ==================== */
/* EVENT LISTENERS     */
/* ==================== */
/*
    Event listeners wait for something to happen,
    then run our code.
    
    Common events:
    - click: when user clicks
    - mouseover: when mouse enters element
    - mouseout: when mouse leaves element
*/


/* ==================== */
/* HELPER FUNCTIONS    */
/* ==================== */
/*
    These are optional helper functions you can use
    to extend the website functionality.
*/


// Function to remove item from cart (for advanced use)
function removeFromCart(index) {
    // Get the item we're removing
    let removedItem = cart[index];
    
    // Subtract price from total
    totalPrice -= removedItem.price;
    
    // Remove from array
    cart.splice(index, 1);
    
    // Update display
    document.getElementById('cart-count').textContent = cart.length;
    
    // Alert user
    alert(removedItem.name + " removed from cart");
}


// Function to show cart contents (for advanced use)
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let message = "Your Cart:\n\n";
    
    // Loop through each item in cart
    for (let i = 0; i < cart.length; i++) {
        message += (i + 1) + ". " + cart[i].name + " - $" + cart[i].price + "/day\n";
    }
    
    message += "\nTotal: $" + totalPrice + "/day";
    
    alert(message);
}


/* ==================== */
/* INITIALIZATION     */
/* ==================== */
/*
    This code runs when the page loads.
    It's like setting up before the website starts.
*/

// This runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("RentEase website loaded!");
    console.log("Cart is empty. Start shopping!");
});


/* 
    ============================================
    LEARNING EXERCISES FOR BEGINNERS:
    ============================================
    
    Try these to practice JavaScript:
    
    1. Change the button text:
       - Find the button element
       - Change its textContent to "Added! ✓"
    
    2. Create a wishlist:
       - Make another array called wishlist
       - Add a "Add to Wishlist" button
    
    3. Calculate total for multiple days:
       - Add an input for number of days
       - Multiply price by days in the function
    
    4. Save cart to localStorage:
       - Use localStorage.setItem('cart', JSON.stringify(cart))
       - This keeps cart data even after refresh
    
    Keep practicing and have fun learning!
*/


/* 
    ============================================
    QUICK REFERENCE:
    ============================================
    
    document.getElementById('id')     - Get element by its ID
    element.textContent              - Get/set text inside element
    element.style.color            - Change CSS styles
    array.push(item)               - Add item to array
    array.splice(index, 1)        - Remove item from array
    alert(message)                - Show popup message
    console.log(message)          - Print to browser console
    
    Events:
    element.addEventListener('event', function)
    
    String methods:
    "text".toUpperCase()          - Convert to uppercase
    "text".toLowerCase()          - Convert to lowercase
    "text".includes("word")       - Check if contains word
*/
