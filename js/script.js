var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var invalid_email = document.getElementById('invalid-email');
var invalid_password = document.getElementById('invalid-password');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

email.addEventListener('textInput', verify_email);
password.addEventListener('textInput', verify_password);

function validated(){
  if(email.value.length < 8){
    email.style.border = "1px solid red";
    invalid_email.style.display = "block";
    email.focus();
    return false;
  }
  if(password.value.length < 8){
    password.style.border = "1px solid red";
    invalid_password.style.display = "block";
    password.focus();
    return false;
  }
}

function verify_email(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var num = /^(\+\d{1,3}[- ]?)?\d{9}$/;
  if(email.value.match(re) || email.value.match(num)){
    email.style.border = "1px solid green"
    invalid_email.style.display = "none";
    return true;
  }else{
    email.style.border = "1px solid red";
    invalid_email.style.display = "block";
    email.focus();
    return false;
  }
}

function verify_password(){
  if(password.value.length >= 8){
    password.style.border = "1px solid green"
    invalid_password.style.display = "none";
    return true;
  }
}
