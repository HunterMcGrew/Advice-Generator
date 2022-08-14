// beginning of code

// button to start fetch request
const generateBtn = document.getElementById("newBtn")
// HTML elements we need to interact with in populateData function
let number = document.getElementById("number");
let adviceTxt = document.getElementById("adviceTxt");
let dice = document.getElementById("dice");
// global var for rotation
let rotation = 0;

const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";

    try {
    const response = await fetch(url, {cache: "no cache"});
    const result = await response.json();

    if (response.ok) {
        // console.log("result", result);
        // store advice & advice id
        let id = result.slip.id;
        let advice = result.slip.advice;
        // console.log("id", id, "advice", advice);
        populateData(id, advice);
    }

    } catch (err) {
        if (err) throw err;
        console.log("err", err);
    }
}

// inserts data into HTML
const populateData = (id, advice) => {
    number.innerHTML = id;
    adviceTxt.innerHTML = advice;
}

const rotateDice = () => {
    // rotates the dice img 360 degress over .7 seconds on click
    rotation += 360;
    if (rotation === 720) rotation = 0;
    generateBtn.style.transitionDuration = "0.7s";
    generateBtn.style.transform = `rotate(${rotation}deg)`;
}

// fetch's Advice on click
generateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    rotateDice();
    getAdvice();
})