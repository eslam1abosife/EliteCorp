let slider = document.querySelector(".slider-h")
let upperBar = document.querySelector(".upper-bar")
let navbar = document.querySelector(".navbar")
let imgH1 = document.querySelector(".carousel-one")
let imgH2 = document.querySelector(".carousel-two")
let imgH3 = document.querySelector(".carousel-three")
let over = document.querySelector(".over-lay")

slider.clientHeight = window.innerHeight - (upperBar.clientHeight + navbar.clientHeight)
slider.style.height = `${window.innerHeight - (upperBar.clientHeight + navbar.clientHeight)}px`
imgH1.style.height = `${window.innerHeight - (upperBar.clientHeight + navbar.clientHeight)}px`
imgH2.style.height = `${window.innerHeight - (upperBar.clientHeight + navbar.clientHeight)}px`
imgH3.style.height = `${window.innerHeight - (upperBar.clientHeight + navbar.clientHeight)}px`
over.style.height = `${window.innerHeight - (upperBar.clientHeight + navbar.clientHeight)}px`

//////////////////////////////////////////////////////////////////////////////////////////////

let liActive = document.querySelectorAll(".featured-work ul li")
var imgsOpacity = document.querySelectorAll(".shuffle-imgs .col-md img")
// var imgsOpacity2 = document.querySelectorAll(".shuffle-imgs .col-md img")

liActive.forEach(li => {
    li.addEventListener("click",function (e) {
        handleActive(e)
        imgsOpacity.forEach(img =>{
            img.style.opacity = 0.1;
              if(e.target.dataset.class == ".all"){
                img.style.opacity = 1;
        }else{
            document.querySelectorAll(e.target.dataset.class).forEach(li =>{
                li.style.opacity = 1
            })
        }
        })
    })
})

function handleActive(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active")
    })
    ev.target.classList.add("active")
  
  }