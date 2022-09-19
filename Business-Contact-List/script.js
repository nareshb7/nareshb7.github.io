const submitBtn = document.getElementById('submitBtn')
const pStatusEl = document.getElementById('pStatus')
const clientList = document.getElementById('c-list')
const addClientBtn = document.getElementById('addClient')
const phErrorDiv = document.getElementById('phError')
const pemErrorDiv = document.getElementById('pemError')
const semErrorDiv = document.getElementById('semError')
const submitErrorDiv = document.getElementById('submitError')
// const formDiv = document.getElementById('form')
const form1Div = document.getElementById('form1')
const updateDataBtn = document.getElementById('updateData')
const deleteBtn = document.getElementById('deleteBtn')
const sIpt = document.getElementById('sIpt')
const userError = document.getElementById('userError')
const fNerror = document.getElementById('fNerror')
const lNerror = document.getElementById('lNerror')
const pNerror = document.getElementById('pNerror')

const ipFields = document.querySelectorAll('input[type=text]')

/*
dNone()
inputCheck()
checkFun()
sltAll()
deleteAll()
getdata()
validateMail()
validatePhone()
checkUser()
iptDnone()
//getInput()
newUser()
showForm()
updateLocalStorage()
updateUserdata()
updateClientData() 
deleteUser()
searchData()
*/

let users =[]
let data =[] ;
let dltArr=[];

const dNone =()=> {
	form1Div.style.visibility= 'hidden'
	updateDataBtn.disabled = true
	submitErrorDiv.style.display = 'none'
	phErrorDiv.style.display = 'none'
	pemErrorDiv.style.display = 'none'
}
dNone()

const inputCheck =()=> {
	let input= {fName:null, lName:null , phone:null, pEmail:null, sEmail:null, pName:null}
	let len = ipFields.length
	for (let i=1; i<len; i++){
		for (let x in input){
			if(ipFields[i].name == x){
				input[x]= ipFields[i].value
			}
		}
	}
	input.phCheck = validatePhone(input.phone)
	input.pemCheck = validateMail(input.pEmail)
	input.pStatus=pStatusEl.value 
	return input
}

const checkFun =()=> {
 	let checkboxes = document.getElementsByName('client')
 	document.getElementById('selectAll').onclick = () => {
	    checkboxes.forEach(c=> c.checked = selectAll.checked)
	}
	
	document.getElementById('deleteAll').onclick =()=> {
		checkboxes.forEach(c => {if(c.checked==true){dltArr.unshift(c.value)}})
		if(dltArr.length){
			let cnfrm = confirm('Do u want to delete selected contacts?')
			if(cnfrm){
				for (const x of dltArr){
					data.forEach(e => {if(e.pEmail == x) {data.splice(data.indexOf(e),1)}})
				}
				dltArr=[]
			}
			localStorage.setItem('Clients', JSON.stringify(data))
			getData()
		}
		
	}
 }

//Getting previous data
 const getData=()=> {
 	data = JSON.parse(localStorage.getItem("Clients"))
 	clientList.innerHTML=''
 	let opt = `<thead><th><input type='checkbox' id='selectAll'></th><th>First Name</th><th>Last Name</th><th>Phone</th><th>Primary Email</th>
 	<th>Secondary Email</th><th>Project Name</th><th>Project Status</th><th colspan='2'><button id='deleteAll'>Delete</button></th></thead><tbody>`
 	if (data && data.length) {
 		users = data
	 	for (const x of data) {
	 		opt += `<tr><th><input type='checkbox' name='client' value='${x.pEmail}'></th><th>${x.fName}</th><td>${x.lName}</td><td>${x.phone}</td><th>${x.pEmail}</th><td>${x.sEmail}</td>
	 		<td>${x.pName}</td><td>${x.pStatus}</td><td><button onclick='updateClient("${x.pEmail}")'>Update</button></td><td>
			<button onclick='deleteUser("${x.pEmail}")'>Delete</button></td> </tr>`
	 	}
	 	opt += `</tbody>`
	 	clientList.innerHTML = opt
		checkFun()
	 }
 }
 getData()
 
const validateMail =(mail) => {
	let pattern = /^[A-z][A-z0-9]+@[A-z0-9]+.[A-z]{2,}$/
	if (mail.match(pattern)) {
		pemErrorDiv.style.display='none'
		return true
	}
	else {
		pemErrorDiv.style.display='block'
		pemErrorDiv.innerHTML= `Enter Valid Mail`
		return false
	}
}

const validatePhone=(val) => {
	let pattern = /^[\d]{10}$/
	if (val.match(pattern)) {
		phErrorDiv.style.display='none'
		return true
	}
	else {
		phErrorDiv.style.display='block'
		phErrorDiv.innerHTML = `Mobile Number Must be 10 Digits`
		return false
	}
}

// User is in our data or not
const checkUser = (mail, sMail)=> {
	if (data) {
		let m1 =  data.find(e => e.pEmail == mail)
		let m2=  data.find(e => e.sEmail == sMail)
		return [m1, m2]
	}
	return false
}
const iptDnone =() => {
	fNerror.style.display= 'none'
	lNerror.style.display= 'none'
	pNerror.style.display= 'none'
	semErrorDiv.style.display='none'
} 
const ipFieldsCheck =()=> {
	let input = inputCheck()
	let arr=[]
	if (!input.fName) {
			fNerror.style.display = 'block'
			fNerror.innerHTML = `Enter Your First Name`
	} else {
		fNerror.style.display = 'none'
		arr.push(1)
	}
	if (!input.lName) {
		lNerror.style.display = 'block'
		lNerror.innerHTML = `Enter Your Last Name`
	} else {
		lNerror.style.display = 'none'
		arr.push(2)
	}
	if (!input.sEmail) {
		semErrorDiv.style.display='block'
		semErrorDiv.innerHTML=`Enter Your Secondary Email`
	} else {
		semErrorDiv.style.display='none'
		arr.push(3)
	}
	if (!input.pName) {
		pNerror.style.display = 'block'
		pNerror.innerHTML = `Enter Your Project Name`
	} else {
		pNerror.style.display = 'none'
		arr.push(4)
	}
	return arr


}

const newUser =()=> {
	let input = inputCheck()
	let emPresent = checkUser(input.pEmail, input.sEmail)
	let ipfieldCheck = ipFieldsCheck().length
	if(ipfieldCheck==4){
		if (input.phCheck && input.pemCheck) {
			iptDnone()
			if (!emPresent[0] && !emPresent[1] ){
				if (input.pEmail != input.sEmail){
						semErrorDiv.style.display='none'
						let user = {'fName' : input.fName, 'lName' :input.lName,'phone': input.phone, 'pEmail': input.pEmail, 'sEmail': input.sEmail, 'pName': input.pName, 'pStatus': input.pStatus}
						users.push(user)
						localStorage.setItem('Clients', JSON.stringify(users))
						alert(`Thank you ${input.fName}, Your details submited`)
						submitErrorDiv.innerHTML= `Submitted`
						getData()
						form1Div.reset()
						ipFields[1].focus()
						return true
				} else {
					semErrorDiv.style.display='block'
					semErrorDiv.innerHTML= `Primary and Secondary Must not be Same!`
					return false
				}
			} else if (1){
				if (emPresent[0]){
					submitErrorDiv.style.display ='block'
					submitErrorDiv.innerHTML= `You already Registered, If you want you can update <br> 
					<a onclick='updateClient("${input.pEmail}")'>${input.pEmail}</a>`
				}
				else if (emPresent[1]) {
					semErrorDiv.style.display='block'
					semErrorDiv.innerHTML=`Try New Secondary mail id`
				}
				return false
			}
		}
	} else {
		return false
	} 
	return false
	
}

const showForm =() => {
	form1Div.reset()
	submitBtn.disabled = false
	//pEmailEl.disabled = false
	ipFields[4].disabled= false
	if (form1Div.style.visibility== 'hidden'){
		form1Div.style.visibility = 'visible'
		ipFields[1].focus()
		//fNameEl.focus()
	} else {
		dNone()
	}
}
const updateLocalStorage = () => {
	event.preventDefault()
	let input = inputCheck()
	let ipfieldCheck = ipFieldsCheck().length
	if(ipfieldCheck == 4){
		if(validatePhone(input.phone) && validateMail(input.sEmail)){
			if (checkUser(input.pEmail,input.sEmail)){
				for (const x in data) {
					if (data[x].pEmail == input.pEmail) {
						data[x].fName = input.fName
						data[x].lName = input.lName
						data[x].phone = input.phone
						data[x].sEmail = input.sEmail
						data[x].pName = input.pName
						data[x].pStatus = input.pStatus
						break;
					} 
				}
				dNone()
			}
		}
	}
	
	localStorage.setItem('Clients', JSON.stringify(data) )
	getData()
	//form1Div.reset()
}
const updateUserData = (x) => {
 let len = ipFields.length
 	for (let i=1; i<len; i++){
		for (const y in x){
			if(ipFields[i].name == y){
				ipFields[i].value = x[y]
			}
		}
	}
	pStatusEl.value= x.pStatus
}

const updateClient = (cEmail)=> {
	//event.preventDefault()
	dNone()
	if (data){
		for (const x of data){
			if (x.pEmail == cEmail){
				showForm()
				updateDataBtn.disabled = false
				ipFields[4].disabled= true
				submitBtn.disabled = true
				updateUserData(x)
				break
			} 
		}
	}
}
const deleteUser = (cEmail)=> {
	let cnfrm= confirm(`Do u want to delete ${cEmail} id???`)
	if(cnfrm){
		data.forEach(e => {
		if(e.pEmail == cEmail){
			data.splice(data.indexOf(e),1)
		}
		})
		localStorage.setItem('Clients', JSON.stringify(data))
		getData()
	}
}


const searchData =()=> {
	let ipt = sIpt.value.toLowerCase()
	let pattern =/[\S]+/g
	// console.log(ipt.match(pattern), 'patern')

	let len =ipt.length
	let opt = `<thead><th><input type='checkbox' id='selectAll'></th><th>First Name</th><th>Last Name</th><th>Phone</th><th>Primary Email</th>
 	<th>Secondary Email</th><th>Project Name</th><th>Project Status</th><th colspan='2'><button id='deleteAll'>Delete</button></th></thead><tbody>`
 	let flen = 0
 	const searchData = JSON.parse(JSON.stringify(data)) 
 	// if(ipt){
 		//ipt = ipt.match(pattern).toString()
 		for (const x of searchData) {
 		userError.style.display= 'none'
 		//x.fName.substring(0, len).toLowerCase() == ipt.substring(0, len).toLowerCase()
 		// console.log(x.fName, 'before')
 		// //x.fName = x.fName.toLowerCase()
 		// console.log(x.fName, 'after')
 		
 		if (x.fName.toLowerCase().includes(ipt)){
 			console.log(x.fName.includes(ipt), 'ipt')
 			flen++
 			userError.style.display= 'none'
 			clientList.style.visibility= 'visible'
 			opt += `<tr><th><input type='checkbox' name='client' value='${x.pEmail}'></th><th>${x.fName}</th><td>${x.lName}</td><td>${x.phone}</td><th>${x.pEmail}</th><td>${x.sEmail}</td>
 			<td>${x.pName}</td><td>${x.pStatus}</td><td><button onclick='updateClient("${x.pEmail}")'>Update</button></td><td>
			<button onclick='deleteUser("${x.pEmail}")'>Delete</button></td> </tr>`
 		} else if (!flen){
 			userError.style.display= 'block'
			userError.innerHTML = `User Not Found`
			clientList.style.visibility= 'hidden'
 		}
 		opt += `</tbody>`
 		clientList.innerHTML = opt
 	}

 	// }
 	
 	checkFun()
}

document.body.onclick= getData()
sIpt.onkeyup = ()=> searchData()
updateDataBtn.onclick = ()=> updateLocalStorage()
form1Div.onsubmit =()=> console.log('submitted')
addClientBtn.onclick =()=> showForm()
submitBtn.onclick =() => newUser()
