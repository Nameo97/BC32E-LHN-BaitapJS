//input:
document.getElementById('btntinhGiaTriTb').onclick = function () {
    var soThuc1 = + document.getElementById('soThuc1').value;
    var soThuc2 = + document.getElementById('soThuc2').value;
    var soThuc3 = + document.getElementById('soThuc3').value;
    var soThuc4 = + document.getElementById('soThuc4').value;
    var soThuc5 = + document.getElementById('soThuc5').value;
    
 
    //output:
    tongCacSo = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5;
    var tongGiaTri = 0;
 
 //progress:
 tongGiaTri = tongCacSo / 5;
 
 //in output ra giao dien:   
    document.getElementById('tongGiaTri').innerHTML = tongGiaTri; 
 }
 