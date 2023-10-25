var userName = document.querySelector(".username")
var password = document.querySelector(".password")
var show;
function showPass() {
    if(show){
        password.type = "text";
        show = false;
    }else{
        password.type = "password";
        show = true;
    }
}