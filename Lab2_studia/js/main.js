function oblicz()
{
  var k=parseInt(document.getElementById('k').value);
  var n=parseInt(document.getElementById('n').value);
  var pr=parseInt(document.getElementById('pr').value);
  r.value=((k*pr/12/100)/(1-(1/Math.pow(1+pr/100/12,n)))).toFixed(2);
  ko.value=(n*r.value).toFixed(2);
  if(isNaN(r)||isFinite(r))
  {
    r.value = "Błędne dane";
    r=document.getElementById('r');
  }
  else
  {
      r=document.getElementById('r');
  }
  if(isNaN(ko)||isFinite(ko))
  {
    ko.value = "Błędne dane";
    ko=document.getElementById('ko');
  }
  else
  {
    ko=document.getElementById('ko');
  }
}
