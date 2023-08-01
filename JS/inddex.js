// Lay So Du Lieu
var arrNumber = [];

// var arrDom = document.querySelector('#arrayNumbers');
// var addBtn = document.querySelector('#add-btn');
function themSo() {
  var number = document.querySelector("#number").value * 1;
  arrNumber.push(number);
  document.getElementById("arrayNumbers").innerText = arrNumber;
}
// CÂU 1

function tinhTong() {
  var ketQua = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      ketQua += arrNumber[i];
    }
  }
  document.getElementById("ketQua1").innerText = `Tổng số dương là: ${ketQua}`;
}

// CÂU 2

function demSoDuong() {
  var demSo = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      demSo += 1;
    }
  }
  document.getElementById("ketQua2").innerText = `Số dương là: ${demSo}`;
}

// CÂU 3

function soNhoNhat() {
  var nhoNhat = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < nhoNhat) {
      nhoNhat = arrNumber[i];
    }
  }
  document.getElementById("ketqua3").innerText = `Số nhỏ nhất là: ${nhoNhat}`;
}

// CÂU 4

function timSoDuongNhoNhat() {
  var soDuongNhoNhat = arrNumber[0];
  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < soDuongNhoNhat && arrNumber[i] > 0) {
      soDuongNhoNhat = arrNumber[i];
    }
  }
  if (soDuongNhoNhat < 0 || arrNumber.length == 0) {
    document.getElementById(
      "ketQua4"
    ).innerHTML = `Không có số dương trong mảng`;
  } else {
    document.getElementById(
      "ketQua4"
    ).innerHTML = `Số dương nhỏ nhất là: ${soDuongNhoNhat}`;
  }
}

// Câu 5

function soChanCuoiCung() {
  var soChanCuoi = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      soChanCuoi = arrNumber[i];
    } else {
      soChanCuoi = -1;
    }
  }
  document.getElementById("ketQua5").innerHTML = soChanCuoi;
}

// CÂU 6

function doiCho() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  var viTriAo = arrNumber[viTri1];
  arrNumber[viTri1] = arrNumber[viTri2];
  arrNumber[viTri2] = viTriAo;
  document.getElementById("ketQua6").innerHTML = arrNumber;
}

// CÂU 7

function sapXep() {
  arrNumber.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("ketQua7").innerHTML =
    "Mảng đã sắp xếp: " + arrNumber;
}

// CÂU 8
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function timSoNguyen() {
  for (var i = 0; i < arrNumber.length; i++) {
    if (isPrime(arrNumber[i])) {
      document.getElementById("ketQua8").innerText = arrNumber[i];
      return arrNumber[i];
    }
  }
  document.getElementById("ketQua8").innerText = -1;
}
// CÂU 9
var numArr2 = [];
function inputN2() {
  var number = document.getElementById("number9").value * 1;
  numArr2.push(number);
  document.getElementById("output9_1").innerText = numArr2;
}
function countN2() {
  var count = 0;
  for (var i = 0; i < numArr2.length; i++) {
    if (Number.isInteger(numArr2[i])) {
      count++;
    }
  }
  document.getElementById("ketQua9").innerText = count;
}

// CÂU 10

function sSAD() {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }
  var ketQua10 = document.getElementById("ketQua10");
  if (soDuong > soAm) {
    ketQua10.innerHTML = `Số dương > số âm.`;
  } else if (soDuong < soAm) {
    ketQua10.innerHTML = `Số dương < số âm.`;
  } else {
    ketQua10.innerHTML = `Số dương = số âm.`;
  }
}
