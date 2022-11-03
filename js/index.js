let cardNum = document.querySelector('.card-num')
let cardName = document.querySelector('.card-name')
let cardCvc = document.querySelector('.card-cvc')
let cardYear = document.querySelector('.card-year')
let cardMonth = document.querySelector('.card-month')

let formName = document.querySelector('#name')
let formNum = document.querySelector('#number')
let formCvc = document.querySelector('#cvc')
let formYear = document.querySelector('#year')
let formMonth = document.querySelector('#month')

let form = document.getElementById('form')
let formDiv = document.querySelector('.form')
let completePage = document.querySelector('.completed')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    cardName.innerText = formName.value

    // add space after 4 digits
    cardNum.innerText = formNum.value.replace(/(\d{4})/g, '$1 ').trim();
    cardCvc.innerText = formCvc.value
    cardMonth.innerText = formMonth.value
    cardYear.innerText = formYear.value
    

    formDiv.classList.add('hide');
    completePage.classList.remove('hide');
});

function refreshPage(){
    window.location.reload();
} 