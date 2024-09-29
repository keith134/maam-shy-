document.querySelector('.message-btn').addEventListener('click', function () {
    const messageSection = document.querySelector('.message');
    if (messageSection.style.display === 'none' || messageSection.style.display === '') {
        messageSection.style.display = 'block';
        this.textContent = 'Hide Message';
    } else {
        messageSection.style.display = 'none';
        this.textContent = 'Message to Ma’am Synab Andoy Melencio, from Quadro Best Friends';
    }
});
