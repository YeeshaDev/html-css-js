const reviews = [
    {
        name: 'Haley Burrell',
        image: 'avatar1.jpg',
        job: 'Lawyer',
        review: 'Best Portal for Files, Billing and Communication with clients.'
    },
    {
        name: 'Rose Miller',
        image: 'avatar2.jpg',
        job: 'Entrepreneur',
        review: 'Excellent solution for files-sharing and eSignatures.'
    },
    {
        name: 'Clarence Donaldson',
        image: 'avatar3.jpg',
        job: 'Engineer',
        review: 'By far the best designed client portal product.'
    },
    {
        name: 'Micheal Griffin',
        image: 'avatar4.jpg',
        job: 'Graphic Designer',
        review: 'Messaging, file-sharing, and billing in one place!'
    },
    
];

// Variables to select the DOM elements
const person = document.getElementById('name');
const image = document.getElementById('image');
const job = document.getElementById('job');
const review = document.querySelector('#opinion p');
const btns = document.querySelectorAll('.btn');

// Variable of Index
let index = 0;

// Shows the review
function showReview() {
    const item = reviews[index];
    person.textContent = item.name;
    image.src = item.image;
    job.textContent = item.job;
    review.textContent = item.review;
}

// Load initial review
window.addEventListener('DOMContentLoaded', function () {
    showReview();
});

// Function of all the buttons
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const btnClass = btn.classList;

        if (btnClass.contains('prev')) {
            index--;
        } else if (btnClass.contains('next')) {
            index++;
        } else {
            index = Math.floor(Math.random() * reviews.length);
        }

        if (index < 0) {
            index = reviews.length - 1;
        } else if (index >= reviews.length) {
            index = 0;
        }

        showReview();
    })
});