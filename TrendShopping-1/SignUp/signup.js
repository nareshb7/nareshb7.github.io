console.log('hello')
const signInBtn = document.getElementById('signIn')
let users=[]

let id =0
let data = JSON.parse(localStorage.getItem('Users'))
if (data && data.length){
	users=data
	id= data[data.length-1]['id']

}



const validatePsd =(psd)=> {
	let psdErDiv = document.getElementById('psdError')

	let pattern =/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/
	if (psd.match(pattern)) {
		psdErDiv.style.display= 'none'
		return true
	} else {
		psdErDiv.style.display= 'block'
		psdErDiv.innerHTML= `Password Must has One UpperCase, LowerCase, Character, Digit`
		return false
	}
}
const checkPsd=(psd, conPsd)=>{
	let conPsdErDiv = document.getElementById('conPsdError')
	let psdPatternCheck =validatePsd(psd, conPsd)
	if(psdPatternCheck){
		if (psd===conPsd){
			conPsdErDiv.style.display='none'
			return true
		}
		else{
			conPsdErDiv.style.display='block'
			conPsdErDiv.innerHTML= `Password and Confirm password not Matched`
			return false
		}
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
const  nameCheck =(fName, lName)=>{
	let fNameDiv = document.getElementById('fNameError')
	let lNameDiv = document.getElementById('lNameError')
 if (fName &&  lName ) {
	fNameDiv.style.display= 'none'
	lNameDiv.style.display= 'none'
	return true
 } else if (!fName) {
	lNameDiv.style.display= 'none'
	fNameDiv.style.display= 'block'
	fNameDiv.innerHTML= `Enter First Name`
 } else {
	fNameDiv.style.display= 'none'
	lNameDiv.style.display= 'block'
	lNameDiv.innerHTML= `Enter Last Name`
 }
}
const formValidation =(user)=> {
	let nameChk = nameCheck(user['fName'], user['lName'])
    let mailCheck = validateMail(user['mail'])
    let phnCheck = validatePhone(user['phone'])
    let psdCheck = checkPsd(user['psd'], user['conPsd'])
    if (mailCheck && phnCheck && psdCheck && nameChk) {
        return true
    } else {
        return false
    }
}
const checkUser =(user)=> {
	let formValidate = formValidation(user)
	let users= JSON.parse(localStorage.getItem('Users'))
	let result ;
	if (formValidate) {
		if (users) {
			for (const x of users) {
				if (x['mail'] == user['mail']) {
					document.getElementById('signUp').reset()
					document.getElementById('existingUser').innerHTML = `Hii ${user['fName']} You Already have an Account <a href='../LogIn/login.html'>Click Here</a> `
					return false	
				} else {
					result = true
				}
			}
			return result

		} else {
			return true
		}
		
	} 

}


const iptFields = document.querySelectorAll('input')
iptFields[0].focus()
const getData =()=> {
	event.preventDefault()
	document.getElementById('existingUser').innerHTML=`If u already have an Account<a href='../LogIn/login.html'>Click Here</a> `
	let user ={'id': 1, 'fName': null, 'lName': null, 'phone':null, 'mail': null, 'psd':null,'conPsd': null}
	for (const x of iptFields) {
		if (user.hasOwnProperty(x.name)){
			user[x.name] = x.value
		}
	}
	let validateRes = checkUser(user)
	console.log(validateRes, 'vsd')
	if (validateRes) {
		id++
		user['id']=id
		users.push(user)
		localStorage.setItem('Users', JSON.stringify(users))
		document.getElementById('signUp').reset()
		iptFields[0].focus()
		alert(`Hii ${user['fName']}, Your Account is Sucessfully Created `)
	} 
	
	return false
}
signInBtn.onclick=()=> getData()


