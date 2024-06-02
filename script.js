
const loginss_btn = document.querySelector(".Account")
loginss_btn?.addEventListener('click',() => {
  window.location.href = "Login_Page.html";
  //open this page on a new tab to comment out the code below
   // window.open("Login_Page.html", "_blank");
});


const drawer_login = document.querySelector("#login");
drawer_login?.addEventListener("click", () => {
  window.location.href = "Login_Page.html";
});

const Left_btn = document.querySelector(".l_btn")
const Right_btn = document.querySelector(".r_btn");

Right_btn?.addEventListener('click' , (e)=>{
    const slide = document.querySelector(".card_silder")
    slide.scrollLeft+=1200;
    e.preventDefault();
})
Left_btn.addEventListener("click", (e) => {
  const slide = document.querySelector(".card_silder");
  slide.scrollLeft -= 1100;
  e.preventDefault();
});

const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
const profile_img = document.querySelector(".drw-img")
const b_log_svg = document.querySelector(".bi");
let getobj = localStorage.getItem("user")
console.log(getobj);
if (getobj != null){
  let objw = JSON.parse(getobj);
  document.querySelector(".hello").innerHTML = `Deliver to ${objw.given_name}`;
  document.querySelector("#wel-log").innerHTML=`Hello, ${objw.given_name}`;
  document.querySelector("#offcanvasExampleLabel").innerHTML = `Hello, ${objw.given_name}`;
  if (objw.picture!= null || undefined) {
     profile_img.classList.remove("d-none");
     profile_img.src = `${objw.picture}`;
  }else{
    b_log_svg.classList.remove("d-none");
  }
  logout.classList.remove("d-none")
  //console.log(objw); 
}
else{
    login.classList.remove("d-none");
    b_log_svg.classList.remove("d-none");
}
logout.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
