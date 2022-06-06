//input:
document.getElementById('btntinhTong2KySo').onclick = function () {
    var nhapSoVao = document.getElementById('nhapSoVao').value;
    
 
    //output:
    var soSauKhiTinh = 0;
    // var so_hang_chuc = 0;
    // var so_hang_dv = 0;
 
 //progress:
 soSauKhiTinh = nhapSoVao;
 so_chuc = Math.floor((nhapSoVao % 100) / 10);
 so_dv = nhapSoVao % 10;
 
 //in output ra giao dien:   
     document.getElementById('soSauKhiTinh').innerHTML = so_chuc + so_dv; 
 }

 