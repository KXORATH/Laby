var produkt = 0;

function zapisz()
{
        var item = {};
        item.nazwa = document.getElementById('nazwa').value;
        item.cena = document.getElementById('cena').value;
        item.kolor = document.getElementById('kolor').value;
        item.liczba = document.getElementById('liczba').value;
        localStorage.setItem('item-'+produkt, JSON.stringify(item));
        produkt++;
}

function wyswietl()
{
        if((JSON.parse(localStorage.getItem('item-0')))===null)
        {
                document.getElementById('tabela').innerHTML = '<br>Nie ma produktów w koszyku - wybierz coś :)';
        }
        else {
                var tresc = "<br><br><table border='1'><tbody><tr><td>Nazwa</td><td>Cena</td><td>Kolor</td><td>Liczba sztuk</td></tr>";
                for (var i = 0; i < localStorage.length; i++) {
                        var p = 'item-' + i;
                        tresc += '<tr><td>' + JSON.parse(localStorage.getItem(p)).nazwa + '</td><td>' + JSON.parse(localStorage.getItem(p)).cena + '</td><td>' + JSON.parse(localStorage.getItem(p)).kolor + '</td><td>' + JSON.parse(localStorage.getItem(p)).liczba + '</td></tr>';
                }
                tresc += '</tbody></table>';
                document.getElementById('tabela').innerHTML = tresc;
        }
}

function usun()
{
        localStorage.clear();
        document.getElementById('tabela').innerHTML = '<br>Nie ma produktów w koszyku - wybierz coś :)';
}