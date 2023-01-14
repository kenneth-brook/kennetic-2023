function header() {
    const pageHook = document.getElementById("mainContent");
    const wrap = document.createElement("div");
    const logolink = document.createElement("a");
    const logo = document.createElement("img");

    pageHook.appendChild(wrap);
    wrap.appendChild(logolink);
    logolink.href = "index.html";
    logolink.appendChild(logo);
    logo.src = "img/kclogo.png";

    wrap.classList.add("navWrap");
    logo.classList.add("logo");
}