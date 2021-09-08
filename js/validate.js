const email = document.getElementById("contact__inputemail");

email.addEventListener('input', () => {
    const emailBox = document.getElementById('contact__inputext');
    const emailText = document.querySelector('.contact__messageAlert');
    const emailIco = document.querySelector('.contact__icoAlert');
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
    if (email.value.match(emailPattern)) {
        emailBox.classList.add('active');
        emailBox.classList.remove('inactive');
        emailIco.classList.add('fa-check-circle');
        emailIco.classList.remove('fa-exclamation-circle');
        emailText.innerHTML = ""
    } else if (email.value === '') {
        emailBox.classList.add('inactive');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
        emailBox.classList.remove('active');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
        emailIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
        emailIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
        emailText.innerHTML = "Email Address cannot be empty" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
    } else {
        emailBox.classList.add('inactive');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
        emailBox.classList.remove('active');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
        emailIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
        emailIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
        emailText.innerHTML = "Whoops, make sure it's an email" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
    }
})
