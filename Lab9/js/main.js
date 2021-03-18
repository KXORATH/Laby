function oblicz()
{
  var k=parseInt(document.getElementById('k').value);
  var n=parseInt(document.getElementById('n').value);
  var pr=parseInt(document.getElementById('pr').value);
  var r=document.getElementById('r');
  var ko=document.getElementById('ko');
  r.value=((k*pr/12/100)/(1-(1/Math.pow(1+pr/100/12,n)))).toFixed(2);
  ko.value=(n*r.value).toFixed(2);
}
