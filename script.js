import {data, data_sec, data_last, data_max, data_min} from './database.js'
import {lastItem } from './main.js'

const collectItems = document.getElementById("collectItems")

const displayitems = document.getElementById("cart-items")
const showitems = document.getElementById("fluid-container")

let cartItemsData = []
var cmp= document.getElementById("inc");

if (cartItemsData.length != 0){
    document.querySelector(".empty_message").style.display="none"
    console.log("your cart is empty")
}

const addItemsFromLS = (data) => {

    cartItemsData.push(data)
    console.log(cartItemsData)
    cmp.innerHTML = parseInt(cmp.innerHTML) + data.quantity
    renderUI()

}


const addItems = (itemId) => {
    
    cmp.innerHTML = parseInt(cmp.innerHTML) +1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter == -1) {
                cartItemsData.push(data[i])
            }else {
                data[i].quantity++    
            }
        }
    }
    for (let i = 0; i < data_sec.length; i++) {
        if (data_sec[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter == -1) {
                cartItemsData.push(data_sec[i])
              
            }else {
                data_sec[i].quantity++
            }
        }
    }
    for (let i = 0; i < data_min.length; i++) {
        if (data_min[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter =='' -1) {
                cartItemsData.push(data_min[i])
            }else {
                data_min[i].quantity++
                
            }
        }
    }
    for (let i = 0; i < data_max.length; i++) {
        if (data_max[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter == -1) {
                cartItemsData.push(data_max[i])
            }else {
                data_max[i].quantity++
            }
        }
    }
    for (let i = 0; i < data_last.length; i++) {
        if (data_last[i].id == itemId) {
            const filter = cartItemsData.findIndex((item) => {
                if (item.id == itemId) {
                    return item.id
                }
            })
            if (filter == -1) {
                cartItemsData.push(data_last[i])
            }else {
                data_last[i].quantity++
            }
        }
    }
    
   
    renderUI()
}

function renderUI () {
    let htmlCartData = []
   
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

    collectItemsData() 
}

let checkoutCartData = []
const collectItemsData = () => {
        console.log("Hi", cartItemsData)
       const checkoutCartData = cartItemsData.map((cart_data) => {
        const add_cartItem1= document.createElement("div");
        add_cartItem1.innerHTML = `<div class="flex_container1">
        <div class="image"><img src=${cart_data.basketImg} alt=""></div> 
        <div>${cart_data.name}</div>
        <div><span>&#8672;</span>${cart_data.quantity}<span>&#8674;</span></div>
        <div>${cart_data.price}</div>
        <div>&#10005;</div>
        </div>`
        return add_cartItem1
    })
    if(showitems){
        showitems.innerHTML = ''
        checkoutCartData.forEach(html => {
            showitems.append(html)
        })
    }
    
    
}

if(collectItems){
    collectItems.addEventListener('click', e => {
        console.log(e.target)
        console.log("Hi before storage", cartItemsData)
        localStorage.setItem('cart', JSON.stringify(cartItemsData))
        window.location.href = 'cart.html'
        // check if cart.html is loaded 
        // const showitems = document.getElementById("fluid-container")
        console.log(showitems)
    })
}

if (localStorage.getItem('cart')) {
    const cartItemsData = JSON.parse(localStorage.getItem('cart'))
    cartItemsData.forEach(item => {
        addItemsFromLS(item)
    })
}

if(lastItem){
    lastItem.addEventListener('click', e => {
        console.log(e.target)
        if (e.target.id) {
            console.log("id is ", +e.target.id)
            addItems(+e.target.id)
        }
        // console.log("show number is ", +x)
    //   addItems()
    
    })
}