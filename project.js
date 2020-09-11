function sayHi() {
    let x, text;
    x = document.querySelector("#text").value;

    if (x === "") {
        text = "Hello World!"
    } else {
        text = `Hello ${x}`
    }
    document.querySelector(".title").textContent = text;
}

const display = document.querySelector(".title");
const nameChosen = document.getElementById("name");
const nameKeys = document.getElementById("nameKeys");
const hello = document.getElementById("hello");
const goodbye = document.getElementById("goodbye");


nameKeys.onclick = event => {
    if (event.target.type == "submit") {
        nameChosen.value = event.target.innerHTML;
        display.innerHTML = nameChosen.value;
    }
}

hello.onclick = () => {
    display.innerHTML = "Hello " + nameChosen.value;
}

goodbye.onclick = () => {
    if (goodbye.innerHTML === "Good bye") {
        display.innerHTML = "Good bye " + nameChosen.value;
        goodbye.innerHTML = "Clear";
    } else if (goodbye.innerHTML === "Clear") {
        display.innerHTML = "Hi There!";
        goodbye.innerHTML = "Good bye";
    } else {
        display.innerHTML = "";
        nameChosen.value = "";
        goodbye.innerHTML = "Good bye";
    }
}