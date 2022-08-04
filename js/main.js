let navOpenBtn = document.querySelector(".site-header__burger")
let siteNav = document.querySelector(".site-header__navbar")

navOpenBtn.addEventListener("click", ()=> {
    siteNav.classList.toggle("site-header__navbar-on")
})

navOpenBtn.addEventListener("click", ()=> {
    siteNav.classList.toggle("site-open")
})
