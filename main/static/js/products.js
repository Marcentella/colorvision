document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".pic-ctn");

    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll(".pic");
        let currentIndex = 0;

        function showNextImage() {
            // Hide the current image
            images[currentIndex].classList.remove("show");

            // Move to the next image
            currentIndex = (currentIndex + 1) % images.length;

            // Show the next image
            images[currentIndex].classList.add("show");
        }

        // Start the slideshow
        images[currentIndex].classList.add("show");
        setInterval(showNextImage, 3000); // 3 seconds per image
    });
});
