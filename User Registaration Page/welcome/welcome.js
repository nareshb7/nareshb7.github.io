const nameEl = document.getElementById('name')
const detailsEl = document.getElementById('details')
const unameEl = document.getElementById('uname')
const mailEl = document.getElementById('email')
const mblEl = document.getElementById('mobile')
const psdEl = document.getElementById('password')
const timeEl = document.getElementById('time')


window.addEventListener('load', ()=>{
    let params = (new URL(document.location)).searchParams
    // let mail = params.get("email")
    let mail= 'naresh@gmail.com'
    console.log(mail)
    let user = JSON.parse(localStorage.getItem(mail))
    console.log(user)
    if(user){
        nameEl.innerHTML= `${user.Name}`
        detailsEl.style.display= 'block'
        unameEl.innerHTML =`${user.Name}`
        mailEl.innerHTML = `${user.Email}`
        mblEl.innerHTML =`${user.Mobile}`
        psdEl.innerHTML=`${user.Password}`
        timeEl.innerHTML =`${user.Date}`
    }
    else{
        detailsEl.style.display='none'
        detailsEl.innerHTML= 'Data is loading.....'
    }
    

})


