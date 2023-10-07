
window.addEventListener('scroll', navigation)

function navigation(e) {
    let navBar = document.querySelector('nav')
    let windowPosition = window.scrollY > 500
    navBar.classList.toggle('position-sticky', windowPosition)
    navBar.classList.toggle('fade', windowPosition)
    navBar.classList.toggle('shadow', windowPosition)
    navBar.classList.toggle('bg-light', windowPosition)
    let topGo = document.getElementById('top-go')
    topGo.classList.toggle('d-block', windowPosition)
    topGo.classList.toggle('fade', windowPosition)
}

let toggler = document.getElementById('toggleBtn')
toggler.addEventListener('click', () => {
    let sidebar = document.getElementById('toggle_sidebar')
    sidebar.classList.toggle('transform-100')
    let crossBtn = document.getElementById('cross_sidebar')
    crossBtn.addEventListener('click', () => {
        sidebar.classList.add('transform-100')
    })
})

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const answer = question.querySelector(".answer");

    question.addEventListener("click", () => {
        if (answer.classList.contains("active")) {
            answer.classList.remove("active");

        } else {
            answer.classList.add("active");
        }
    });
});

let slider1 = document.getElementById('slider-cards_section1')
let slides1 = slider1.querySelectorAll('div.card')
// console.log(slides1)


// })
let counter = 0
let rightBtn1 = document.getElementById('right-btn1')
rightBtn1.addEventListener('click', rightslide)

 class slidingFun{
    constructor(counting,len){
       this.counting = counting;
       this.len = len
       this.myLength = this.len.length
    }
    slideLeft(){
        this.counting = this.counting - 1
        if(this.counting < 0){
            this.counting = this.myLength -4 
        }
        this.mySlides(this.counting)
    }
    slideRight(){
        this.counting = this.counting + 1
        if(this.counting > (this.myLength - 4)){
            this.counting = 0
        }
        this.mySlides(this.counting) 
    }
    mySlides(numbers){
        this.len[0].style.marginLeft = `-${numbers * 25.7}%`
    }
}
let counter2 = 0;

let s1 = new slidingFun(counter,slides1)
function leftslide(e) {
    s1.slideLeft();
}

function rightslide(e) {
   s1.slideRight() 
}

let slider2 = document.getElementById('slider-cards_section2')
let slides2 = slider2.querySelectorAll('div.card')

let btnl2 = document.getElementById('left-btn2')
let btnr2 = document.getElementById('right-btn2')

let s2 = new slidingFun(counter2,slides2)

btnl2.addEventListener('click',leftslide2)
btnr2.addEventListener('click',rightslide2)
function leftslide2(){
    s2.slideLeft()
}
function rightslide2(){
    s2.slideRight()
}
setInterval(()=>{
    rightslide2()
    rightslide()
},1000)
// automate()

isDown = false
let pageX;
let scrollX;
let startX;
let leftBtn1 = document.getElementById('left-btn1')
leftBtn1.addEventListener('click', leftslide)
slider1.addEventListener('mousedown',(e)=>{
    
    if (!isDown) {
        isDown = true;
        startX = e.pageX - slider1.offsetLeft;
        scrollX = slider1.scrollLeft;
      }
})

slider1.addEventListener('mousemove',draging)
function draging(e){
    if(!isDown) return;
    let x = e.pageX - slider1.offsetLeft;
    let totalDistance = (x - startX);
    slider1.scrollLeft = scrollX - totalDistance; 
}
document.addEventListener('mouseup',(e)=>{
    isDown = false
})