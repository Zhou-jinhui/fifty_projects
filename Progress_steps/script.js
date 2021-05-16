const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length; 
    } 
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    if (currentActive === 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentActive === 4 ) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    progress.style.width = (currentActive-1) / (circles.length-1) * 100 + "%";
    circles.forEach((circle, idx) => {
       if (idx < currentActive) {
           circle.classList.add("active");
       } else {
           circle.classList.remove("active");
       }
    })
}