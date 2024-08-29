function updateMessage() {
    const messageDiv = document.getElementById('message');
    mainDiv = document.getElementById('main');
    if (window.innerWidth < 768) {
        if(mainDiv) {
            mainDiv.innerHTML = '';
        }
        messageDiv.textContent = 'कृपया यो साइट मोबाइलमा नखोल्नुहोस् यो Responsive छैन'
    } else {
        mainDiv.innerHTML  = `<img src="./idPhoto.jpg" alt="Lovely😘">`
        if (messageDiv) {
            messageDiv.textContent = '';
        }

    }
}

updateMessage();

window.addEventListener('resize', updateMessage);