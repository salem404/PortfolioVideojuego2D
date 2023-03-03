// ---------------------------------------------------------------- Tabs
/**
 * Cambia la visibilidad de las tabs
 *
 */
function openPage(pageName, elmnt, color = "var(--naranja)") {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("sidebar__tablink")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = ""
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block"

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color
}

// Hace click a la tab preestablecida
document.getElementById("defaultOpen").click()

// ---------------------------------------------------------------- Acordeón

/**
 * Menú acordeón
 */
function acordeon() {
  let tablinks = document.getElementsByClassName("sidebar__tablink")
  for (i = 0; i < tablinks.length; i++) {
    console.log("a")
    if (tablinks[i].style.display == "block") {
      tablinks[i].style.display = "none"
    } else {
      tablinks[i].style.display = "block"
    }
  }
}

// ---------------------------------------------------------------- Lighthouse

let coll = document.getElementsByClassName("collapsible")

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var content = this.nextElementSibling
    if (content.style.display === "block") {
      content.style.display = "none"
    } else {
      content.style.display = "block"
    }
  })
}

function openModal() {
  document.getElementById("myModal").style.display = "block"
}

function closeModal() {
  document.getElementById("myModal").style.display = "none"
}

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("demo")
  let captionText = document.getElementById("caption")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  captionText.innerHTML = dots[slideIndex - 1].alt
}
