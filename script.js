document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');

    ctaButton.addEventListener('click', function() {
        alert('You clicked the Learn More button!' +
            'Welcome to The Reading Room, your ultimate online library! ' +
            'Here you can explore a vast collection of books, participate in community discussions, ' +
            'and discover new authors. Enjoy your reading journey!');
    });
});
