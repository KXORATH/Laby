function zapisz()
{
    const kolor = document.getElementById('RGB').value;
    const nazwa = document.getElementById('nazwa').value;
    sessionStorage.setItem(kolor, nazwa);
}

function pokaz()
{
    var tresc='';
    var div = "<div style='background-color: #";
    var end_div = "</div><br>";
    for(var i=0;i<sessionStorage.length;i++)
    {
        var klucz = sessionStorage.key(i);
        var wartosc = sessionStorage.getItem(klucz);
        tresc=tresc+div+klucz+"'>"+wartosc+', kod koloru: '+klucz+end_div;
    }
    document.getElementById('dane').innerHTML = tresc;
}

function usun()
{
    sessionStorage.clear();
}