const nameEl = document.getElementById('name')
const mailEl = document.getElementById('email')
const psdEl = document.getElementById('psd')
const conPsdEl = document.getElementById('conPsd')
const submitBtn = document.getElementById('submit')
const mailErrorEl = document.getElementById('emailError')
const psdErrorEl = document.getElementById('psdError')
const formEl= document.getElementById('form1')
const mblNumberEl = document.getElementById('mblNumber')
const mblErrorEl = document.getElementById('mblError')
let users=[]


const validateEmail=(mail)=>{
	if(mail){
		let pattern = /^[A-z0-9!@#$%&_-]+@[A-z0-9-]+(?:\.[A-z]{2,})*$/
		if (mail.match(pattern)){
			console.log('mail patern Match')
			mailErrorEl.style.display='none'
			return true
		}
		else{
			console.log('Mail Pattern Not Match')
			mailErrorEl.style.display='block'
			mailErrorEl.innerHTML= `Enter Valid Email`
			return false
		}
	}
	else{
		mailErrorEl.style.display='block'
		mailErrorEl.innerHTML= `Please enter Your mail`
	}
}

const validatePsd =(psd, conPsd)=>{
	let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_.<>-]).{8,}$/
	if(psd && conPsd){
		if (psd.match(pattern) && conPsd.match(pattern)){
			console.log('psd pattern matched')
			psdErrorEl.style.display='none'
			return true
		}
		else{
			console.log('psd pattern not matched')
			psdErrorEl.style.display='block'
			psdErrorEl.innerHTML= `Password Pattern not Matched (Char, Digit, Lowercase, Uppercase)`
			return false
		}
	}
	else{
		psdErrorEl.style.display='block'
		psdErrorEl.innerHTML= `Please enter Password`
	} 
}

const checkPsd=(psd, conPsd)=>{
	let psdPatternCheck =validatePsd(psd, conPsd)
	if(psdPatternCheck){
		if (psd===conPsd){
			console.log(psd, conPsd)
			console.log('psd match')
			psdErrorEl.style.display='none'
		return true
		}
		else{
			console.log('psd notmatch')
			psdErrorEl.style.display='block'
			psdErrorEl.innerHTML= `Password and Confirm password not Matched`
			return false
		}
	}
}

const validateMbl =(number)=>{
	if (number){
		let pattern =/[0-9]{10,11}/
		let len = number.length
		if (number.match(pattern) && len ==10){
			console.log('same')
			mblErrorEl.style.display= 'none'
			return true
		}
		else{
			mblErrorEl.style.display= 'block'
			mblErrorEl.innerHTML=`Mobile Numbe must be 10 digits`
			return false
		}
	}
	else{
		mblErrorEl.style.display= 'block'
		mblErrorEl.innerHTML= `Please Enter Mobile Number`
		return false
	}
	
}

const userInput=()=>{
	event.preventDefault()
	let name = nameEl.value
	let mail= mailEl.value
	let number = mblNumberEl.value
	let psd = psdEl.value
	let date = new Date()
	let today = `${date.getFullYear()}- ${date.getMonth()+1} - ${date.getDate()} (${date.getHours()}:${date.getMinutes()})`
	let conPsd = conPsdEl.value
	let emCheck= validateEmail(mail)
	let psdCheck= checkPsd(psd, conPsd)
	let mblCheck = validateMbl(number)
	if (emCheck && psdCheck && mblCheck){
		alert(`Hii ${name}, Signup complted sucessfully `)
		let person= {"Name": name, "Email" : mail,"Mobile" : number, "Password": psd, "Date" : today}
		users.push(person)
		console.log(users)
		localStorage.setItem(`${mail}`,JSON.stringify(users[users.length-1]))
		formEl.reset()
	}
	else{
		console.log('Signup Error')
	}
}
submitBtn.onclick=()=> userInput()

