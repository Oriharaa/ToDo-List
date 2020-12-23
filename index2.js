"use strict";

document.querySelector('.name__text').addEventListener('keydown', pressEnter);



/* 엔터키 감지 함수 */
function pressEnter(){
    if(window.event.keyCode === 13){
        addStyle();
    }
};

function  addStyle(){
    console.log(" empty the addStyle");
    let reviseEmail = document.createElement("p");
    let emailText = document.createTextNode("What's your email, sindy?");
    reviseEmail.appendChild(emailText);
    let targetul = document.querySelector('.home__container');
    targetul.appendChild(reviseEmail);

}