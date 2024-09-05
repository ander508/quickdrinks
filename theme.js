const darkMode = document.querySelector('.dark-mode')
const lightMode = document.querySelector('.light-mode')

darkMode.addEventListener('click', function(){
    darkMode.setAttribute('class', 'apply-dark-mode')
    lightMode.setAttribute('class', 'light-mode')
    document.body.setAttribute('class', 'dark')

})


lightMode.addEventListener('click', function(){
    lightMode.setAttribute('class', 'apply-light-mode')
    darkMode.setAttribute('class', 'dark-mode')
    document.body.setAttribute('class', 'light')
})