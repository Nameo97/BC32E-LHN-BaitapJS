//input:
document.getElementById('btntinhCvVaDt').onclick = function () {
    var chieuDai = + document.getElementById('chieuDai').value;
    var chieuRong = + document.getElementById('chieuRong').value;
    
 
    //output:
    var dienTichHcn = 0;
    var chuViHcn = 0;
 
 //progress:
 dienTichHcn = chieuDai * chieuRong;
 chuViHcn = (chieuDai + chieuRong) * 2;
 
 //in output ra giao dien:   
    document.getElementById('dienTichHcn').innerHTML = dienTichHcn; 
    document.getElementById('chuViHcn').innerHTML = chuViHcn;
 }
 