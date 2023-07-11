function si(){
    var p = document.getElementById("pname").value
    var n = document.getElementById("years").value
    var r = document.getElementById("roi").value
    var simple=p*n*r/100;
    document.getElementById("result").innerHTML=simple;
}