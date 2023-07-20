function add() {
const email = document.getElementById('email');
const pswd = document.getElementById('pswd');
const select = document.getElementById('select-user');
const sbmt = document.getElementById('sbmt_btn');
const error = document.getElementById('error');

let selected_user = select.value;


    if (selected_user === "user") {
        if(email.value === "user@gmail.com" && pswd.value === "user"){
            window.location = "user.html";
        }
        else{
            error.innerHTML = "Email or Password is Wrong";
        }
    }
    else if (selected_user === "Manager") {
        if(email.value === "    " && pswd.value === "manager"){
            window.location = "manager.html";
        }
        else{
            error.innerHTML = "Email or Password is Wrong";
        }
    }
   
    else if (selected_user === "developer") {
        if(email.value === "developer@gmail.com" && pswd.value === "developer"){
            window.location = "developer.html";
        }
        else{
            error.innerHTML = "Email or Password is Wrong";
        }
    }
    else {
        document.write("something went wrong");
    }
}