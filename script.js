
// Page functionallity

	window.onscroll = function() {myFunction()}; 
	
	var navlist = document.querySelector("header"); 
	var sticky = navlist.offsetTop; 
	
	/* Function to stick the nav bar */
	function myFunction() { 
		if (window.pageYOffset >= sticky) { 
			navlist.classList.add("sticky") 
		} 
		else { 
			navlist.classList.remove("sticky"); 
		} 
	} 

document.querySelector(".nav-cart").addEventListener("click", () => {
  window.location.href="./HTML/addTocart.html";
})

document.querySelector(".logo").addEventListener("click" , () => {
  window.location.href="./index.html"
})


const loginss_btn = document.querySelector(".Account");
loginss_btn?.addEventListener("click", () => {
  window.location.href = "./HTML/Login_Page.html";
  //open this page on a new tab to comment out the code below
  // window.open("Login_Page.html", "_blank");
});

const drawer_login = document.querySelector("#login");
drawer_login?.addEventListener("click", () => {
  window.location.href = "Login_Page.html";
});

const Left_btn = document.querySelector(".l_btn");
const Right_btn = document.querySelector(".r_btn");

Right_btn?.addEventListener("click", (e) => {
  const slide = document.querySelector(".card_silder");
  slide.scrollLeft += 1200;
  e.preventDefault();
});
Left_btn.addEventListener("click", (e) => {
  const slide = document.querySelector(".card_silder");
  slide.scrollLeft -= 1100;
  e.preventDefault();
});


// Get data from google creadintcial

const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
const profile_img = document.querySelector(".drw-img");
const b_log_svg = document.querySelector(".bi");

function show_Log_data() {
  let getobj = localStorage.getItem("user");
  if (getobj != null) {
    let objw = JSON.parse(getobj);
    document.querySelector(".hello").innerHTML = `Deliver to ${objw.given_name}`;
    console.log(objw);
    document.querySelector("#wel-log").innerHTML = `Hello, ${objw.given_name}`;
    console.log();
    
    document.querySelector("#offcanvasExampleLabel").innerHTML = `Hello, ${objw.given_name}`;

    if (objw.picture != null || undefined) {
      profile_img.classList.remove("d-none");
      profile_img.src = `${objw.picture}`;
    } else {
      b_log_svg.classList.remove("d-none");
    }
    logout.classList.remove("d-none");
    console.log(objw);
  } else {
    login.classList.remove("d-none");
    b_log_svg.classList.remove("d-none");
  }
}

window.addEventListener("load", show_Log_data());

logout.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

// Home page search button

 const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-icon");

inputBox.addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
     search(inputBox.value);
   }
 });

searchBtn?.addEventListener("click", function () {
   search(inputBox.value);
   });

function search(query) {
   const url = `https://dummyjson.com/products/search?q=${query}`;

   fetch(url)
    .then((response) => response.json())
         .then((data) => {
         dispalydata(data)
     })
     .catch((error) => {
       console.error(error);
     });
 }

// search produch by category

for (var i = 0; i < document.querySelectorAll(".boxin-content").length; i++)
 {
  document.querySelectorAll(".boxin-content")[i]?.addEventListener("click",(e) => {
      let querys = e.currentTarget.id;
         if (querys != "#"|| null || undefined) {
           apiData(querys);
         }
    });
  }
for (var i = 0; i < document.querySelectorAll(".card").length; i++) {
  document.querySelectorAll(".card")[i]?.addEventListener("click", (e) => {
      let querys = e.currentTarget.id;
      if (querys!= "#") {
        apiData(querys)
      }
    });
}

async function apiData (query) {
   const urls = `https://dummyjson.com/products/category/${query}`;

    await fetch(urls)
     .then((response) => response.json())
     .then((data) => {
       dispalydata(data);
     });
}

let apiFetchProducts = []; 

function dispalydata(data) {
  
   apiFetchProducts = data;
  if (data.products.length!= 0) {
    document.querySelector(".searchcard").classList.remove("d-none");
    document.querySelector("#carouselExample").classList.add("d-none");
    document.querySelector(".bg").classList.add("d-none");
  }
  else{
        document.querySelector(".searchcard").classList.add("d-none");
        document.querySelector("#carouselExample").classList.remove("d-none");
        document.querySelector(".bg").classList.remove("d-none");
  }

  document.querySelector(".searchcard").innerHTML = data.products
    .map((item,key ) => {
      let {
        title,
        price,
        thumbnail,
        description,
        rating,
        stock,
        shippingInformation,
        discountPercentage,
        availabilityStatus,
        returnPolicy,
      } = item;
      return (`
       <div class="rsbox">
        <div class="rsimg-box">
        <img class="thumbnail" src=${thumbnail} alt=${title}>
        </div>
        <div class="bottom">
        <h3 class="apititle">${title}</h3>
        <p class="apidesc">${description}</p>
        <p class="prating">${rating}<p>
        <p class="pstock">${stock} products are left<p>
        <p class="apiPrice"><span class="discpersent">-${discountPercentage}%</span>${price}</p>
        <p class="apiabality">${availabilityStatus}</p>
        <p class="apishipinformatin">${shippingInformation}</p>
        <p class="apireturnpol">${returnPolicy}</p>
        </div>
        <div class="apiBwraper">
                <button class ="apiButton" onclick ="addToCart(${key})"> Add to cart </button>
                </div>
        </div>
        `);
        
    })
    .join(" ");
}

  let basket = JSON.parse(localStorage.getItem("addToCart_data")) || [];

  function addToCart(key) {
    const pr = apiFetchProducts.products[key];
    basket.push(pr);
    localStorage.setItem("addToCart_data", JSON.stringify(basket));
    calculate();
  }

  function calculate() {
    let total = basket.length;
    document.querySelector(".crt_num").innerHTML = total;
  }
window.addEventListener("load", calculate());