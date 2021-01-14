'use strict';

const ask = document.querySelector('.home__text'); 
const input = document.querySelector('.home__input');
const homeFooter = document.querySelector('.home__footer');
const homeContinue = document.querySelector('.home__continue');

const USER_LS = 'currentUser';
const USER_EM = 'currentEmail';
const USER_PSW = 'currentPassword';

let state = 'name';

input.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        switch(state){
            case 'name' : 
                saveName(e);
                loadName();
                break;
            case 'email' : 
                saveEmail(e);
                emailFromPsw();
                break;
            case 'password' : 
                savePassword(e);
                break;
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

    input.value = '';
    state = 'email';
}

function emailFromPsw(){
    const terms = document.createElement('p');
    const termsLink = document.createElement('a');
    const prevEmail = document.createElement('button');
    terms.innerText = 'Momentum respects your privacy. Learn more in our ';
    terms.classList.add('home__terms');
    termsLink.innerText = 'Terms & Privacy Policy.';
    termsLink.classList.add('home__termsLink');
    termsLink.setAttribute('href', 'https://momentumdash.com/legal');
    termsLink.setAttribute('target', 'blank');
    ask.innerText = 'Please choose a password.';
    prevEmail.innerText = 'Email';
    input.style.width = '650px';
    homeContinue.before(terms);
    terms.appendChild(termsLink);
    
    input.value = '';
    state = 'password';
    
    const changeName = homeFooter.firstChild;
    const loggedOut = homeFooter.lastChild;
    
    homeFooter.removeChild(changeName);
    homeFooter.removeChild(loggedOut);
    homeFooter.appendChild(prevEmail);

};

function saveName(e){
    const userName = e.target.value;
    localStorage.setItem(USER_LS, userName);
}

function saveEmail(e){
    const userEmail = e.target.value;
    localStorage.setItem(USER_EM, userEmail);
}

function savePassword(e){
    const userPassword = e.target.value;
    localStorage.setItem(USER_PSW, userPassword);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
        nameFromEmail(currentUser);
};
