window.addEventListener("DOMContentLoaded", () => {

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const location = document.getElementById("location");
  const sections = document.querySelectorAll("a");

  let index = 0;

  prev.addEventListener('click', () => {
    if (index === 0) index = sections.length - 1;
    index--;
    location.innerText = sections[index].innerText;
  })

  next.addEventListener('click', () => {
    if (index === sections.length - 1) index = 0;
    index++;
    location.innerText = sections[index].innerText;
  })

})
