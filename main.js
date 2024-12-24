// Sample review data
const reviews = [
    {
        id: 1,
        name: "John Smith",
        subtitle: "Verified Customer",
        comment: "Excellent service! Would highly recommend."
    },
    {
        id: 2,
        name: "Sarah Johnson",
        subtitle: "Regular Client",
        comment: "Great experience overall. Very satisfied with the product."
    },
    {
        id: 3,
        name: "Michael Brown",
        subtitle: "New Customer",
        comment: "Outstanding quality and fast delivery!"
    },
    {
        id: 4,
        name: "Emily Davis",
        subtitle: "Premium Member",
        comment: "Very professional and helpful staff."
    },
    {
        id: 5,
        name: "David Wilson",
        subtitle: "Loyal Customer",
        comment: "Exceeded my expectations. Will definitely come back!"
    }
];

// Get DOM elements
const reviewContainer = document.querySelector(".review");
const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");

// Keep track of which review we're showing
let currentIndex = 0;

// Function to display a review
function displayReview(index) {
    // Make sure index is within bounds
    if (index < 0) {
        currentIndex = reviews.length - 1;
    } else if (index >= reviews.length) {
        currentIndex = 0;
    }

    const review = reviews[currentIndex];
    reviewContainer.innerHTML = `
        <h2>${review.name}</h2>
        <h4>${review.subtitle}</h4>
        <p>${review.comment}</p>
    `;
}

// Show first review when page loads
document.addEventListener("DOMContentLoaded", () => {
    displayReview(currentIndex);
});

// Handle next button click
nextButton.addEventListener("click", () => {
    currentIndex++;
    displayReview(currentIndex);
});

// Handle back button click
backButton.addEventListener("click", () => {
    currentIndex--;
    displayReview(currentIndex);
});
