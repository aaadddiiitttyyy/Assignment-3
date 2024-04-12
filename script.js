document.addEventListener("DOMContentLoaded", function() {
    const changeButton = document.getElementById('change-button');
    const changeableText = document.getElementById('changeable-text');

    changeButton.addEventListener('click', function() {
        changeableText.textContent = "My name is Aditya Charak";
    });
});
