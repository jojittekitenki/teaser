const newsBtn = document.getElementById('newsBtn');
const closeBtn = document.querySelector('.closeIcon');
const tryAgain = document.getElementById('okBtn');
const news = document.querySelector('.news');

// On news btn is clicked
newsBtn.addEventListener('click', () => {
    // Show news
    news.classList.add('active')
})

// On close btn is clicked
closeBtn.addEventListener('click', () => {
    // Hide news
    news.classList.remove('active')
})

// On try again btn is clicked
tryAgain.addEventListener('click', () => {
    // Hide news
    news.classList.remove('active');

    // Do something
});

// On window is clicked
window.addEventListener('click', event => {
  // Check if the click it was on the news
    if (event.target == news) 
        // Hide news
        news.classList.remove('active')
});

