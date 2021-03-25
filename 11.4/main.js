var produkt = 0;

function zapisz()
{
        var item = {};
        item.nazwa = document.getElementById('nazwa').value;
        item.cena = document.getElementById('cena').value;
        item.kolor = document.getElementById('kolor').value;
        item.liczba = document.getElementById('liczba').value;
        localStorage.setItem(produkt, JSON.stringify(item));
        produkt++;
}

function wyswietl()
{
        if((JSON.parse(localStorage.getItem('0')))===null)
        {
                document.getElementById('tabela').innerHTML = '<br>Nie ma produktów w koszyku - wybierz coś :)';
        }
        else {
                var tresc = "<br><br><table><tbody><tr><td>Nazwa</td><td>Cena</td><td>Kolor</td><td>Liczba sztuk</td></tr>";
                for (var i = 0; i < localStorage.length; i++)
                {
                        tresc += '<tr><td>' + JSON.parse(localStorage.getItem(i)).nazwa +
                            '</td><td>' + JSON.parse(localStorage.getItem(i)).cena +
                            '</td><td>' + JSON.parse(localStorage.getItem(i)).kolor +
                            '</td><td>' + JSON.parse(localStorage.getItem(i)).liczba +
                            '</td><td><button onclick="edycja()">Edycja</button></td><td><button onclick="usunZadanie(i)" type="button">Usuń</button></td></tr>';
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

function edycja()
{

}

function usunZadanie(i)
{ var lista = JSON.parse(localStorage.getItem('item'));
        if (confirm("Usunąć zadanie?"))
        {
                lista.splice(i,1);
        }
}

function usuntest(test)
{
        localStorage.removeItem(test);
}
