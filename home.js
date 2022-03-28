
let nav = document.querySelector('nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }
})

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('opened')) {
    nav.classList.remove('opened');
  } else {
    nav.classList.add('opened');
  }
})
//----------------------------------------------------------------
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.btn_dropbtn')) {
    var btn_dropdowns = document.getElementsByClassName("btn_dropdown-content");
    var i;
    for (i = 0; i < btn_dropdowns.length; i++) {
      var openDropdown = btn_dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
