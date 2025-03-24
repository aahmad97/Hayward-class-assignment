"use strict";

function createNote() {
    let input = document.getElementById("input-note");
    let output = document.querySelector(".note-output");
    let inputVal = input.value.trim();

    if (inputVal !== "") {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(inputVal));
        output.appendChild(p);
        input.value = "";

        // Remove "No notes recorded yet..." if it exists
        let defaultText = output.querySelector("p:first-child");
        if (defaultText && defaultText.innerText === "No notes recorded yet...") {
            output.removeChild(defaultText);
        }
    }
}

// Event Listeners
document.getElementById("add-note").addEventListener("click", createNote);

document.getElementById("input-note").addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        createNote();
    }
});

// Click to remove note
document.querySelector(".note-output").addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
        e.target.remove();
    }
});
