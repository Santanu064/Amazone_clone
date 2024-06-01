
const loginss_btn = document.querySelector(".Account")
loginss_btn?.addEventListener('click',() => {
  window.location.href = "Login_Page.html";
    // window.open("Login_Page.html", "_blank");;
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
Left_btn?.addEventListener("click", (e) => {
  const slide = document.querySelector(".card_silder");
  slide.scrollLeft -= 1100;
  e.preventDefault();
});


function handleCredentialResponse(response) {
  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    return JSON.parse(atob(base64Url));
  }

  const responsePayload = decodeJwtResponse(response.credential);
  console.log(responsePayload);

  // console.log("ID: " + responsePayload.sub);
  // console.log("Full Name: " + responsePayload.name);
  // console.log("Given Name: " + responsePayload.given_name);
  // console.log("Family Name: " + responsePayload.family_name);
  // console.log("Image URL: " + responsePayload.picture);
  // console.log("Email: " + responsePayload.email);
}
