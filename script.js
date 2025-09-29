let productArray = [];

function addProduct() {
  // Assignment 1
  // Change the id to "product"
  let input = document.getElementById("product").value;

  // Challenge: check if empty
  if (input === "") {
    alert("Please enter a product before adding!");
    return false; // prevents reload
  }

  // Create a new div
  let newDiv = document.createElement("div");

  // Get the output div
  let output = document.getElementById("output");

  // Assignment 2
  // Put the value of the input into an array
  let newProduct = { name: input };
  productArray.push(newProduct);

  // Debug check
  console.log(productArray);

  // Assignment 3
  // Loop through array and display products
  // First clear previous output
  output.innerHTML = "";

  for (let i = 0; i < productArray.length; i++) {
    // Reset the input to empty
    document.getElementById("product").value = "";

    // Make output visible
    output.style.display = "block";

    // Create a div for this product
    let productDiv = document.createElement("div");
    productDiv.textContent = `${productArray[i].name}`;

    // Append new product to output
    output.appendChild(productDiv);
  }

  // Prevent page reload
  return false;
}
