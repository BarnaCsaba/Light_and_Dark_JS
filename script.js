let theme = false
function switchTheme() {
  // TODO: implement toggling the light/dark theme
  
  document.getElementById('navbar')
  const navbar =   document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables = document.querySelectorAll('.table')
  const h1title = document.getElementById('h1-title')
  const cardColums = document.querySelectorAll('.column')
  
if (theme === false)
{
  document.body.classList.add('bg-dark')
  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')
  cards.forEach(card => {
    card.classList.add('text-white', 'bg-dark', 'border-light')
  })


  tables.forEach(table => {
    table.classList.add('table-dark')
  })

  cardColums.forEach(card => {
    card.classList.remove('col')
  })

  const footer = document.querySelector('.navbar-text')
  footer.style.paddingLeft = "1700px"
  footer.style.display = "block"
  footer.classList.add('text-white')

h1title.innerHTML = "This is the dark theme"
h1title.classList.add("text-white")

const light = document.getElementById('themeSwitch')
light.innerHTML = "Activate Light Theme"

}
else
{
 
  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')

  document.body.classList.remove("bg-dark")
  document.body.classList.add('bg-light')
  navbar.classList.remove('navbar-dark', 'bg-dark')
  navbar.classList.add('navbar-light', 'bg-light')
  cards.forEach(card => {

    card.classList.remove('text-white', 'bg-dark', 'border-dark')
    card.classList.add('text-black', 'bg-light', 'border-dark')
  })


  tables.forEach(table => {
    table.classList.remove('table-dark')
    table.classList.add('table-light')
  })

  cardColums.forEach(card => {
    card.classList.remove('col')
  })

  const footer = document.querySelector('.navbar-text')
  footer.style.paddingLeft = "1700px"
  footer.style.display = "block"
  footer.classList.add('text-white')

h1title.innerHTML = "This is the light theme"

h1title.classList.add("text-black")

const light = document.getElementById('themeSwitch')
light.innerHTML = "Activate Dark Theme"


}
theme = !theme
}
