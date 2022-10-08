const vnameEl = document.getElementById('vname')
const outputEl = document.getElementById('output')
const aboutEl = document.getElementById('about')
const skillsEl = document.getElementById('skills')
const projectsEl = document.getElementById('projects')
const skillsDiv = document.getElementById('skillsDiv')
const projectsDiv = document.getElementById('projectsDiv')
const btnClass = document.querySelectorAll('.btn')
let vName;
// let vName = prompt('Please provide Your Name...')
vName = vName.charAt(0).toUpperCase()+ vName.substring(1)
vnameEl.innerHTML = `${vName}`
btnClass.forEach(elem => elem.addEventListener('mouseover', (event)=>{
    const x = event.pageX - elem.offsetLeft
    const y = event.pageY - elem.offsetTop
    console.log(x, y)
    elem.style.setProperty('--xPos', x+'px')
    elem.style.setProperty('--yPos', y+'px')
}))

const hideFun =()=>{
    skillsDiv.style.display='none'
    outputEl.style.display='none'
    projectsDiv.style.display='none'
 }

hideFun()

const aboutFun =()=>{
    hideFun()
    if (outputEl.style.display=='none'){
        outputEl.style.display='block'
        let message = `I am a recently completed Enginnering Graduate who are passionated about 
        developing web applications <a href="./welcomePage/index.html" >Click to know more</a>`
        outputEl.innerHTML = `${message}`
    }
}

const skillsFun=()=>{
    hideFun()
    outputEl.style.display='none'
    if (skillsDiv.style.display=='none'){
        skillsDiv.style.display='block'
    } 
}

const projectsFun=()=>{
    hideFun()
    if (projectsDiv.style.display=='none'){
        projectsDiv.style.display='block' 
    }
}

const setCookie = (key, value, days) => {
    let d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))
    let expires = d.toUTCString
    document.cookie = `${key}=${value};expires=${expires};path=/`
  }
  //setCookie('Name', 'Naresh', 30)
  const getCookie = (key) => {
    let val = document.cookie.split(';')
    for (const x of val) {
      if (x.includes(key)) {
        let name = x.substring(key.length + 1)
  
        return name
      }
    }
  }
  //getCookie('Name')
  
  const checkCookie = () => {
    let user = getCookie('Name')
    vName= user;
    if (user) {
      alert(`Welcome again ${user}`)
    } else {
      let name = prompt('Enter your name')
      setCookie('Name', name, 30)
    }
  }
  checkCookie()

projectsEl.onclick = ()=> projectsFun()
aboutEl.onclick =()=> aboutFun()
skillsEl.onclick=()=> skillsFun()