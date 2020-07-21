// header fixed

window.onscroll = function(){
    const docScrollTop =document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>70){
            document.querySelector("header").classList.add("fixed");
        }
        else{
            document.querySelector("header").classList.remove("fixed");
        }

    }
}


// 

// toggle effecct/////////////////


const hamBurger= document.querySelector('.ham-burger');

hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
});

// -------------------------------------------------------------------

// const navbarBtn=document.querySelector("#fliter-btn").children;
// const items = document.querySelector(".gallery-content").children;

// for(let i=0; i<navbarBtn.length; i++){

//     navbarBtn[i].addEventListener("click",function(){
//         for(let j=0;j<navbarBtn.length;j++){
//             navbarBtn[j].classList.remove("active");
//         }
//         this.classList.add("active");
//         const target=this.getAttribute("dara-target");

//         for(k=0; k<items.length; k++){
//             items[k].style.display="none";

//             if(target == items[k].getAttribute("data-id")){
//                 items[k].style.display="block";
//             }
//             if(target =="all"){
//                 items[k].style.display="block"; 
//             }
//         }
//     });
// };


const closeLightbox = document.querySelector('.close-lightbox');
const lightbox= document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img");

     closeLightbox.addEventListener("click",function(){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
     });

const gallery = document.querySelector(".gallery-content");
const galleryItem = gallery.querySelectorAll(".img");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
       lightboxImage.src= element.querySelector("img").getAttribute("src");
    });
})
