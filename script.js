const reveals=document.querySelectorAll('.reveal')

window.addEventListener('scroll',()=>{

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight
let elementTop=reveals[i].getBoundingClientRect().top

if(elementTop < windowHeight-100){
reveals[i].classList.add('active')
}

}

})