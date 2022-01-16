window.addEventListener("load", function(){

const video = document.querySelector('video');
const playStop = document.querySelector('.play-stop');

playStop.addEventListener("click", function(){
   
    video.play();
    playStop.style.display= "none";
});

video.addEventListener("click", function(){
    video.pause();
    playStop.style.display= "block";
});


const btnForm = document.querySelector('.btn-form');
const list = document.querySelector('.lists');
const itemList = document.querySelector(".lists-1")
const btnFormOne = document.querySelector('.btn-form1');

btnForm.addEventListener("click", function(){
    if(list.style.display === "none" || list.style.display === ''){
        $(".lists").show(300);
    } else {
        $(".lists").hide(300);
    }
})


list.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        btnForm.textContent= event.target.getAttribute('data-value');
        $(".lists").hide(300);
    }
})

btnFormOne.addEventListener("click", function(){
    if(itemList.style.display === 'none' || itemList.style.display === ''){
        $('.lists-1').show(300);
    } else {
        $('.lists-1').hide(300);
    }
})

itemList.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
        btnFormOne.textContent = event.target.getAttribute('data-value');
        $('.lists-1').hide(300);
    }
})



const buttonRight = document.querySelector(".right")
const hidden = document.querySelector(".hidden-menu")

buttonRight.addEventListener('click', function(){
    console.log(hidden);
    if(hidden.style.display === "none" || hidden.style.display === " "){
        $(".hidden-menu").slideDown(300);
    } else {
        $(".hidden-menu").slideUp(300);
    }
})


});