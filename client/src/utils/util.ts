export const getTodayDate = new Date()

export const scrollToSection =(div: HTMLElement, )=> {
    div.scrollIntoView({behavior: "smooth", block: "start"})
  }