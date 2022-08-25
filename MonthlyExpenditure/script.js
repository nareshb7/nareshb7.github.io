const inameEl = document.getElementById('iname')
const amountEl = document.getElementById('amount')
const outputEl = document.getElementById('output')
const btnEl = document.getElementById('clickBtn')
const totalEl = document.getElementById('total')
const totalOptEl = document.getElementById('totalOpt')
const unameEl = document.getElementById('uname')
const uBtnEl= document.getElementById('uBtn')
const unameShow= document.getElementById('nameShow')
const resetEl = document.getElementById('clear')
const optS =  document.getElementById('opt-section')
const userOutputEl = document.getElementById('userOutput')
const userListBtn= document.getElementById ('userListBtn')
const userListEl = document.getElementById('userList')
const dateShowEl = document.getElementById('dateShow')
const leftDaysEl = document.getElementById('leftDays')


let count= 1
let total =0
let userData=[]
let users = {}


let personAmount=0

totalOptEl.style.display='none'
optS.style.display = 'none'
unameEl.style.display='inline-block'

// User outputtttt at starting
const userOutputShow =()=> {
    let expenditure = JSON.parse(localStorage.getItem('Expenditure'))
    if (expenditure){
        users= JSON.parse(localStorage.getItem('Data'))
        
        for (const x in expenditure){
            uname = expenditure[x].Name
            userOutputEl.innerHTML+= `<div id="${uname}"></div`
            const unameDiv = document.getElementById(`${uname}`)
            unameDiv.innerHTML+=`<li>${expenditure[x].Name} : <span>${expenditure[x].Count}. ${expenditure[x].Item} -${expenditure[x].Amount}
            - [ ${expenditure[x].Time} ]</span></li>`
        }
        count =expenditure[expenditure.length-1].Count +1
        total =expenditure[expenditure.length-1].Total
        userData= expenditure
        console.log(count, ' ', total, ' ', userData)
        
    }
}
userOutputShow()

const firstChar=(name)=>{
    let newName = name.charAt(0).toUpperCase()+ name.substring(1).toLowerCase()
    return newName
}
const daysCount =()=>{
    let d= new Date()
    dateShowEl.innerHTML=`Today: ${dateFun(d)}`
    //let setD = d.setDate(31)
    let date = d.getDate()
    let end = new Date(d.getFullYear(),d.getMonth()+1, 0)
    let endD = end.getDate()
    let leftDays = endD -date
    leftDaysEl.innerHTML = `Days left : ${leftDays}`
    return leftDays
}
setInterval(()=> daysCount(),1000)

// New USer Adding
const userAdd=(uname)=>{
    if(uname){
        if (unameEl.style.display=='inline-block'){
            unameEl.style.display='none'
            optS.style.display='none'
            if( optS.style.display=='none'){
                optS.style.display='block'
                inameEl.focus()
                if ( uname in users){
                    
                }
                else{
                    users[`${uname}`]=0
                    userOutputEl.innerHTML+= `<div id="${uname}"></div`
                    console.log('uname entered')
                }
            }
        }
        else{
            unameEl.style.display='inline-block'
        }
    }
    else{
        alert('Enter Name')
    }
}

//Date function
const zeroFun =(val)=>{
    if (val<10){
        val = '0'+val
        return val
    }
    else{
        return val
    } 
}
const dateFun=(d)=>{
    let year = d.getFullYear()
    let month = d.getMonth()+1
    let day = d.getDate()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let ampm =''
    if (hours >12){
        ampm= "PM"
    } 
    else{
        ampm= "AM"
    }
    if (hours>12){
        hours = hours-12
    }
    month = zeroFun(month)
    hours = zeroFun(hours)
    minutes = zeroFun(minutes)
    seconds = zeroFun(seconds)
    day= zeroFun(day)
    let today = `${year}/${month}/${day} (${hours}:${minutes}:${seconds} ${ampm})`
    return today
}


 // Main Function
const countAmount =()=>{
    let iname = inameEl.value
    let amount= Number(amountEl.value)
    let d = new Date()
    let dateCount= dateFun(d)
    //d= d.toLocaleString()

    let uname = firstChar(unameEl.value)
    iname = firstChar(iname)
    if (iname && amount){
        if (uname in users){
            users[`${uname}`] +=amount
            let perAmount = users[`${uname}`]
            unameShow.innerHTML = `${uname} - &#8377 ${perAmount}/-`
            
        }
        console.log(users)
        
        localStorage.setItem('Data', JSON.stringify(users))
        
    
        const unameDiv = document.getElementById(`${uname}`)
        if(iname && amount){
            total+=amount
            totalOptEl.style.display='block'
            unameDiv.innerHTML+=`<li>${uname} : <span>${count}. ${iname} -${amount} - [ ${dateCount} ]</span></li>`
            let data ={"Name": uname, "Count": count, "Item" : iname, "Amount": amount, "Total" : total, "Time" :dateCount}
            
            userData.push(data)
            localStorage.setItem('Expenditure', JSON.stringify(userData))
            totalEl.innerHTML= `${total}`
            count++
            inameEl.value=''
            amountEl.value=''
            inameEl.focus()
            return true
        }
        else{
            return false
        }
    }
    else{
        unameShow.innerHTML = `Enter data`
        return false
    } 
}
const userList=()=>{
    let text=''
    let data = JSON.parse(localStorage.getItem('Data'))
    console.log(data)
    for (const x in data){
        text+=  `<li>${x} : ${data[x]}</li>`
    }
    userListEl.innerHTML=text

}
const resetFun=()=>{
    userOutputEl.innerHTML=''
    unameShow.innerHTML=''
    totalOptEl.innerHTML=''
    userList.innerHTML=''
    users ={}
}

let leftdays = daysCount()
if(leftdays==0){
    userList()
    resetFun()
}

userListBtn.onclick=()=> userList()
resetEl.onclick=()=> resetFun()
btnEl.onclick=()=> countAmount()
uBtnEl.onclick =()=> userAdd(firstChar(unameEl.value))