function xepLoai(avg) {
    if(avg>=8)
        console.log("Gioi");
    else if(avg>=6.5)
        console.log("Kha");
    else if(avg>=5)
        console.log("Trung binh");
    else 
        console.log("Yeu");
}
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}