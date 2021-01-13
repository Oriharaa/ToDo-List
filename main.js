'use strict';

const ask = document.querySelector('.home__text'); 
const input = document.querySelector('.home__input');
const homeFooter = document.querySelector('.home__footer');
const USER_LS = 'currentUser';
let currentUser = undefined;

input.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        if(currentUser === undefined){
            saveName(e);
            loadName();
        }else {
            emailFromPsw();
        }
    }

});



function nameFromEmail(text){
    const changeName = document.createElement('button');
    const loggedOut = document.createElement('button');
    changeName.innerText = 'Change name';
    loggedOut.innerText = 'Stay logged out';
    ask.innerText = `What's your email, ${text}?`
    homeFooter.appendChild(changeName);
    homeFooter.appendChild(loggedOut);

}

function emailFromPsw(){
    const terms = document.createElement('p');
    const termsLink = document.createElement('a');
    const homeContinue = document.querySelector('.home__continue');
    terms.innerText = 'Momentum respects your privacy. Learn more in our ';
    terms.classList.add('home__terms');
    termsLink.innerText = 'Terms & Privacy Policy.';
    termsLink.classList.add('home__termsLink');
    termsLink.setAttribute('href', 'https://momentumdash.com/legal');
    termsLink.setAttribute('target', 'blank');
    ask.innerText = 'Please choose a password.';
    input.style.width = '650px';
    homeContinue.before(terms);
    terms.appendChild(termsLink);

};

function saveName(e){
    const userName = e.target.value;
    localStorage.setItem(USER_LS, userName);



}

function loadName(){
    currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // 비어있다면..
    }else {
        nameFromEmail(currentUser);
    }
};
