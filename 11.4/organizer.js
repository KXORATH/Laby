function dodajDate()
{ var date=new Date();
    document.getElementById('h').innerHTML='Dzisiaj jest: '+
        date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}
function dodajZadanie()
{ var item = {}; //utworzenie obiektu o odpowiednich atrybutach
    item.godzina = document.getElementById('godzina').value;
    item.data = document.getElementById('data').value;
    item.zadanie = document.getElementById('zadanie').value;
    //odczyt listy obiektów z localStorage (jeśli już istnieje):
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (lista===null) lista=[]; //pracujemy z tablicą obiektów
    lista.push(item); //dodaj nowy obiekt do listy
    localStorage.setItem('lista', JSON.stringify(lista)); //zapisz nową listę
}
function pokazListe()
{ var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('list');
    var str="<h2>Lista zadań</h2>";
    if (lista===null) el.innerHTML=str+"<p>Pusta lista zadań</p>";
    else {
        for(i=0;i<lista.length;i++) //pobierz informacje o zadaniach z listy
        {
            str+="<button class='usun' onclick='usunZadanie("+i+")' >X </button>";
            str+=" "+lista[i].data +" godzina: "+lista[i].godzina + " - " ;
            str+= lista[i].zadanie+"<br />";
        }
        el.innerHTML=str;
    }
}
function usunListe()
{ //usuń całą listę z localStorage
    localStorage.removeItem('lista');
    //zaktualizuj widok na stronie
    pokazListe();
}
function usunZadanie(i)
{ var lista = JSON.parse(localStorage.getItem('lista'));
    //usuń i-ty element z listy zadań:
    if (confirm("Usunąć zadanie?")) lista.splice(i,1);
    //zapisz zaktualizowaną listę w localStorage:
    localStorage.setItem('lista', JSON.stringify(lista)); //zapisz listę
    pokazListe(); //zaktualizuj widok na stronie
}