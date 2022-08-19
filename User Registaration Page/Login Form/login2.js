const mailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const btnEl = document.getElementById('submit')
const formEl = document.getElementById('form1')
const emailErrorEl = document.getElementById('emailError')
const psdErrorEl = document.getElementById('psdError')
const loginErrorEl = document.getElementById('loginError')
const welcomeEl = document.getElementById('welcome')

const checkData =()=>{
    let usermail = mailEl.value
    let userPsd = passwordEl.value
    let user = JSON.parse(localStorage.getItem(usermail))
    if (user){
        let sysmail= user.Email
        let sysPsd= user.Password
        if (userPsd ===sysPsd){
            console.log('same')
            
            return true
        }
        else{
            loginErrorEl.innerHTML= `Enter Correct Password`
            return false
        }
    }
    else{
        loginErrorEl.innerHTML= `User details not found`
        return false
    }
}
const subMit =()=>{
    console.log('submitted')
    passwordEl.value=''
    
}

btnEl.onclick=()=> checkData()
formEl.onsubmit=()=> subMit()