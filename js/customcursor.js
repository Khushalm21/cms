// // Create a custom cursor
// var cursor = document.createElement("div");
// cursor.style.position = "fixed";
// cursor.style.top = "0px";
// cursor.style.left = "0px";
// cursor.style.width = "10px";
// cursor.style.height = "10px";
// cursor.style.borderRadius = "50px";
// cursor.style.backgroundColor = "yellow";

// // Add the cursor to the document
// document.body.appendChild(cursor);

// // Move the cursor with the mouse
// var mousePos = function(e) {
//   cursor.style.top = e.clientY + "px";
//   cursor.style.left = e.clientX + "px";
// };

// // Bind the mouse move event to the document
// document.addEventListener("mousemove", mousePos);

// // Create a custom cursor
// var cursor = document.createElement("div");
// cursor.style.position = "fixed";
// cursor.style.top = "0px";
// cursor.style.left = "0px";
// cursor.style.width = "15px";
// cursor.style.height = "15px";
// cursor.style.borderRadius = "50px";
// cursor.style.backgroundColor = "#ffc200";

// // Hide the default cursor
// document.body.style.cursor = "none";

// // Add the cursor to the document
// document.body.appendChild(cursor);

// // Move the cursor with the mouse
// var mousePos = function(e) {
//   cursor.style.top = e.clientY + "px";
//   cursor.style.left = e.clientX + "px";
// };

// // Bind the mouse move event to the document
// document.addEventListener("mousemove", mousePos);


var cursor = document.createElement("div");
cursor.style.position = "fixed";
cursor.style.top = "-20px";
cursor.style.left = "0px";
cursor.style.width = "15px";
cursor.style.height = "15px";
cursor.style.borderRadius = "50px";
cursor.style.backgroundColor = "#ffc200";

// Hide the default cursor
document.body.style.cursor = "none";

// Add the cursor to the document
document.body.appendChild(cursor);

// Move the cursor with the mouse
var mousePos = function(e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";



  // Check if the cursor is hovering over a yellow element
  var isOverYellow = false;
  var yellowElements = document.querySelectorAll(".yellow");
  for (var i = 0; i < yellowElements.length; i++) {
    if (e.target === yellowElements[i]) {
      isOverYellow = true;
      break;
    }

  }

  // Change the cursor color based on whether it is hovering over a yellow element
  if (isOverYellow) {
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "2px solid black ";
  } else {
    cursor.style.backgroundColor = "#ffc200";
    cursor.style.border = "none ";
  }




};

// Bind the mouse move event to the document
document.addEventListener("mousemove", mousePos);
