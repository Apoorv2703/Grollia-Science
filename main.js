let next=document.querySelector("#next")
let prev=document.querySelector("#prev")
let slider=document.querySelector("#slider")


let index = 0;

function slideNext() {
  index++;
  slider.style.transform = `translateX(-${index * 200}px)`;

  if (index <= slider.children.length - 1) {
    let num=Math.floor(Math.random()*4)
    console.log(num)
    setTimeout(() => {
      let first = slider.children[num].cloneNode(true);
      slider.appendChild(first);
    }, 300);
  }
}

function slidePrev() {

    index--;
    slider.style.transform = `translateX(${-index * 200}px)`;
    if (index <= slider.children.length - 1) {
    let num=Math.floor(Math.random()*4)
    console.log(num)
    setTimeout(() => {
      let first = slider.children[num].cloneNode(true);
      slider.appendChild(first);
    }, 300);
  }
  
}

next.addEventListener("click",slideNext)
prev.addEventListener("click",slidePrev)


let loading=document.querySelector("#loading")

  window.addEventListener("load",()=>{
  loading.style.display="none"
})

