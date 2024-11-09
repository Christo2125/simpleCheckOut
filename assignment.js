// Toggle expansion of the pricing boxes
document.querySelectorAll('.pricing-box').forEach((box) => {
    box.addEventListener('click', function () {
        // Remove 'expanded' class from other boxes
        document.querySelectorAll('.pricing-box').forEach((b) => {
            b.classList.remove('expanded');
        });

        // Add 'expanded' class to the clicked box
        this.classList.add('expanded');
    });
});
