let toggles = document.getElementsByClassName('question__accordeon__toggle');
let contentDiv = document.getElementsByClassName('question__accordeon__content');
let inactive = document.getElementsByClassName('question__accordeon__toggle');
let active = document.getElementsByClassName('question__accordeon__toggle');
let arrowUp = document.getElementsByClassName('question__accordeon__arrow');
let arrowDown = document.getElementsByClassName('question__accordeon__arrow');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            active[i].classList.remove('active');
            inactive[i].classList.add('inactive');
            arrowUp[i].classList.add('fa-chevron-up');
            arrowDown[i].classList.remove('fa-chevron-down');

        } else {
            contentDiv[i].style.height = "0px";
            inactive[i].classList.remove('inactive');
            active[i].classList.add('active');
            arrowUp[i].classList.remove('fa-chevron-up');
            arrowDown[i].classList.add('fa-chevron-down');
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                inactive[j].classList.remove('inactive');
                active[j].classList.add('active');
                arrowUp[j].classList.remove('fa-chevron-up');
                arrowDown[j].classList.add('fa-chevron-down');
            }
        }

    });
}



