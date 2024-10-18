// Open Modal
function openModal(title, description, price, imageSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal if clicked outside the content area
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Filter Menu by Category
function filterMenu(category) {
    const searchValue = document.getElementById('searchInput').value= ''; // .toLowerCase()
    const cards = document.querySelectorAll('.menu-card');
    const buttons = document.querySelectorAll('.filter-button');

    // Highlight the active filter button
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-filter') === category) {
            button.classList.add('active');
        }
    });

    // Filter the cards based on category and search term
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();

        if ((category === 'all' || cardCategory === category) && cardTitle.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Item
function searchMenu() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const activeCategoryButton = document.querySelector('.filter-button.active');
    const category = activeCategoryButton ? activeCategoryButton.getAttribute('data-filter') : 'all';  // Default to 'all' if no active button
    const cards = document.querySelectorAll('.menu-card');
    let foundResults = false;  // Flag to check if any results are found

    // Filter the cards based on the active category and search term
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();

        if ((category === 'all' || cardCategory === category) && cardTitle.includes(searchValue)) {
            card.style.display = 'block';
            foundResults = true;  // Set flag to true when at least one result is found
        } else {
            card.style.display = 'none';
        }
    });

     // Show or hide the "No results found" message based on whether results were found
//    const noResultsMessage = document.getElementById('no-results-message');
//     if (foundResults) {
//         noResultsMessage.style.display = 'none';  // Hide the message if results were found
//     } else {
//         noResultsMessage.style.display = 'block';  // Show the message if no results were found
//     }
}

// Add event listener to reset category when search bar is focused (optional)
document.getElementById('searchInput').addEventListener('focus', function() {
    const activeCategoryButton = document.querySelector('.filter-button.active');
    if (activeCategoryButton && activeCategoryButton.getAttribute('data-filter') !== 'all') {
        // Optional: Reset category to 'all' when focusing the search field
        filterMenu('all');
    }
});

// Fetch the menu data from a JSON file
fetch('menu-data.json')
    .then(response => response.json())  // Parse the JSON data
    .then(data => {
        // Get the menu container where we will add the menu cards
        const menuContainer = document.getElementById('menuContainer');

        // Loop through each item in the data
        data.forEach(item => {
            // Create a new div element for each menu item
            const card = document.createElement('div');
            card.classList.add('menu-card');  // Add the 'menu-card' class to the div
            card.setAttribute('data-category', item.category);  // Add a data-category attribute for filtering

            // Format the category (e.g., "coffee_and_tea" becomes "Coffee and Tea")
            const formattedCategory = item.category.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

            // Set the inner HTML of the card
            card.innerHTML = `
                <div class="category-label">${formattedCategory}</div>
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            `;

            // Add an onclick event to open a modal with the item details
            card.setAttribute('onclick', `openModal('${item.name}', '${item.description}', '${item.price}', '${item.image}')`);

            // Append the card to the menu container
            menuContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu data:', error));  // Handle any errors

// Get the button
let scrollToTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};



const rotateBlock = document.getElementById('rotateBlock');

        // Listen for the 'deviceorientation' event to capture device rotation
        window.addEventListener('deviceorientation', function(event) {
            // Get the rotation values from the event object
            const alpha = event.alpha;  // Rotation around the Z-axis (compass direction)
            const beta = event.beta;    // Rotation around the X-axis (tilt forward/backward)
            const gamma = event.gamma;  // Rotation around the Y-axis (tilt side-to-side)

            // Apply the rotation to the block element using the device's orientation data
            rotateBlock.style.transform = `rotate(${alpha}deg) rotateX(${beta}deg) rotateY(${gamma}deg)`;
        });
