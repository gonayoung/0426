document.addEventListener("DOMContentLoaded", function () {
    const slideList = document.querySelector(".book_slide");
    const slideWidth = 400;
    const totalSlides = slideList.children.length;
    let currentIndex = 0;

    document.querySelector(".book_next").addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        slideList.style.marginLeft = -(slideWidth * currentIndex) + "px";
    }
    });

    document.querySelector(".book_prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        slideList.style.marginLeft = -(slideWidth * currentIndex) + "px";
    }
    });
});