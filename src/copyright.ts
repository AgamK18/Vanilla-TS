//Problem
// const year = document.getElementById("year") 
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

//Soln 1
// let year: HTMLElement | null
// year = document.getElementById("year") 
// let thisYear: string 
// thisYear = new Date().getFullYear().toString()
// if(year){
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

//Soln 2
const year = document.getElementById("year") as HTMLSpanElement
const thisYear = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

//Soln3
// const year = document.getElementById("year") as HTMLSpanElement
// const thisYear = (new Date().getFullYear() as unknown) as string
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear