document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('newsletter-form');
    const newsletterModal = document.getElementById("newsletter-modal");
    const emailInput = document.getElementById('email');
    const errorSpan = document.querySelector('.error');
    const successModal = document.querySelector('.success-modal');
    const emailValueSpan = document.getElementById('email-value');
    const dismissButton = document.querySelector('.success-modal .button');

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!emailValue || !validateEmail(emailValue)) {
            errorSpan.style.display = 'inline';
        } else {
            errorSpan.style.display = 'none';
            showModal(emailValue);
        }
    });
    dismissButton.addEventListener("click", function () {
        hideModal();
    });

    function showModal(email) {
        emailValueSpan.textContent = email;
        successModal.style.display = 'grid';
        newsletterModal.style.display = 'none';
    }

    function hideModal() {
        successModal.style.display = 'none';
        newsletterModal.style.display = 'grid';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});