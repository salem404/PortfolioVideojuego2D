/**
 * Cambia la visibilidad de las tabs
 *
 * @param {*} pageName
 */
function openPage(pageName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("sidebar__tablink")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = ""
  }
  document.getElementById(pageName).style.display = "block"
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click()

var coll = document.getElementsByClassName("collapsible")
var i

for (i = 0; i < coll.length; i++) {
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

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none"
}

var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("demo")
  var captionText = document.getElementById("caption")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  captionText.innerHTML = dots[slideIndex - 1].alt
}
