function hamburg() {
    let dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(0)';
    dropdown.style.display = 'block';
}

function cancel() {
    let dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-500px)';
    
    // Wait for animation to finish before hiding
    setTimeout(() => {
        dropdown.style.display = 'none';
    }, 300);
}
