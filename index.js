let menu = document.getElementsByClassName("menu");
let home = document.getElementsByClassName("home");
let about = document.getElementsByClassName("about");
let contact = document.getElementsByClassName("contact");
home[0].addEventListener("click", function () {
  let item = `
    <li><a href="#home" class=" list-item-active home"><i class="fa-solid fa-house"></i> Home</a></li>
    <li><a href="#about" class="list-item about"><i class="fa-solid fa-angles-right"></i> About</a></li>
    <li><a href="#contact" class="list-item contact"><i class="fa-solid fa-phone"></i> Contact</a></li>
    `;
  menu[0].innerHTML = item;
});
about[0].addEventListener("click", function () {
  let item = `
    <li><a href="#home" class="list-item home"><i class="fa-solid fa-house"></i> Home</a></li>
    <li><a href="#about" class=" list-item-active about"><i class="fa-solid fa-angles-right"></i> About</a></li>
    <li><a href="#contact" class="list-item contact"><i class="fa-solid fa-phone"></i> Contact</a></li> 
    `;
  menu[0].innerHTML = item;
});
contact[0].addEventListener("click", function () {
  let item = `
    <li><a href="#home" class="list-item home"><i class="fa-solid fa-house"></i> Home</a></li>
    <li><a href="#about" class="list-item about"><i class="fa-solid fa-angles-right"></i> About</a></li>
    <li><a href="#contact" class=" list-item-active contact"><i class="fa-solid fa-phone"></i> Contact</a></li> 
    `;
  menu[0].innerHTML = item;
});
