const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordC = document.getElementById("pass2");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputs()
});
function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCValue = passwordC.value.trim()

    if (usernameValue.length < 4){
        setInvalidFor(username)
    }else{
setValidFor(username)
    }
    if (emailValue === ""){
        setInvalidFor(email)
    }else if(!isEmail(emailValue)){
        setInvalidFor(email)
    }else{
        setValidFor(email)
    }
    if (passwordValue.length < 7){
        setInvalidFor(password)
    }else{
        setValidFor(password)
    }
    if (passwordCValue === passwordValue){
      setValidFor(passwordC)
}else{
        setInvalidFor(passwordC)
    }
}
function setInvalidFor(input,mesaj) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    small.style.visibility = "visible"
    formControl.className = "form-control invalid"

}
function setValidFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control valid";
    const small = formControl.querySelector("small")
    small.style.visibility = "hidden"
}

function isEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}









