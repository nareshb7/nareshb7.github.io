const mailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const btnEl = document.getElementById('submit')
const formEl = document.getElementById('form1')
const emailErrorEl = document.getElementById('emailError')
const psdErrorEl = document.getElementById('psdError')
const loginErrorEl = document.getElementById('loginError')
const welcomeEl = document.getElementById('welcome')

const userData=(id)=>{
	let userPsd= passwordEl.value
	let systemPsd = id.Password
	let systemMbl = id.Mobile
	let sysName= id.Name
	if (userPsd === systemPsd){
		// alert(`Hiii ${sysName}, Welcome you are sucesfully Logged in\nMobile : ${systemMbl} `)
		emailErrorEl.style.display= 'none'
		psdErrorEl.style.display='none'
		console.log('login sucess')
		//
		window.location.href="../welcome/welcome.html"
		return true
	}
	else{
		loginErrorEl.innerHTML=`Details not found`
		return false
	}
	
}



const validateEmail=()=>{
	let validRegex = /^[A-z][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-][A-z0-9]+@[a-zA-Z0-9-]+(?:\.[A-z0-9-]{2,12})*$/;
	if (mailEl.value.match(validRegex)){
		emailErrorEl.style.display= 'none'
		return true
	}
	else{
		emailErrorEl.style.display= 'block'
		emailErrorEl.innerHTML = `Enter valid address`
		return false
	}
} 
	function checkPassword() { 
		event.preventDefault()
		let passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,}$/;
		if(passwordEl.value.match(passw)) { 
			psdErrorEl.style.display='none'
			return true;
		}
		else { 
			console.log(passwordEl.value.match(passw))
			psdErrorEl.style.display='block'
			psdErrorEl.innerHTML = `Password Must be 8 characters(UpperCase, LowerCase, Digit, Character)`
			return false;
		}
	}

const showInput=()=>{
	
	let a= validateEmail()
	let b= checkPassword()
	let userId =JSON.parse(localStorage.getItem(mailEl.value))
	if(a && b){
		if (userId){
			userData(userId)
			return true
		}
		else{
			loginErrorEl.innerHTML= `User details Not Found`
			return false;
		}
		
	}
	else {
		console.log('Enter valid details')
	}
}
const subMit =()=>{
    console.log('submitted')
    
}

btnEl.onclick=()=> showInput()
form1.onsubmit= ()=> subMit()


