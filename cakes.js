ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.RVC', { delay: 300 });
ScrollReveal().reveal('.text-box', { delay: 300, origin: 'right' });


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})