const navBtnOne = document.querySelector("#btn-one");
const navBtnTwo = document.querySelector("#btn-two");
const navBtnThree = document.querySelector("#btn-three");


navBtnOne.addEventListener("click", function () {
    document.getElementById("hide-one").style.display = "flex";
    document.getElementById("hide-two").style.display = "none";
    document.getElementById("hide-three").style.display = "none";
});

navBtnTwo.addEventListener("click", function () {
    document.getElementById("hide-one").style.display = "none";
    document.getElementById("hide-two").style.display = "flex";
    document.getElementById("hide-three").style.display = "none";

})

navBtnThree.addEventListener("click", function () {
    document.getElementById("hide-one").style.display = "none"
    document.getElementById("hide-two").style.display = "none"
    document.getElementById("hide-three").style.display = "flex"
});
const colors = [
    'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta',
    'teal', 'lime', 'indigo', 'maroon', 'olive', 'navy', 'gold', 'violet', 'peach', 'turquoise',
    'lavender', 'salmon', 'sienna', 'coral', 'peru', 'slategray', 'skyblue', 'chocolate', 'thistle',
    'orchid', 'darkgreen', 'darkslateblue', 'midnightblue', 'firebrick', 'dodgerblue',
    'darkgoldenrod', 'forestgreen', 'crimson', 'darkorchid', 'darkcyan', 'darkolivegreen', 'darkmagenta',
    'darkred', 'darkorange', 'darkblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink'
];

const btnNormal = document.getElementById("btn-normal");
const colorAreaOne = document.getElementById("normal-color-area");
colorDisplayOne = document.querySelector("#show-color-one");

btnNormal.addEventListener("click", function () {
    const colorPickOne = colors[Math.floor(Math.random() * colors.length)];
    colorAreaOne.style.backgroundColor = colorPickOne;
    colorDisplayOne.innerHTML = colorPickOne;
});

const colorDisplayTwo = document.querySelector("#show-color-two");

function fetch() {
    const get = document.getElementById("get").value;
    const getTwo = document.getElementById("getTwo").value;
    const getThree = document.getElementById("getThree").value;
    document.getElementById("put").value = get;
    document.getElementById("putTwo").value = getTwo;
    document.getElementById("putThree").value = getThree;
    const newColor = `rgb(${get}, ${getTwo}, ${getThree})`;
    console.log(newColor);
    const boxColor = document.getElementById("rgb-color-area");
    boxColor.style.backgroundColor = newColor;
    colorDisplayTwo.innerHTML = `rgb(${get}, ${getTwo}, ${getThree})`;

}

// this function down here is for the RGB Section to work

function fetchMoblie() {

    addEventListener("touchmove", function () {
        const getOne = document.getElementById("get").value;
        const getTwo = document.getElementById("getTwo").value;
        const getThree = document.getElementById("getThree").value;
        document.getElementById("put").value = getOne;
        document.getElementById("putTwo").value = getTwo;
        document.getElementById("putThree").value = getThree;
        const newColor = `rgb(${getOne}, ${getTwo}, ${getThree})`;
        const boxColor = document.getElementById("rgb-color-area");
        boxColor.style.backgroundColor = newColor;
        console.log(newColor)
        colorDisplayTwo.innerHTML = `rgb(${getOne}, ${getTwo}, ${getThree})`;
    });
}

fetchMoblie()

const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const btnTres = document.getElementById("hexo");
const colorAreaThree = document.getElementById("hexo-color-area");
const colorDisplayThree = document.querySelector("#show-color-three");

let randomHexColor = "#"

hexoCount = 0;

btnTres.addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        let value = arrayOfColorFunctions[index];
        randomHexColor += value
    }
    colorAreaThree.style.backgroundColor = randomHexColor;
    console.log(randomHexColor);
    colorDisplayThree.innerHTML = randomHexColor;
    newHexo()
})

function newHexo() {
    randomHexColor = "#"
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


