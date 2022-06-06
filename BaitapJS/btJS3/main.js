//input:
document.getElementById('btntinhTienQuyDoi').onclick = function () {
    var giaTienDo = document.getElementById('giaTienDo').value;
    var soTienQuyDoi = document.getElementById('soTienQuyDoi').value;
    
 
    //output:
    var tienSauKhiDoi = 0;
 
 //progress:
 tienSauKhiDoi = soTienQuyDoi * 23500;
 
 //in output ra giao dien:   
    document.getElementById('tienSauKhiDoi').innerHTML = tienSauKhiDoi + 'VND'; 
 }