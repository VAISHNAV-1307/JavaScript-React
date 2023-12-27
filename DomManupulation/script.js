let a = document.querySelector("h1");
a.innerHTML = "changed";
a.style.color = "red";
a.addEventListener("click", function () {
    a.innerHTML = "badalala";
    a.style.color = "white";
    a.style.backgroundColor = "#000";
});


