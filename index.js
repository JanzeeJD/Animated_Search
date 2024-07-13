const searchBar = document.querySelector
(".search_container")

const magnifier = document.querySelector(".magnifier")

magnifier.addEventListener("click", ()=>{
  searchBar.classList.toggle("active")
})