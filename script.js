// Get all filter buttons and menu cards
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

// Add click event to all filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        // Show/Hide cards based on category
        menuCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
