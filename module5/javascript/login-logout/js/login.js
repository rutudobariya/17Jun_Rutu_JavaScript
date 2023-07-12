function loginus()
{
    var mob=document.getElementById("mobile").value;
    var pwd=document.getElementById("pass").value;
    if(mob=="6351930661" && pwd=="6351930661")
    {
        alert('You are successfully Logged in')
        window.location.href='dasheboard.html'; 
    }
    else 
    {

        alert('Your mobile and password are incorrect try again')
        window.location.href='index.html';
    }
}

function logout()
{
    alert('You are Logout successfully')
    window.location.href='index.html';
}
