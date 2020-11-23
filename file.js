


const CollectItems = (itemId) => {
    
    cmp.innerHTML = parseInt(cmp.innerHTML) +1;
    for (i = 0; i < data.length; i++) {
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
    for (i = 0; i < data_sec.length; i++) {
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
    for (i = 0; i < data_min.length; i++) {
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
    for (i = 0; i < data_max.length; i++) {
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
    for (i = 0; i < data_last.length; i++) {
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
    

   
    checkoutCartData = []
    cartItemsData.map((cart_data) => {
        

        const add_cartItem1= document.createElement("div");
        add_cartItem1.innerHTML = `<div class="flex_container1">
        <div class="image"><img src=${cart_data.basketImg} alt=""></div> 
        <div>${cart_data.name}</div>
        <div><span>&#8672;</span>${cart_data.quantity}<span>&#8674;</span></div>
        <div>${cart_data.price}</div>
        <div>&#10005;</div>
        </div>`
       
       checkoutCartData.push(add_cartItem1)

    })

   
    
    showitems.innerHTML= ''

    checkoutCartData.forEach(html => {
    showitems.append(html)
    })
    

    
    // this is for the checkout page-------------------------------------------------------------
    

    

   
    
}