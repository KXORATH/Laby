function zapisz()
{
    const kolor = document.getElementById('RGB').value;
    const nazwa = document.getElementById('nazwa').value;
    localStorage.setItem(kolor, nazwa);
}

function pokaz()
{
    var tresc='';
    var div = "<div style='background-color: #";
    var end_div = "</div><br>";
    for(var i=0;i<localStorage.length;i++)
    {
        var klucz = localStorage.key(i);
        var wartosc = localStorage.getItem(klucz);
        tresc=tresc+div+klucz+"'>"+wartosc+', kod koloru: '+klucz+end_div;
    }
    document.getElementById('dane').innerHTML = tresc;
}

function usun()
{
    localStorage.clear();
}