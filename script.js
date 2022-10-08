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


btnClass.forEach(elem => elem.addEventListener('mouseover', (event) => {
    const x = event.pageX - elem.offsetLeft
    const y = event.pageY - elem.offsetTop
    
    elem.style.setProperty('--xPos', x + 'px')
    elem.style.setProperty('--yPos', y + 'px')
}))

const hideFun = () => {
    skillsDiv.style.display = 'none'
    outputEl.style.display = 'none'
    projectsDiv.style.display = 'none'
}

hideFun()

const aboutFun = () => {
    hideFun()
    if (outputEl.style.display == 'none') {
        outputEl.style.display = 'block'
        let message = `I am a recently completed Enginnering Graduate who is passionated about 
        developing web applications <a href="./welcomePage/index.html" >Click to know more</a>`
        outputEl.innerHTML = `${message}`
    }
}

const skillsFun = () => {
    hideFun()
    outputEl.style.display = 'none'
    if (skillsDiv.style.display == 'none') {
        skillsDiv.style.display = 'block'
    }
}

const projectsFun = () => {
    hideFun()
    if (projectsDiv.style.display == 'none') {
        projectsDiv.style.display = 'block'
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

    if (user) {
        vName = user;
        vName = vName.charAt(0).toUpperCase() + vName.substring(1)
        console.log(vName, 'if')
        alert(`Welcome again ${user}`)
    } else {
        let name = prompt('Enter your name')
        vName = name;
        vName = vName.charAt(0).toUpperCase() + vName.substring(1)
        console.log(vName, 'else')
        setCookie('Name', name, 30)
    }
    vnameEl.innerHTML = `${vName}`
}
checkCookie()

projectsEl.onclick = () => projectsFun()
aboutEl.onclick = () => aboutFun()
skillsEl.onclick = () => skillsFun()