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
          stock,
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
                    <div class="dropdown " style="width: 15%;">
                       <select class="form-select" id="mySelect" aria-label="Multiple select example">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
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
  totalPrice();
  processBar();
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

function totalPrice() {
  let total = 0;
  basket.map((data) => {
    let price = Number(data.price);
    total += price;
  });
  document.querySelector(".cart-totalprize").innerHTML=`Subtotal (${basket.length} item):${total.toFixed(2)}`;
  document.querySelector(".subTotla-txt").innerHTML=`Subtotal (${basket.length} item):${total.toFixed(2)}`;
  return total.toFixed(2);
}


// document.addEventListener("DOMContentLoaded", function() {
//   const selectElement = document.querySelector('.form-select');
//   // const displayElement = document.getElementById('selectedValueDisplay');

//   selectElement.addEventListener('change', function() {
//     const selectedValue = selectElement.value;
//     console.log( selectedValue);
//   });
// });

const selectElement = document.getElementById("mySelect");

  selectElement.addEventListener("change", function () {
    const selectedValue = this.value;
    console.log("Selected value:", selectedValue);
  });

function processBar() {
  let total = Math.floor(totalPrice());
  console.log(total);
  if (total > 100) {
    document.querySelector(".progress-bar").style.width = `100%`;
  }
  else if (total >0 && total < 100) {
    document.querySelector(".progress-bar").style.width = `${total}%`; 
  }
  else {
    document.querySelector(".progress-bar").style.width = `0%`;
  }
}
