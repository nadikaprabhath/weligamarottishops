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
function filterMenu() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const cards = document.querySelectorAll('.menu-card');

    cards.forEach(card => {
        const category = card.getAttribute('data-category').toLowerCase();
        if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Menu by Name
function searchMenu() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.menu-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
