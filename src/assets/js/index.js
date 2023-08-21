import * as cursorEffects from "cursor-effects";

let isCursorActive = false;
let myCursor = null;

const toggleCursor = () => {
    if (isCursorActive) {
        myCursor.destroy();
    } else {
        myCursor = new cursorEffects.trailingCursor({});
    }
    isCursorActive = !isCursorActive;
};

const toggleButton = document.getElementById("toggleCursor");
toggleButton.addEventListener("click", toggleCursor);