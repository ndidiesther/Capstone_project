import {data, data_sec, data_last, data_max, data_min} from './database.js'

// target every item in the index.html file

// initialization of page


export const item = document.getElementById("item")
export const secItem = document.getElementById("sec-item")
export const minItem = document.getElementById("min-item")
export const maxItem = document.getElementById("max-item")
export const lastItem = document.getElementById("last-item")
const cart_icon = document.getElementById("cart-icon")


var dropCnt = 0;

if(cart_icon) {
    cart_icon.addEventListener('click', () => {
        if(dropCnt == 0){
        document.querySelector(".cart-dropdown").style.display = "block";
        dropCnt++;
        }
        else{
        document.querySelector(".cart-dropdown").style.display = "none";
        dropCnt = 0;
        }
    })
}



data.forEach((data) => {
    const itemdata = document.createElement("div");
    itemdata.innerHTML = ` <div class="${data.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" id="${data.showNumber}">
    <div class="div_button">
        <button class="shop_button ${data.cart_data}" id="${data.id}">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data.name}</span>
        <span>#${data.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    if(item) {
        item.append(itemdata)
    }
})
data_sec.forEach((data_sec) => {
    const itemdata = document.createElement("div");
    itemdata.innerHTML = ` <div class="${data_sec.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" id="${data_sec.showNumber}">
    <div class="div_button">
        <button class="shop_button ${data_sec.cart_data}" id="${data_sec.id}">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_sec.name}</span>
        <span>#${data_sec.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
   if (secItem) {
    secItem.append(itemdata)
   }
})
data_min.forEach((data_min) => {
    const mindata = document.createElement("div");
    mindata.innerHTML = ` <div class="${data_min.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" id="${data_min.showNumber}">
    <div class="div_button">
        <button class="shop_button ${data_min.cart_data}" id="${data_min.id}">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_min.name}</span>
        <span>#${data_min.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    if(minItem){
        minItem.append(mindata)
    }
})
data_max.forEach((data_max) => {
    const maxdata = document.createElement("div");
    maxdata.innerHTML = ` <div class="${data_max.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" id="${data_max.showNumber}">
    <div class="div_button">
        <button class="shop_button ${data_max.cart_data}" id="${data_max.id}">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_max.name}</span>
        <span>#${data_max.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
  if(maxItem){
    maxItem.append(maxdata)
  }
})
data_last.forEach((data_last) => {
    const lastdata = document.createElement("div");
    lastdata.innerHTML = ` <div class="${data_last.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" id="${data_last.showNumber}">
    <div class="div_button">
        <button class="shop_button ${data_last.cart_data}" id="${data_last.id}">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_last.name}</span>
        <span>#${data_last.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    if(lastItem){
        lastItem.append(lastdata)
    }
})

function showAddToCart(x){
    if (x==0){
       document.querySelector(" .cart").style.display="block";
    }
    else if(x==1){
       document.querySelector(" .cart1").style.display="block";
   }
   else if(x==2){
       document.querySelector(" .cart2").style.display="block";
   }
   else if(x==3){
       document.querySelector(" .cart3").style.display="block";
   }
   else if(x==4){
       document.querySelector(" .cart4").style.display="block";
   }
   else if(x==5){
       document.querySelector(" .cart5").style.display="block";
   }
   else if(x==6){
       document.querySelector(" .cart6").style.display="block";
   }
   else if(x==7){
       document.querySelector(" .cart7").style.display="block";
   }
   else if(x==8){
       document.querySelector(" .cart8").style.display="block";
   }
   else if(x==9){
       document.querySelector(" .cart9").style.display="block";
   }
   else if(x==10){
       document.querySelector(" .cart10").style.display="block";
   } 
   else if(x==11){
       document.querySelector(" .cart11").style.display="block";
   }
   else if(x==12){
       document.querySelector(" .cart12").style.display="block";
   }
   else if(x==13){
       document.querySelector(" .cart13").style.display="block";
   }
   else if(x==14){
       document.querySelector(" .cart14").style.display="block";
   }
   else if(x==15){
       document.querySelector(" .cart15").style.display="block";
   }
   else if(x==16){
       document.querySelector(" .cart16").style.display="block";
   }
   else if(x==17){
       document.querySelector(" .cart17").style.display="block";
   }
   else if(x==18){
       document.querySelector(" .cart18").style.display="block";
   }
   else if(x==19){
       document.querySelector(" .cart19").style.display="block";
   }
       
} 

function removeAddToCart(y) {
    if (y==0){
    document.querySelector(".cart").style.display="none";
    }
    else if (y==1){
    document.querySelector(".cart1").style.display="none";
    }
    else if (y==2){
    document.querySelector(".cart2").style.display="none";
    }
    else if (y==3){
    document.querySelector(".cart3").style.display="none";
    }
    else if (y==4){
    document.querySelector(".cart4").style.display="none";
    }
    else if (y==5){
    document.querySelector(".cart5").style.display="none";
    }
    else if (y==6){
    document.querySelector(".cart6").style.display="none";
    }
    else if (y==7){
    document.querySelector(".cart7").style.display="none";
    }
    else if (y==8){
    document.querySelector(".cart8").style.display="none";
    }
    else if (y==9){
    document.querySelector(".cart9").style.display="none";
    }
    else if (y==10){
    document.querySelector(".cart10").style.display="none";
    }
    else if (y==11){
    document.querySelector(".cart11").style.display="none";
    }
    else if (y==12){
    document.querySelector(".cart12").style.display="none";
    }
    else if (y==13){
    document.querySelector(".cart13").style.display="none";
    }
    else if (y==14){
    document.querySelector(".cart14").style.display="none";
    }
    else if (y==15){
    document.querySelector(".cart15").style.display="none";
    }
    else if (y==16){
    document.querySelector(".cart16").style.display="none";
    }
    else if (y==17){
    document.querySelector(".cart17").style.display="none";
    } 
    else if (y==18){
    document.querySelector(".cart18").style.display="none";
    }
    else if (y==19){
    document.querySelector(".cart19").style.display="none";
    }

}
if (item) {
    item.addEventListener('mouseover', e => {
        console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        showAddToCart(x)
    
    })
    item.addEventListener('mouseout', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        removeAddToCart(x)
    
    })
}
if (secItem) {
    secItem.addEventListener('mouseover', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        showAddToCart(x)
    
    })
    secItem.addEventListener('mouseout', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        removeAddToCart(x)
    
    })
}
if (minItem) {
    minItem.addEventListener('mouseover', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        showAddToCart(x)
    
    })
    minItem.addEventListener('mouseout', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        removeAddToCart(x)
    
    })
}
if (maxItem) {
    maxItem.addEventListener('mouseover', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        showAddToCart(x)
    
    })
    maxItem.addEventListener('mouseout', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        removeAddToCart(x)
    
    })
}
    
if (lastItem) {
    lastItem.addEventListener('mouseover', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        showAddToCart(x)
    
    })
    lastItem.addEventListener('mouseout', e => {
        // console.log(e.target, e.target.parentElement)
        let x = +e.target.parentElement.id
        // console.log("show number is ", +x)
        removeAddToCart(x)
    
    })
}


