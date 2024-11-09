
document.querySelectorAll('.pricing-box').forEach((box) => {
    box.addEventListener('click', function () {
        document.querySelectorAll('.pricing-box').forEach((b) => {
            b.classList.remove('expanded');
        });
        this.classList.add('expanded');
    });
});
