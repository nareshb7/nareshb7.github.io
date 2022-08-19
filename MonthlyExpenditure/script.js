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



let count =1
let total =0;
let userData=[]
let users={}
let personAmount=0
totalOptEl.style.display='none'
optS.style.display='none'
unameEl.style.display='inline-block'

const firstChar=(name)=>{
    let newName = name.charAt(0).toUpperCase()+ name.substring(1)
    return newName
}

const daysCount =()=>{
    let d= new Date()
    dateShowEl.innerHTML=`Today: ${d.toLocaleString()}`
    //let setD = d.setDate(31)
    let date = d.getDate()
    let end = new Date(d.getFullYear(),d.getMonth()+1, 0)
    let endD = end.getDate()
    let leftDays = endD -date
    leftDaysEl.innerHTML = `Days left : ${leftDays}`
    return leftDays
    

}
setInterval(()=> daysCount(),1000)

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
// const zeroFun =(val)=>{
//     if (val<10){
//         val = '0'+val
//         return val
//     }
//     else{
//         return val
//     } 
// }

// const dateFun=(d)=>{
//     let year = d.getFullYear()
//     let month = d.getMonth()+1
//     let day = d.getDate()
//     let hours = d.getHours()
//     let minutes = d.getMinutes()
//     let ampm =''
//     if (hours >12){
//         ampm= "PM"
//     } 
//     else{
//         ampm= "AM"
//     }
//     if (hours>12){
//         hours = hours-12
//     }
//     month = zeroFun(month)
//     hours = zeroFun(hours)
//     minutes = zeroFun(minutes)
//     day= zeroFun(day)
//     let today = `${year}/${month}/${day} (${hours}:${minutes} ${ampm})`
//     return today
// }



const countAmount =()=>{
    let iname = inameEl.value
    let amount= Number(amountEl.value)
    let d = new Date()
    //let dateCount= monthCount(d)
    d= d.toLocaleString()
    
    
    let uname = firstChar(unameEl.value)
    iname = firstChar(iname)
    if (iname && amount){
        if (uname in users){
            users[`${uname}`] +=amount
            let perAmount = users[`${uname}`]
            unameShow.innerHTML = `${uname} - &#8377 ${perAmount}/-`
        }
    
        const unameDiv = document.getElementById(`${uname}`)
        if(iname && amount){
            total+=amount
            totalOptEl.style.display='block'
            unameDiv.innerHTML+=`<li>${uname} : <span>${count}. ${iname} -${amount} - [ ${d} ]</span></li>`
            let data ={"Count": count, "Item" : iname, "Amount": amount, "Time" :d}
            userData.push(data)
            localStorage.setItem(`${uname+1}`, JSON.stringify(userData[userData.length-1]))
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
    for (const x in users){
        text+=  `<li>${x} : ${users[x]}</li>`
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