function home() {
    const pageHook = document.getElementById("mainContent");
    const title = document.createElement("h1");

    pageHook.appendChild(title);
    title.innerText = "Kennetic Concepts";
}