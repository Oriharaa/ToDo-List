let progress = "name";

const USER_LS = 'currentUser';

let user = {
    name: '',
    email: '',
};

document.querySelector('#name-input').addEventListener('keydown', pressEnter);

window.addEventListener('load', () => {
    userLoad();
    console.log(user.name);
    if(user.name){
        gotoEmail();
    }
});




    function pressEnter(event){
        if(event.keyCode == 13){
            infoPush(this.value);
            gotoEmail();
            emailCheck();
        }
    };

    //이메일 입력 받는 페이지
    function gotoEmail(){
        addStyle();
        const name_p = document.getElementById('name-p');
        name_p.innerText = `What's your email, ${user.name} ?`;
        name_p.classList.add('email-p');
        // name_p.setAttribute('class', 'email-p');
    }

    //애니메이션 스타일 주면서
    function addStyle(){
        const user_input = document.getElementById('name-input');
        user_input.style.animationName="reviseP"
        user_input.style.animationDuration="3s";
        user_input.style.animationFillMode="forwards";
        user_input.classList.add('email-input');
        user_input.value="";
    }

    function emailCheck(){
        progress = "email";    
        const stay= document.querySelector('.stay');
        stay.setAttribute('id', 'email-log');


        let checked = document.getElementById('name-input').value.indexOf("@") !== -1
        let user_email = document.getElementById('name-input').value;

        console.log("checked= "+checked);
        console.log(document.getElementById('name-input').value.indexOf("@"));
        if(checked == false){
            document.getElementById('email-check').innerHTML = "sorry, " +user_email+ "doesn't seem to be a vaild email address. Please try again."
        }
        else {
            gotoFinal();
        }

    }

    function gotoFinal(){
        alert("파이널 창 준비")
    }


    function userSave(){
        localStorage.setItem(USER_LS, JSON.stringify(user));
    }

    function infoPush(text){        
        if(user.name){
            user.email = text;
        }else{
            user.name = text;
        }
        userSave();
    }

    function userLoad() {
        const loadUser = localStorage.getItem(USER_LS);
        if(loadUser !== null){
        const parseUser = JSON.parse(loadUser);
        console.log(parseUser);
        console.log(typeof parseUser);
        user = parseUser;
        console.log(user);
        }
    }
