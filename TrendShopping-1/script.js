let data = [
    {
        "id": 1, "iName": "Ashirvad Atta", "quantity": "1Kg", "price": 175, "imgUrl": "./assets/a-atta.jpg"
    }, {
        "id": 2, "iName": "Ashirvad Ghee", "quantity": "200Ml", "price": 180, "imgUrl": "./assets/a-ghee.jpg"
    }, {
        "id": 3, "iName": "Beer Shampoo", "quantity": "200ml", "price": 500, "imgUrl": "./assets/b-shampoo.jpg"
    }, {
        "id": 4, "iName": "Himalaya Paste", "quantity": "75ml", "price": 130, "imgUrl": "./assets/h-paste.jpg"
    }, {
        "id": 5, "iName": "Gillete", "quantity": "200ml", "price": 100, "imgUrl": "./assets/gillette.jpg"
    }, {
        "id": 6, "iName": "Himalaya Shampo", "quantity": "150ml", "price": 340, "imgUrl": "./assets/h-shampoo.jpg"
    }
]


const itemsDiv = document.getElementById('itemsDiv')
const sIptDiv = document.getElementById('sIpt')
const table = document.getElementById('table')
const totalAmtEl = document.getElementById('totalAmt')
const noOfItemsEl = document.getElementById('noOfItems')

// const chkOutBtnEl = document.getElementById('chkOutBtn')
const cItemsEl = document.getElementById('cItems')
const cartList2Div = document.getElementById('cartList2')
//const select = document.getElementById('selectSort')
const page1Div = document.getElementById('page1')
const page2Div = document.getElementById('page2')


let userItems= {}
let sltItems = {}
let cartItems = []
//let data1 = JSON.parse(localStorage.getItem('sltItems'))
//let ci = JSON.parse(localStorage.getItem('cartItems'))
// if (ci && ci.length) {
//     sltItems = data1
//     cartItems = ci
// }


let currentUser = JSON.parse(localStorage.getItem('CurrentUser'))
let uiPreData= JSON.parse(localStorage.getItem('userItems'))

let id;
if (currentUser) {
    id = currentUser['mail']
    
    document.getElementById('uName').innerHTML= currentUser['fName']
    document.getElementById('login').disabled = true
    
    if (uiPreData) {
        userItems=uiPreData
    }

    if (id in userItems){
        sltItems = userItems[id]
        cartItems= userItems[id]['cartItems']
        cartItems ? cartItems= cartItems: cartItems =[]
        
        
    } else {
        userItems[id] ={}
        userItems[id]['cartItems'] = []

        

    }
    page1Div.style.display = 'block'
} else {
    window.stop();
    document.getElementById('logOut').disabled =true
    document.getElementById('myAcBtn').disabled = true
    page1Div.style.display = 'none'
}

// window.onbeforeunload = closingCode;
// function closingCode(){
//     userItems[id] = sltItems
//     localStorage.setItem('userItems',JSON.stringify(userItems))
//       return false;

// }



const logOutFunc =()=> {
    localStorage.removeItem('CurrentUser')
    location.reload();
}

const myAccountFunc =()=> {
    
}

const displayFunc = (val) => {
    
    let list = ``
    val.forEach(x=> {
        let item = `<div><img src='${x.imgUrl}' width='150px' height='150px'> <h3>${x.iName}</h3>
        <p><span>${x.quantity}</span> <span class='m-20'> Rs ${x.price}</span></p> 
        <button class='button cartBtn' onclick='addToCart(${x.id})'>Add to Cart</button></div>`
      list += item
    })
    itemsDiv.innerHTML = list
}
displayFunc(data)


const cartTotal = () => {
    let price = 0
    for (const x in sltItems) {
        if (Number(x)) {
            price += sltItems[x]['amount']
        }
    }
    sltItems['totalAmount'] = price
    //localStorage.setItem('sltItems', JSON.stringify(sltItems))
    userItems[id] = sltItems
    localStorage.setItem('userItems',JSON.stringify(userItems))
    totalAmtEl.innerHTML = price
}

const removeFunc = (id) => {
    let val = id
    let cnfrm = confirm('Do You want to remove this product?')
    let sample = JSON.parse(JSON.stringify(data))
    if (cnfrm) {
        for (const x of sample) {
            if (x.id == val) {
                sltItems['noOfItems'] = sltItems['noOfItems'] - 1
                let x = cartItems.indexOf(val)
                cartItems.splice(x, 1)
                delete sltItems[val]
            }
        }
        userItems[id] = sltItems
        userItems[id]['cartItems'] = cartItems
        localStorage.setItem('userItems',JSON.stringify(userItems))
        displayCart()
    }
}
//chkOutBtnEl.onclick = () => removeFunc()

const increase = (id, amt) => {
    let qValEl = sltItems[id]['quantity']
    if (qValEl >= 1) {
        let itotal = document.getElementById(`iTotal_${id}`)
        sltItems[id]['quantity'] = sltItems[id]['quantity'] + 1
        sltItems[id]['amount'] = sltItems[id]['amount'] + amt
        itotal.innerHTML = sltItems[id]['amount']
        qValEl = sltItems[id]['quantity']
        document.getElementById(`qVal_${id}`).innerHTML = qValEl
        cartTotal()
    }
}

const decrease = (id, amt) => {
    let qValEl = sltItems[id]['quantity']
    if (qValEl == 1) {
        removeFunc(id)
    }
    else if (qValEl > 1) {
        let itotal = document.getElementById(`iTotal_${id}`)
        sltItems[id]['amount'] = sltItems[id]['amount'] - amt
        sltItems[id]['quantity'] = sltItems[id]['quantity'] - 1
        qValEl = sltItems[id]['quantity']
        itotal.innerHTML = sltItems[id]['amount']
        document.getElementById(`qVal_${id}`).innerHTML = qValEl
    }
    cartTotal()
}

const displayCart = () => {
    let noOfItems = 0
    
    if (cartItems && cartItems.length) {
        
        let opt = `<thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr></thead>`
        for (const x of data) {
            if (cartItems.includes(x.id)) {
                noOfItems++
                let iRow = `<tr><td>${x.iName}</td><td>${x.price} x </td><td><p><button class='idBtn' onclick='increase(${x.id},${x.price})'> + </button>
                <span id='qVal_${x.id}' class='qtySpan'> ${sltItems[x.id]['quantity']}</span> <button  class='idBtn' onclick='decrease(${x.id},${x.price})'> - </button></p>
                </td><td id='iTotal_${x.id}'>${sltItems[x.id]["amount"]}</td></tr>`
                opt += iRow

            }
        }
        cartTotal()
        sltItems['noOfItems'] = noOfItems
        noOfItemsEl.innerHTML = sltItems['noOfItems']
        table.innerHTML = opt
    } else {
        table.innerHTML = ''
        noOfItemsEl.innerHTML = 0
    }
}
displayCart()

const addToCart = (val) => {
    if (!cartItems.includes(val)) {
        document.getElementById('iRes').style.display = 'none'
        cartItems.push(val)
        if (!sltItems.hasOwnProperty(val)) {
            sltItems[val] = {}
            data.forEach(x => {
                if (x.id == val) {
                    let item = {iName: x.iName, quantity: 1, price: x.price, amount: x.price }
                    sltItems[val] = item
                }
            })
        }
        
        // userItems[id]['cartItems'] = cartItems
        
        // localStorage.setItem('userItems',JSON.stringify(userItems))
        
        userItems[id] = sltItems
        userItems[id]['cartItems'] = cartItems
        localStorage.setItem('userItems',JSON.stringify(userItems))
        displayCart()
        //localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
}

const checkOutFun = () => {
    if (sltItems['noOfItems']) {
        toggleFun()
        gd[0].focus()
        cItemsEl.innerHTML = sltItems['noOfItems']
        let opt = ``
        for (const x of data) {
            if (x.id in sltItems) {
                opt += `<div><b>${sltItems[x.id].iName} - </b> <span class='qtyShow'>${sltItems[x.id]['quantity']} No's  </span><span> <b>x</b> ${x.price}</span>
                <span class="f-right"><b>${sltItems[x.id]['amount']}</b></span></div>`
            }
        }
        opt += `<div class='tDiv'>Total (INR) <span class="f-right"><b>Rs ${sltItems['totalAmount']}</b></span></div>`
        cartList2Div.innerHTML = opt
    } else {
        document.getElementById('iRes').style.display = 'block'
        document.getElementById('iRes').innerHTML = `Your Cart is Empty`
    }
}

const emptyCart = () => {
    table.innerHTML = ``
    noOfItemsEl.innerHTML = 0
    totalAmtEl.innerHTML = 0
    cartItems=[]
    sltItems={}
    localStorage.removeItem('cartItems')
    localStorage.removeItem('sltItems')
    userItems[id] = sltItems
    localStorage.setItem('userItems',JSON.stringify(userItems))
}

let sData = JSON.parse(JSON.stringify(data))
let ssData = sData

const searchFunc = () => {
    ssData=[]
    let ipt = sIptDiv.value.toLowerCase()
    let length =0
    let list = ``
    for (const x of sData) {
        if (x.iName.toLowerCase().includes(ipt)) {
            length++
            ssData.push(x)
            document.getElementById('searchError').innerHTML= ''
            let item = `<div><img src='${x.imgUrl}' width='150px' height='150px'> <h3>${x.iName}</h3>
            <p><span>${x.quantity}</span> <span class='m-20'> Rs ${x.price}</span></p> 
            <button class='button cartBtn' onclick='addToCart(${x.id})'>Add to Cart</button></div>`
            list += item
        }
    }
    if (length <1) {
        document.getElementById('searchError').innerHTML= `No result Found`
        itemsDiv.innerHTML =''
    }
    itemsDiv.innerHTML = list
}

const sortFunc = (val) => {
    
    ssData.sort(function (a,b) {
        if (a[val] < b[val]) { return -1}
        if (a[val] > b[val]) {return 1}
        return 0;
    })
    displayFunc(ssData)

}

const toggleFun = () => {
    page1Div.style.display = 'none'
    page2Div.style.display = 'flex'
}
page2Div.style.display = 'none'

const toggleFun2 = () => {
    page2Div.style.display = 'none'
    page1Div.style.display = 'block'
}

// const setCookie = (key, value, days) => {
//     let d = new Date()
//     d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
//     let expires = d.toUTCString
//     document.cookie = `${key}=${value};expires=${expires};path=/`
// }
// //setCookie('Name', 'Naresh', 30)
// const getCookie = (key) => {
//     let val = document.cookie.split(';')
//     for (const x of val) {
//         if (x.includes(key)) {
//             let name = x.substring(key.length + 1)

//             return name
//         }
//     }
// }
// //getCookie('Name')

// const checkCookie = () => {
//     let user = getCookie('Name')
//     if (user) {
//         alert(`Welcome again ${user}`)
//     } else {
//         let name = prompt('Enter your name')
//         if (name) {
//             setCookie('Name', name, 30)
//         }

//     }
// }
//setTimeout(checkCookie, 500) 

//Billing page

const plcOrderBtn = document.getElementById('pOrder')
let gd = document.querySelectorAll('input')


const validateMail =(mail)=> {
    let mErrorDiv = document.getElementById('mailError')
    let pattern = /^[A-z][A-z0-9]+@[A-z]+(?:\.[a-z]{2,})+$/
    if (mail.match(pattern)) {
        mErrorDiv.style.display= 'none'
        return true
    } else {
        mErrorDiv.style.display= 'block'
        mErrorDiv.innerHTML = `Enter Valid Mail`
        return false
    }
}

const validatePhone =(num)=> {
    let phnErrorDiv = document.getElementById('phoneError')
    let pattern =/^[\d]{10}$/
    if (num.match(pattern)) {
        phnErrorDiv.style.display= 'none'
        return true
    } else {
        phnErrorDiv.style.display= 'block'
        phnErrorDiv.innerHTML = `Mobile Number Must be 10 digits`
        return false

    }
}

const validateZipCode =(code)=> {
    let zCodeErrorDiv = document.getElementById('zCodeError')
    let pattern =/^[\d]{6}$/
    if(code.match(pattern)) {
        zCodeErrorDiv.style.display= 'none'
        return true
    } else {
        zCodeErrorDiv.style.display= 'block'
        zCodeErrorDiv.innerHTML = `Zip Code Must be 6 digits`
        return false
    }
}


const formValidation =()=> {
    let user = getDetails()
    let mailCheck = validateMail(user['mail'])
    let phnCheck = validatePhone(user['phone'])
    let zipCodeCheck = validateZipCode(user['zCode'])
    if (mailCheck && phnCheck && zipCodeCheck) {
        return true
    } else {
        return false
    }
}

const getDetails =()=> {
    let user = {'fName':null, 'lName': null,'mail': null, 'phone': null, 'adrs1': null, 'adrs2':null,'city': null, 'zCode': null, 'state':null, 'pMode': null }
    user['state'] = document.getElementById('stateDd').value
    user['pMode'] = document.getElementById('pmDd').value
    for (const x of gd) {
        if (user.hasOwnProperty(x.name)){  
            user[x.name]= x.value
        }
    }
    return user
}
let users=[]

const showDetails =()=> {
    event.preventDefault()
    let user = getDetails()
    let validate = formValidation()
    if (validate) {
        
        users.push(user)
        userItems[id]['details'] = user
        userItems[id] = sltItems
        localStorage.setItem('userItems',JSON.stringify(userItems))
        document.getElementById('adrsFom').reset()
        alert(`Thank You ${user.fName}, Your Order Placed Sucessfully`)
        window.location.href= './bill/bill.html'
        return true
        
    }
    return false
}





