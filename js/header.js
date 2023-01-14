function header() {
    console.log("Working");
    const pageHook = document.getElementById("mainContent");

    const wrap = document.createElement("div");

    pageHook.appendChild(wrap);

    wrap.classList.add("navWrap");
}