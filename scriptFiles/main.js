import { createHtmlCards } from "./catagory1.js";
import { createJsCards } from "./catagory2.js";



createHtmlCards();
const boxes = document.getElementsByClassName("box");
const HTML_BTN = document.getElementById("html-btn");
const JS_BTN = document.getElementById("js-btn");
const HTML_ITEMS = document.querySelector(".portfolio-items");
const JS_ITEMS = document.querySelector(".js-items")
const serviceDiv = document.querySelector(".service");
HTML_BTN.addEventListener("click", () => {
    HTML_ITEMS.style.display = "grid";
    JS_ITEMS.style.display = "none"
    for (let i = 0; i < 4; i++) {
        for (const box of boxes) {
            box.remove();
        }
    }
    setTimeout(createHtmlCards, 200)
    HTML_ITEMS.classList.remove("fade-in")
    HTML_ITEMS.removeAttribute("style");
    serviceDiv.removeAttribute("style");
})


JS_BTN.addEventListener("click", () => {
    HTML_ITEMS.style.display = "none";
    JS_ITEMS.style.display = "grid";
    for (let i = 0; i < 4; i++) {
        for (const box of boxes) {
            box.remove();
        }
    }
    setTimeout(createJsCards, 200)
    HTML_ITEMS.classList.remove("fade-in")
})
