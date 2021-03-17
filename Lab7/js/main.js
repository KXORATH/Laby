function pokaz(id)
{
    var tresc="";
    switch (id)
    { case 2: tresc += pokazGalerie();break;
        case 3: tresc += pokazPost(); break;
        case 4: tresc += pokazKontakt();break;
        default: tresc += pokazO();
    }
    document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
    var tresc ='<h2><br />Pierwsze kroki</h2> ';
    tresc += '<p> W aplikacjach typu SPA (ang. Single Page Application) po przesłaniu pierwszego żądania, również dochodzi do\n' +
        '    odesłania początkowego dokumentu HTML do przeglądarki, jednak po zakończeniu inicjalizacji wszelkie działania\n' +
        '    użytkownika prowadzą tylko do wysłania żądań asynchronicznie (w tle za pomocą AJAX) Odpowiedziami na te żądania\n' +
        '    zwykle są tylko fragmenty kodu HTML (zamiast całych dokumentów), a niekiedy wyłącznie dane, które następnie są wstawiane/ zamieniane w ramach\n' +
        '    istniejących elementów dokumentu HTML. Nigdy nie dochodzi do zamiany całego dokumentu HTML.</p>'+
        '<p class="srodek"><img src="img/baner.jpg" alt="Zdjęcie" /></p>'+
        '<article><h2>Wady SPA</h2><p>'+
        ' Czas wytworzenia oraz nakład pracy włożony w stworzenie aplikacji jest większy, co wiąże ze sobą dodatkowe koszta, dlatego tworzenie małych\n' +
        '      stron jest nieopłacalne - efekt dla strony z jedną zakładka jest niezauważalny Pozycjonowanie stron wymaga większego nakładu pracy. Obecnie\n' +
        '      roboty indeksujące Google nie radzą sobie ze stronami tego typu, co wiąże się z koniecznością tworzenia rozwiązań przystosowanych dla robotów.</p></article>';
    return tresc;
}
function pokazGalerie()
{
    var tresc='<h2><br />Moja galeria</h2>';
    tresc+=' <div class="galeria">';
    for(let i=1;i<=10;i++)
    {
        tresc+='<div class="slajd"> <img src="img/miniaturki/obraz'+i+'.JPG" alt="Zdjęcie'+i+'"/></div>';
    }
    return tresc+'</div>';
}
function pokazKontakt()
{
    var tresc='<h2><br />Kontakt</h2>';
        tresc+= 'Jan Kowalski <br> 00-020 Warszawa <br> Tel: 798 878 456 <br> email: j.kowalski@pollub.edu.pl <br><br>'
    return tresc;
}
function pokazPost()
{
    tresc='<h2><br />Dodaj post</h2>';
    tresc+='<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl" method="post" onsubmit="return pokazDane();">'+
        'Twój email:<br /> <input type="email" name="email" id="email" required /><br />'+
        'Nazwisko i imię:<br /> <input type="text" required pattern="^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}+\' \'[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}$" name="name" id="name" required /><br />'+
        'Telefon:<br /> <input type="tel" name="tel" id="tel" required /><br />'+
        '<br><br> Zainteresowania: <br>'+
        '<input id="zai1" name="Z" value="Sport" type="checkbox"> Sport <input id="zai2" name="Z" value="Muzyka" type="checkbox"> Muzyka <input' +
        ' id="zai3" value="Film"' +
        ' type="checkbox" name="Z">' + ' Film <input' + ' name="Z" id="zai4" value="Inne" type="checkbox">' + ' Inne'+
        '<br><br> Wiek: <br> <input value="Mniej niż 10" name="W" type="radio"> Mniej niż 10 <input value="10-20" name="W" type="radio"> 10-20' +
        ' <input' +
        ' value="21-30" name="W" type="radio"> 21-30' +
        ' <input' +
        ' value="31-40" name="W" type="radio">' +
        ' 31-40'+
        '<input value="41-50" name="W" type="radio"> 41-50 <input value="Więcej niż 50" name="W" type="radio"> Więcej niż 50 <br>'+
        'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc"></textarea>'+
        '<br /> <input type="submit" name="wyslij" value="Wyślij" />'+ '</form></article>';
    return tresc;
}
function pokazDane()
{
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Email: "+document.getElementById('email').value+"\n";
    dane+="Nazwisko i imię: "+document.getElementById('name').value+"\n";
    dane+="Telefon: "+document.getElementById('tel').value+"\n";
    dane+="Zainteresowania: ";
    var zai=document.getElementsByName("Z");
    for(let i=0; i<zai.length; i++)
    {
        if(zai[i].checked) dane+=zai[i].value+" ";
    }
    dane+="\n"+"Wiek: ";
    var wiek=document.getElementsByName("W");
    for(let i=0; i<wiek.length; i++)
    {
        if(wiek[i].checked) dane+=wiek[i].value+" ";
    }
    dane+="\n"+"Komentarz: "+document.getElementById("wiadomosc").value;
    if (window.confirm(dane)) return true;
    else return false;
}
