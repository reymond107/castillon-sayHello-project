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