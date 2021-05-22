

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;


prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();

})

// create circle indicators
function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id = i;
        if (i == 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function resetTimer() {
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
    timer = setInterval(autoPlay, 4000);
}


function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 4000);



// testimonial js
gsap.to(".bubble--container", 20, {
    rotation: 360,
    transformOrigin: "left 50%",
    repeat: -1,
    ease: "none"
});

var quotes = [
    '"Thank you so much for all of your help with everything!" - CEO of TechSoft',
    '"Hands down the best support I have ever received" - CEO of Raid Express',
    '"The best service I have ever received!" - CEO of Prime Power ',
    '"We could not have done it without you!" -CEO of TechXon',
    '"Beyond grateful for the service I received!" - CEO of IntelliWare ',
    '"A wonderful experience all around!" -CEO of BNL Software'
];

var previousInt = 0;

function animateOut() {
    gsap.fromTo(".text", 2, { opacity: 1 }, { opacity: 0 });
}

function animateIn() {
    gsap.fromTo(".text", 2, { opacity: 0 }, { opacity: 1 });
}

// returns a random integer for the quote randomizer
function getRandomInt() {
    return Math.floor(Math.random() * quotes.length);
}

function handleAnimation() {
    var randomInt = getRandomInt();

    // prevents the new quote from being the same as the previous quote
    while (randomInt == previousInt) {
        randomInt = getRandomInt();
    }

    previousInt = randomInt;

    // fades the animation out after a second
    setTimeout(() => {
        animateOut();
    }, 1000);

    // changes the text of the quote after 2.8 seconds
    setTimeout(() => {
        document.querySelector(".text").innerHTML = quotes[randomInt];
    }, 2800);

    // fades the quote back in after 3 seconds
    setTimeout(() => {
        animateIn();
    }, 3000);
}

// changes the quote every 7 seconds
setInterval(handleAnimation, 7000);
