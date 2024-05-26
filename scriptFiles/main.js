import { createHtmlCards } from "./catagory1.js";
import { createJsCards } from "./catagory2.js";



createHtmlCards();
const boxes = document.getElementsByClassName("box");
const HTML_BTN = document.getElementById("html-btn");
const JS_BTN = document.getElementById("js-btn");
const HTML_ITEMS = document.querySelector(".portfolio-items")

HTML_BTN.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        for (const box of boxes) {
            box.remove();
        }
    }
    setTimeout(createHtmlCards, 200)
    HTML_ITEMS.classList.remove("fade-in")
})


JS_BTN.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        for (const box of boxes) {
            box.remove();
        }
    }
    setTimeout(createJsCards, 200)
    HTML_ITEMS.classList.remove("fade-in")
})
