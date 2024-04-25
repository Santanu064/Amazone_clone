const login_btn = document.querySelector(".Account")
login_btn.addEventListener('click',() => {
    window.location.href = "Login_Page.html";
});

const Left_btn = document.querySelector(".l_btn")
const Right_btn = document.querySelector(".r_btn");

Right_btn.addEventListener('click' , (e)=>{
    console.log("done");
    const slide = document.querySelector(".card_silder")
    slide.scrollLeft+=1200;
    e.preventDefault();
})
Left_btn.addEventListener("click", (e) => {
  console.log("done");
  const slide = document.querySelector(".card_silder");
  slide.scrollLeft -= 1100;
  e.preventDefault();
});
