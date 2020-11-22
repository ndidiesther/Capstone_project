const item = document.getElementById("item")
const secItem = document.getElementById("sec-item")
const minItem = document.getElementById("min-item")
const maxItem = document.getElementById("max-item")
const lastItem = document.getElementById("last-item")


var dropCnt = 0;
function showDrop(){
    if(dropCnt == 0){
    document.querySelector(".cart-dropdown").style.display = "block";
    dropCnt++;
    }
    else{
    document.querySelector(".cart-dropdown").style.display = "none";
    dropCnt = 0;
    }
}
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
    
    var cmp= document.getElementById("inc");
        // function IncItems(){
        //     cmp.innerHTML = parseInt(cmp.innerHTML) +1;
        // }
        

const data = [{
    id: 1,
    name: "Brown Brim",
    price: 25,
    quantity: 1,
    image: 'url("https://i.ibb.co/ZYW3VTp/brown-brim.png")',
    basketImg: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    cart_data: "cart",
    showNumber: 0,
    classStyleName: "brown_brim"
}, {
    id:2,
    name: "Blue Beanie",
    price: 18,
    quantity: 1,
    image: 'url("https://i.ibb.co/ypkgK0X/blue-beanie.png")',
    basketImg: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    cart_data: "cart1",
    showNumber: 1,
    classStyleName: "blue_beanie"
}, {
    id:3,
    name: "Brown Cowboy",
    price: 35,
    quantity: 1,
    image: 'url("https://i.ibb.co/QdJwgmp/brown-cowboy.png")',
    basketImg:'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    cart_data: "cart2",
    showNumber: 2,
    classStyleName: "brown_cowboy"

},{
    id:4,
    name: "Grey Brim",
    price: 25,
    quantity: 1,
    image: 'url("https://i.ibb.co/RjBLWxB/grey-brim.png")',
    basketImg:'https://i.ibb.co/RjBLWxB/grey-brim.png',
    cart_data: "cart3",
    showNumber: 3,
    classStyleName: "grey_brim"
}]

const data_sec = [{
    id:5,
    name: "Adidas NMD",
    price: 220,
    quantity: 1,
    image: ' url("https://i.ibb.co/0s3pdnc/adidas-nmd.png")',
    basketImg:'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
    cart_data: "cart4",
    showNumber: 4,
    classStyleName: "adidas"
}, {
    id:6,
    name: "Adidas Yeezy",
    price: 280,
    quantity: 1,
    image: 'url("https://i.ibb.co/ypkgK0X/blue-beanie.png")',
    basketImg:'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    cart_data: "cart5",
    showNumber: 5,
    classStyleName: "yeezy"
}, {
    id:7,
    name: "Black Converse",
    price: 110,
    quantity: 1,
    image: 'url("https://i.ibb.co/QdJwgmp/brown-cowboy.png")',
    basketImg:'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    cart_data: "cart6",
    showNumber: 6,
    classStyleName: "black_converse"

},{
    id:8,
    name: "Nike AirForce",
    price: 160,
    quantity: 1,
    image: 'url("https://i.ibb.co/RjBLWxB/grey-brim.png")',
    basketImg:'https://i.ibb.co/RjBLWxB/grey-brim.png',
    cart_data: "cart7",
    showNumber: 7,
    classStyleName: "nike"
}]

const data_min = [{
    id:9,
    name: "Black Shearling",
    price: 125,
    quantity: 1,
    image: 'url("https://i.ibb.co/XzcwL5s/black-shearling.png")',
    basketImg:'https://i.ibb.co/XzcwL5s/black-shearling.png',
    cart_data: "cart8",
    showNumber: 8,
    classStyleName: "black_shearling"
}, {
    id:10,
    name: "Blue Jean Jacket",
    price: 90,
    quantity: 1,
    image: 'url("https://i.ibb.co/mJS6vz0/blue-jean-jacket.png")',
    basketImg:'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
    cart_data: "cart9",
    showNumber: 9,
    classStyleName: "blue_jean_jacket"
}, {
    id:11,
    name: "Grey Jean jacket",
    price: 90,
    quantity: 1,
    image: 'url("https://i.ibb.co/N71k1ML/grey-jean-jacket.png")',
    basketImg:'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
    cart_data: "cart10",
    showNumber: 10,
    classStyleName: "grey_jean_jacket"

},{
    id:12,
    name: "Brown Shearling",
    price: 165,
    quantity: 1,
    image: 'url("https://i.ibb.co/s96FpdP/brown-shearling.png")',
    basketImg:'https://i.ibb.co/s96FpdP/brown-shearling.png',
    cart_data: "cart11",
    showNumber: 11,
    classStyleName: "brown_shearling "
}]
const data_max = [{
    id:13,
    name: "Blue Tanktop",
    price: 25,
    quantity: 1,
    image: ' url("https://i.ibb.co/7CQVJNm/blue-tank.png")',
    basketImg:'https://i.ibb.co/7CQVJNm/blue-tank.png',
    cart_data: "cart12",
    showNumber: 12,
    classStyleName: "blue_tank"
}, {
    id:14,
    name: "Floral Blouse",
    price: 20,
    quantity: 1,
    image: 'url("https://i.ibb.co/4W2DGKm/floral-blouse.png")',
    basketImg:'https://i.ibb.co/4W2DGKm/floral-blouse.png',
    cart_data: "cart13",
    showNumber: 13,
    classStyleName: "floral_blouse"
}, {
    id:15,
    name: "Floral Skirt",
    price: 80,
    quantity: 1,
    image: 'url("https://i.ibb.co/KV18Ysr/floral-skirt.png")',
    basketImg:'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    cart_data: "cart14",
    showNumber: 14,
    classStyleName: "floral_skirt"

},{
    id:16,
    name: "Red Dots Dress",
    price: 80,
    quantity: 1,
    image: 'url("https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png")',
    basketImg:'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
    cart_data: "cart15",
    showNumber: 15,
    classStyleName: "red_polka_dot_dress"
}]
const data_last = [{
    id:17,
    name: "Camo Down Vest",
    price: 325,
    quantity: 1,
    image: 'url("https://i.ibb.co/xJS0T3Y/camo-vest.png")',
    basketImg:'https://i.ibb.co/xJS0T3Y/camo-vest.png',
    cart_data: "cart16",
    showNumber: 16,
    classStyleName: "camo_vest"
}, {
    id:18,
    name: "Floral T-Shirt",
    price: 20,
    quantity: 1,
    image: 'url("https://i.ibb.co/qMQ75QZ/floral-shirt.png")"',
    basketImg:'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    cart_data: "cart17",
    showNumber: 17,
    classStyleName: "floral_shirt"
}, {
    id:19,
    name: "Black and White Longsleeve",
    price: 25,
    quantity: 1,
    image: 'url("https://i.ibb.co/55z32tw/long-sleeve.png")',
    basketImg:'https://i.ibb.co/55z32tw/long-sleeve.png',
    cart_data: "cart18",
    showNumber: 18,
    classStyleName: "long_sleeve "

},{
    id:12,
    name: "Pink Shirt ",
    price: 25,
    quantity: 1,
    image: 'url("https://i.ibb.co/RvwnBL8/pink-shirt.png")',
    basketImg:'https://i.ibb.co/RvwnBL8/pink-shirt.png',
    cart_data: "cart19",
    showNumber: 19,
    classStyleName: "pink_shirt"
}]


const displayitems = document.getElementById("cart-items")


let cartItemsData = []

const addItems = (itemId) => {
    cmp.innerHTML = parseInt(cmp.innerHTML) +1;
    for (i = 0; i < data.length; i++) {
        if (data[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter === -1) {
                cartItemsData.push(data[i])
            }else {
                data[i].quantity++
    
            }
        }
    }
    for (i = 0; i < data_sec.length; i++) {
        if (data_sec[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter === -1) {
                cartItemsData.push(data_sec[i])
              
            }else {
                data_sec[i].quantity++
            }
        }
    }
    for (i = 0; i < data_min.length; i++) {
        if (data_min[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter === -1) {
                cartItemsData.push(data_min[i])
            }else {
                data_min[i].quantity++
            }
        }
    }
    for (i = 0; i < data_max.length; i++) {
        if (data_max[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter === -1) {
                cartItemsData.push(data_max[i])
            }else {
                data_max[i].quantity++
            }
        }
    }
    for (i = 0; i < data_last.length; i++) {
        if (data_last[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter === -1) {
                cartItemsData.push(data_last[i])
            }else {
                data_last[i].quantity++
            }
        }
    }
    

    htmlCartData = []
    cartItemsData.map((cart_data) => {
        const add_cartItem = document.createElement("div");
        add_cartItem.innerHTML = ` <div class="cart-item">
        <img src=${cart_data.basketImg} alt="item">
        <div class="item-details">
            <span class="name">${cart_data.name}</span>
            <span class="item_price">${cart_data.quantity} &#10005; #${cart_data.price} </span>
        </div>
        </div> `
       
        htmlCartData.push(add_cartItem)
    })

    displayitems.innerHTML = ''

    htmlCartData.forEach(html => {
        displayitems.append(html)
    })


    

    
    // this is for the checkout page-------------------------------------------------------------

    
}

data.map((data) => {
    const itemdata = document.createElement("div");
    itemdata.innerHTML = ` <div class="${data.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" onmouseover="showAddToCart(${data.showNumber})" onmouseout="removeAddToCart(${data.showNumber})">
    <div class="div_button">
        <button class="shop_button ${data.cart_data}" onclick="addItems(${data.id})"  onclick="IncItems()">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data.name}</span>
        <span>#${data.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    return item.append(itemdata)
})


data_sec.map((data_sec) => {
    const itemdata = document.createElement("div");
    itemdata.innerHTML = ` <div class="${data_sec.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" onmouseover="showAddToCart(${data_sec.showNumber})" onmouseout="removeAddToCart(${data_sec.showNumber})">
    <div class="div_button">
        <button class="shop_button ${data_sec.cart_data}" onclick="addItems(${data_sec.id})">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_sec.name}</span>
        <span>#${data_sec.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    return secItem.append(itemdata)
})

data_min.map((data_min) => {
    const mindata = document.createElement("div");
    mindata.innerHTML = ` <div class="${data_min.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" onmouseover="showAddToCart(${data_min.showNumber})" onmouseout="removeAddToCart(${data_min.showNumber})">
    <div class="div_button">
        <button class="shop_button ${data_min.cart_data}" onclick="addItems(${data_min.id})">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_min.name}</span>
        <span>#${data_min.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    return minItem.append(mindata)
})
data_max.map((data_max) => {
    const maxdata = document.createElement("div");
    maxdata.innerHTML = ` <div class="${data_max.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" onmouseover="showAddToCart(${data_max.showNumber})" onmouseout="removeAddToCart(${data_max.showNumber})">
    <div class="div_button">
        <button class="shop_button ${data_max.cart_data}" onclick="addItems(${data_max.id})">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_max.name}</span>
        <span>#${data_max.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    return maxItem.append(maxdata)
})
data_last.map((data_last) => {
    const lastdata = document.createElement("div");
    lastdata.innerHTML = ` <div class="${data_last.classStyleName}  col-lg-2a col-md-2a col-sm-6 col-xs-8 col-xss-12" onmouseover="showAddToCart(${data_last.showNumber})" onmouseout="removeAddToCart(${data_last.showNumber})">
    <div class="div_button">
        <button class="shop_button ${data_last.cart_data}" onclick="addItems(${data_last.id})">ADD TO CART</button>
    </div>
    <div class="price">
        <span>${data_last.name}</span>
        <span>#${data_last.price}</span>
    </div>
    </div>
    <div class="empty_div col-lg-2b col-md-2b">

            </div>`
    return lastItem.append(lastdata)
})




// cartItemsData.map((cart_data) => {
//     const add_cartItem = document.createElement("div");
//     add_cartItem.innerHTML = `<div class="flex_container1">
//     <div class="image"><img src=${cart_data.basketImg} alt=""></div> 
//     <div>${cart_data.name}</div>
//     <div><span>&#8672;</span>${cart_data.quantity}<span>&#8674;</span></div>
//     <div>${cart_data.price}</div>
//     <div>&#10005;</div>
//     </div>`
   
//     checkout.append(add_cartItem)
// })



