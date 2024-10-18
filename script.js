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

// Filter Menu by Category
// function filterMenu(category) {
//     // Clear the search input field to reset the search history
//     document.getElementById('searchInput').value = '';  // Reset search history

//     const cards = document.querySelectorAll('.menu-card');
//     const buttons = document.querySelectorAll('.filter-button');

//     // Highlight the active filter button
//     buttons.forEach(button => {
//         button.classList.remove('active');
//         if (button.getAttribute('data-filter') === category) {
//             button.classList.add('active');
//         }
//     });

//     // Filter the cards based on category and reset search value (since it is cleared)
//     cards.forEach(card => {
//         const cardCategory = card.getAttribute('data-category');
//         if (category === 'all' || cardCategory === category) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }



// Search Menu
function searchMenu() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const category = document.querySelector('.filter-button.active').getAttribute('data-filter');
    const cards = document.querySelectorAll('.menu-card');

    // Filter the cards based on the active category and search term
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



// 1
// // Fetch the menu data from a JSON file
// fetch('menu-data.json')
//     .then(response => response.json())  // Parse the JSON data
//     .then(data => {
//         // Get the menu container where we will add the menu cards
//         const menuContainer = document.getElementById('menuContainer');

//         // Loop through each item in the data
//         data.forEach(item => {
//             // Create a new div element for each menu item
//             const card = document.createElement('div');
//             card.classList.add('menu-card');  // Add the 'menu-card' class to the div
//             card.setAttribute('data-category', item.category);  // Add a data-category attribute for filtering

//             // Set the inner HTML of the card
//             card.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}">
//                 <h3>${item.name}</h3>
//                 <p>${item.price}</p>
//             `;

//             // Add an onclick event to open a modal with the item details
//             card.setAttribute('onclick', `openModal('${item.name}', '${item.description}', '${item.price}', '${item.image}')`);

//             // Append the card to the menu container
//             menuContainer.appendChild(card);
//         });
//     })
//     .catch(error => console.error('Error fetching menu data:', error));  // Handle any errors

// 2
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

// 3
