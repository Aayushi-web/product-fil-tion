const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const ball= document.querySelector(".toggle-ball")
const items= document.querySelectorAll(".container,.movie-list-title,.movie-list-item-title,.nav-container,.sidebar,.left-menu-icon,.toggle")

arrows.forEach((arrow,i)=>{
   
   const itemNumber = movieLists[i].querySelectorAll("img").length;
   let clickCounter=0;

arrow.addEventListener("click",()=>{
    const ratio= Math.floor(window.innerWidth/270);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio)>=0){
   movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`}
   else{
    movieLists[i].style.transform="translateX(0)";
    clickCounter=0;
   }
})
// console.log(movieLists[i].querySelectorAll("img").length)

})
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
//toogle
console.log(Math.floor(window.innerWidth/270))