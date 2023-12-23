const form = document.getElementById('#form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function emailValidate() {
    if(!emailRegex.test(campos[0].value)){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function nameValidate() {
    if(campos[1].value.length < 3) {
        setError(1);
    }

    else {
        removeError(1);
    }

}

function maisPasswordValidate() {
    if(campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
        comparePassword();
    }
}

function comparePassword() {
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3);
    }
    else {
        setError(3);
    }
}



