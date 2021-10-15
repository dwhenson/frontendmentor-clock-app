// leave toggle hidden if no JS
const toggle = document.querySelector(".toggle");
toggle.removeAttribute("hidden");

// test if toggle is working
const sections = [...document.querySelectorAll("section")];

toggle.addEventListener("change", function () {
  for (const section of sections) {
    console.log(section);
    section.classList.toggle("translate");
  }
});
