let slider1 = document.querySelector('.slider1 .list1');
let items1 = document.querySelectorAll('.slider1 .list1 .item1');
let next1 = document.getElementById('next1');
let prev1 = document.getElementById('prev1');
let dots1 = document.querySelectorAll('.slider1 .dots1 li');

let lengthItems1 = items1.length - 1;
let active1 = 0;
next1.onclick = function(){
    active1 = active1 + 1 <= lengthItems1 ? active1 + 1 : 0;
    reloadSlider1();
}
prev1.onclick = function(){
    active1 = active1 - 1 >= 0 ? active1 - 1 : lengthItems1;
    reloadSlider1();
}



function reloadSlider1(){
    slider1.style.left = -items1[active1].offsetLeft + 'px';
    // 
    let last_active1_dot = document.querySelector('.slider1 .dots1 li.active1');
    last_active1_dot.classList.remove('active1');
    dots2[active1].classList.add('active1');

    
}

dots1.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active1 = key;
         reloadSlider1();
    })
})
window.onresize = function(event) {
    reloadSlider1();
};
