const data =JSON.parse(localStorage.getItem('Users'))
let user;
const logInBtn = document.getElementById('logIn')

const checkUser =()=> {
	const mail = document.getElementById('mail').value
	const psd = document.getElementById('psd').value
	const mailErDiv = document.getElementById('mailError')
	const psdErDiv = document.getElementById('psdError')
	// let users = JSON.parse(localStorage.getItem('Users'))
	let sysMail;
	let sysPsd ;
	
	for (const x of data){
		if (x.mail == mail ) {
			sysMail = mail
			if (x.psd == psd) {
				sysPsd =psd
				user=x
			localStorage.setItem('CurrentUser', JSON.stringify(user))
			//window.location.href= '../index.html'
			window.location.assign('../index.html')
			
			}
		}
	} 
	if (!sysMail) {
		mailErDiv.style.display= 'block'
		psdErDiv.style.display= 'none'
		mailErDiv.innerHTML = `User Not Found`
	} else if (!sysPsd) {
		mailErDiv.style.display= 'none'
		psdErDiv.style.display= 'block'
		psdErDiv.innerHTML = `Password Not matching`
	}
	
	return false
} 

const logInFunc =()=> {
	let result = checkUser()
	if (!result) {

	}
}
logInBtn.onclick=()=> checkUser()
