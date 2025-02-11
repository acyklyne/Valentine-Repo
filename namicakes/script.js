function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noBtnElement = document.getElementById("noButton");
    const buttonRect = noBtnElement.getBoundingClientRect();
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate maximum positions while keeping button fully visible
    const maxX = viewportWidth - buttonRect.width;
    const maxY = viewportHeight - buttonRect.height;
    
    // Generate random positions within bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Apply new position
    noBtnElement.style.position = "fixed";
    noBtnElement.style.left = randomX + "px";
    noBtnElement.style.top = randomY + "px";
}