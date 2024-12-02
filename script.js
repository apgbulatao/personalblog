// DOM Ready Function
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and DOM is ready!");

    // Example: Click Event Listener
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }
});

// Utility Function Example
function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
    }
}

// Example Usage:
// toggleElementVisibility("myElement");
