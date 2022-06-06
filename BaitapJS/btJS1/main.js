//input:
document.getElementById('btntinhTienLuong').onclick = function () {
   var  soNgayLam = document.getElementById('soNgayLam').value;
   var luongMotNgay = document.getElementById('luongMotNgay').value;

   //output:
   var tienLuongCuaBan = 0;

//progress:
   tienLuongCuaBan = soNgayLam * 100000;

//in output ra giao dien:   
   document.getElementById('tienLuongCuaBan').innerHTML = tienLuongCuaBan + 'Vnd'; 
}