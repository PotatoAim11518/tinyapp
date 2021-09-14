window.addEventListener("DOMContentLoaded", () => {

  const body = document.querySelector("body");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const location = document.getElementById("location");
  const sections = document.querySelectorAll("a");
  const navigation = document.querySelector("nav");

  let index = 0;

  prev.addEventListener('click', () => {
    if (index === 0) {
      index = sections.length - 1;
    } else {
      index--;
    }
    location.innerText = sections[index].innerText;
    if (location.innerText === "grave") {
      body.classList.add('dark');
      next.classList.add('dark');
      prev.classList.add('dark');
      navigation.classList.add('dark');
      location.classList.add('spanDark');
    } else {
      body.classList.remove('dark');
      next.classList.remove('dark');
      prev.classList.remove('dark');
      navigation.classList.remove('dark');
      location.classList.remove('spanDark');
    }
  })

  next.addEventListener('click', () => {
    if (index === sections.length - 1) {
      index = 0
    } else {
      index++;
    }
    location.innerText = sections[index].innerText;
    if (location.innerText === "grave") {
      body.classList.add('dark');
      next.classList.add('dark');
      prev.classList.add('dark');
      navigation.classList.add('dark');
      location.classList.add('spanDark');
    } else {
      body.classList.remove('dark');
      next.classList.remove('dark');
      prev.classList.remove('dark');
      navigation.classList.remove('dark');
      location.classList.remove('spanDark');
    }

  })

  location.addEventListener('change', () => {
  })

})
