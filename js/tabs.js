const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')
const headActive = document.querySelectorAll('[data-target]')
const contentActive = document.querySelectorAll('[data-target]')


headActive.forEach(headAct => {
    headAct.addEventListener('click', ()=>{
        contentActive.forEach(e => {
            e.classList.remove('headActive');
        })
        headAct.classList.add('headActive');
    })
})



targets.forEach(target => {
    target.addEventListener('click', () => {
        content.forEach(c => {
            c.classList.remove('tab__active')
        })
        const t = document.querySelector(target.dataset.target)
        t.classList.add('tab__active')
    })
})

 