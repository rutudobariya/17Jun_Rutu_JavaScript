function total()
{
    var price =document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var total = price*quantity;
    document.getElementById("subt").innerHTML=+total;
    var disc = (price*quantity)*10/100;
    document.getElementById("disc").innerHTML=+disc; 
    var afterdisc = total-disc;
    document.getElementById("afterdisc").innerHTML=+afterdisc;
}
