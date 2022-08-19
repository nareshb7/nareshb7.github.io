const vnameEl = document.getElementById('vname')
const outputEl = document.getElementById('output')
const aboutEl = document.getElementById('about')
const skillsEl = document.getElementById('skills')
const projectsEl = document.getElementById('projects')
const skillsDiv = document.getElementById('skillsDiv')
const projectsDiv = document.getElementById('projectsDiv')
const btnClass = document.querySelectorAll('.btn')

let vName = prompt('Please provide Your Name...')
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
        developing web applications`
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

projectsEl.onclick = ()=> projectsFun()
aboutEl.onclick =()=> aboutFun()
skillsEl.onclick=()=> skillsFun()