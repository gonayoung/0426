const slider = document.querySelector('.find_slider');
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // 드래그 속도 조절 (1.5배 빠르게)
    slider.scrollLeft = scrollLeft - walk;
});