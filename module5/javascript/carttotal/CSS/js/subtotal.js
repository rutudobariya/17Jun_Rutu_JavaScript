function sbtot()
{
    var p = document.getElementById("price").value;
    var q = document.getElementById("qty").value;
    var sub=p*q;
    document.getElementById("tot").innerHTML=+sub;
    var disc = (p*q)*10/100
    document.getElementById("disc").innerHTML=+disc;
    var dis = sub - disc;
    document.getElementById("dis").innerHTML=+dis;



    
    // document.getElementById("dis").innerHTML=+applydis();

}
// function applydis(dispercentage){
//     var total = parseFloat(document.getElementById("tot").value);
//     var disamount = total * (dispercentage/100);
//     var distotal = total - disamount;
//     // console.log(parseFloat(distotal));
//     return distotal;
   
// }
