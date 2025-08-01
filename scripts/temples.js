const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show")
    hambutton.classList.toggle("show")
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = "Last Modification: " + document.lastModified;