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
    for(var i=1;i<=10;i++)
    {
        tresc+='<div class="slajd"> <img src="img/miniaturki/obraz'+i+'.JPG" alt="Zdjęcie'+i+'"/></div>';
    }
    return tresc+'</div>';
}
