let data = (new URL(document.location)).searchParams
const opt = document.getElementById('output')
const tableDiv = document.getElementById('iList')
const printBtn = document.getElementById('print')

let phone = data.get('phone')
//let users = JSON.parse(localStorage.getItem('CustomerDetails'))

//let iList = JSON.parse(localStorage.getItem('sltItems'))

let currentUser = JSON.parse(localStorage.getItem('CurrentUser'))
let ui = JSON.parse(localStorage.getItem('userItems'))
console.log(ui[currentUser['id']], 'id')
let iList = ui[currentUser['mail']]
let x= ui[currentUser['mail']]['details']


let val = `<div><span><b>Customer Name : ${x.fName} ${x.lName}</b></span><p><b>Mobile</b> : <i>${x.phone}</i><br> <span><b>Email</b>: <i>${x.mail}</i></span></p>
        <address><b>Address :</b> ${x.adrs1} ,  ${x.adrs2} , ${x.state}- ${x.zCode}</address><span><b>Payment Mode :</b> &nbsp  <i>${x.pMode}</i></span></div>`
opt.innerHTML = val


if (iList) {
  printBtn.disabled = false
  let thead = `<thead><tr class='tableRow'><th>Sl. No</th><th>Item Name</th><th>Price</th><th>Quantity</th><th>Amount</th><tr></thead>`
  let tbody = `<tbody>`
  let counter = 1
  for (const x in iList) {
    if (typeof iList[x] === 'object' && iList[x].constructor != Array && !iList[x]['fName'] ) {
      console.log('enter if ', iList[x])
      let val = counter++
      tbody += `<tr><td>${val}</td><td>${iList[x].iName}</td><td>${iList[x].price}</td><td>${iList[x]['quantity']} No's</td>
            <td>${iList[x]['amount']}</td></tr>`
    }
  }
  tbody += `<tr  class='tableRow'><td colspan=4> Total :</td><th>${iList['totalAmount']}</th></tr></tbody>`
  tableDiv.innerHTML = thead + tbody
} else {
  tableDiv.innerHTML = ``
  printBtn.disabled = true
}
for (const x in ui) {
  for (const y of x) {
    console.log(y, 'y')
  }
}


const printFunc = () => {
  
  window.print()
  localStorage.removeItem('cartItems')
  localStorage.removeItem('sltItems')
  localStorage.removeItem('CustomerDetails')
  window.location.href = '../index.html'
}
printBtn.onclick = () => printFunc()


