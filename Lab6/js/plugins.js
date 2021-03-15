function oblicz() {
  var w =document.getElementById("w");
  if (document.getElementById("dodawanie").checked) {
    w.value= calculate('dodawanie');
  }
  if (document.getElementById("odejmowanie").checked) {
    w.value= calculate('odejmowanie');
  }
  if (document.getElementById("mnozenie").checked) {
    w.value= calculate('mnozenie');
  }
  if (document.getElementById("dzielenie").checked) {
    w.value= calculate('dzielenie');
  }
}
function calculate(akcja){
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var result;
  switch(akcja){
    case 'dodawanie':
      result= parseInt(x)+parseInt(y);
      break;
    case 'odejmowanie':
      result= x-y;
      break;
    case 'mnozenie':
      result= x*y;
      break;
    case 'dzielenie':
      result= x/y;
      break;
  }
  return result;
}
