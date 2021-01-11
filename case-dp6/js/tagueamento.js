// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function sendEvent(eventCategory, eventAction, eventLabel) {
    ga('send', {
        hitType: 'event',
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel
      });
}

window.onload = function() {
    const contact = document.getElementById("entreemcontato")
    const download = document.getElementById("botaodownload")
    const analyzeOne = document.querySelector('[data-id="lorem"]')
    const analyzeTwo = document.querySelector('[data-id="ipsum"]')
    const analyzeThree = document.querySelector('[data-id="dolor"]')
    const formEventName = document.getElementById('nome')
    const formEventEmail = document.getElementById('email')
    const formEventPhone = document.getElementById('telefone')
    const formEventAcept = document.getElementById('aceito')
    const form = document.querySelector('form.contato')

    const sendContact = (element) => {
       sendEvent('menu', 'entre_em_contato', 'link_externo')
      console.log("Evento de Entre em contato enviado.")
    }

    const sendDownload = (element) => {
        sendEvent("menu", "download_pdf", "download_pdf")
        console.log("Evento de Download enviado.")
    }

    const sendButtonOne = (element) => {
        sendEvent("analise", "ver_mais", "Lorem")
        console.log("Evento de Ánalise 1 enviado")
    }

    const sendButtonTwo = (element) => {
        sendEvent("analise", "ver_mais", "Ipsum")
        console.log("Evento de Ánalise 2 enviado")
    }

    const sendButtonThree = (element) => {
        sendEvent("analise", "ver_mais", "Dolor")
        console.log("Evento de Ánalise 3 enviado")
    }

    const sendFormOne = (element) => {
        if (element.target.value.length > 0) {
            sendEvent("contato", "nome", "preencheu")
            console.log("Evento de Formulário Nome Enviado.")
        }
    }

    const sendFormTwo = (element) => {
        if (element.target.value.length > 0) {
            sendEvent("contato", "email", "preencheu")
            console.log("Evento de Formulário Email Enviado.")
        }
    }

    const sendFormThree = (element) => {
        if (element.target.value.length > 0) {
            sendEvent("contato", "telefone", "preencheu")
            console.log("Evento de Formulário Telefone Enviado.")
        }
    }

    const sendFormFour = (element) => {
        if (element.target.checked){
            sendEvent("contato", "aceito", "preencheu")
            console.log("Evento de Formulário Aceito Enviado.")
        }
    }

    const sendForm = (element) => {
        sendEvent("contato", "enviado", "enviado")
        console.log("Evento Popup Enviado.")
    }
    
    contact.addEventListener("click", sendContact)
    download.addEventListener("click", sendDownload)
    
    if (analyzeOne){ 
        analyzeOne.addEventListener("click", sendButtonOne)
    }

    if (analyzeTwo){
        analyzeTwo.addEventListener("click", sendButtonTwo)
    }

    if (analyzeThree){
        analyzeThree.addEventListener("click", sendButtonThree)
    }

    if (formEventName){
        formEventName.addEventListener("blur", sendFormOne)
    }

    if (formEventEmail){
        formEventEmail.addEventListener("blur", sendFormTwo)
    }

    if (formEventPhone){
        formEventPhone.addEventListener("blur", sendFormThree)
    }

    if (formEventAcept){
        formEventAcept.addEventListener("change", sendFormFour)
    }

    if (form){
        form.addEventListener("submit", sendForm)
    }

  };