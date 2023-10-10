function jumlah() {
  var bil1 = document.getElementById("num1").value;
  var bil2 = document.getElementById("num2").value;
  var total = parseInt(bil1) + parseInt(bil2);
  alert(total);
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
