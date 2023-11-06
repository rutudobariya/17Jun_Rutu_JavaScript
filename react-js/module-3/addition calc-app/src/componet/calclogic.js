function add()
{
    var a =parseInt(prompt("enter value of a"));
    var b =parseInt(prompt("enter value of b"));
    var c = a+b;
    alert("Addition is two number is :"+c);

}

function sub()
{
    var a =parseInt(prompt("enter value of a"));
    var b =parseInt(prompt("enter value of b"));
    var c = a-b;
    alert("Subtraction is two number is :"+c);

}
function mul()
{
    var a =parseInt(prompt("enter value of a"));
    var b =parseInt(prompt("enter value of b"));
    var c = a*b;
    alert("multiplication is two number is :"+c);

}
function div()
{
    var a =parseInt(prompt("enter value of a"));
    var b =parseInt(prompt("enter value of b"));
    var c = a/b;
    alert("divison is two number is :"+c);

}

export {add, sub,mul,div};