const text = "Bringing Hope to Forgotten Talents";
const heading = document.getElementById("animatedHeading");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heading.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 25);
    
  }
}
heading.textContent="";
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});