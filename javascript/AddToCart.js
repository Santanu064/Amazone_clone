document.querySelector(".nav-logo").addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.querySelector(".Account").addEventListener("click", () => {
  window.location.href = "../HTML/Login_Page.html";
});

let basket = JSON.parse(localStorage.getItem("addToCart_data"));

function calculate() {
  let total = basket.length;
  document.querySelector(".crt_num").innerHTML = total;
}

function generateCard() {
  if (basket.length !== 0) {
    console.log(basket);
    document.querySelector(".addToCart_pro").innerHTML = basket
      .map((data, key ) => {
        let {
          description,
          thumbnail,
          discountPercentage,
          availabilityStatus,
          minimumOrderQuantity,
          price,
        } = data;
       
        return `
                <div class="add-continents">
                <div class="content-pic">
                    <img style="height: 180px; width:100% ;" src="${thumbnail}" alt=""/>
                </div>
                <div class="cart-title">
                    <div class="cart-innerTitle-left">
                    <p class="cart-titleName">${description}</p>
                    <p class="cart-inStock">${availabilityStatus}</p>
                    <p class="cart-Shipping">Eligible for FREE Shipping</p>
                    <p class="cart-XL"><span class="cart-span1">Size</span>:XL</p>
                    <div class="dropdown">
                       <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Qut :
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" onclick="quantityChanged()">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                      </div>
                        <div class="del-icon" onclick="RemovePro(${key})">
                           <i class="fa-solid fa-trash" ></i>
                        </div>
                        </div>
                        <div class="cart-innerTitle-right">
                            <p class="cart-innerTitle-left-offtag">${discountPercentage}%off Limited time deal</p>
                            <p class="cart-innerTitle-left-pricetag"> <strong style="font-weight: 700;">${price}</strong></p>
                        </div>
                    </div>
                 </div>
                `;
      })
      .join("");
  }
   calculate();
}
generateCard();

function RemovePro(id) {
  basket = basket.filter((data) => data.id != basket[id].id);
  localStorage.setItem("addToCart_data", JSON.stringify(basket));
  calculate();
  generateCard();
  if (basket.length == 0) {
    window.location.reload("../HTML/addTocart.html");
  }
}

function quantityChanged(e) {
  let quentity = e.target;
  console.log(quentity);
  if (isNaN(quentity.value) || quentity.value <= 0) {
    quentity.value = 1;
  }
  generateCard();
}
