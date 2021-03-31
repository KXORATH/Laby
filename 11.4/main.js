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
                            '</td><td><button onclick="edycja()">Edycja</button></td><td><button onclick="usunZadanie(i)"' +
                            ' type="button">Usuń</button></td></tr>';
                }
                tresc += '</tbody></table>';
                document.getElementById('tabela').innerHTML = tresc;
        }
}

function dodajZadanie()
{ var item = {};
        item.nazwa = document.getElementById('nazwa').value;
        item.cena = document.getElementById('cena').value;
        item.kolor = document.getElementById('kolor').value;
        item.liczba = document.getElementById('liczba').value;
        var lista = JSON.parse(localStorage.getItem('lista'));
        if (lista===null) lista=[];
        lista.push(item);
        localStorage.setItem('lista', JSON.stringify(lista));
}
function pokazListe()
{ var lista = JSON.parse(localStorage.getItem('lista'));
        var el=document.getElementById('tabela');
        var str="<h2>Twój koszyk:</h2><br><table><tbody><tr><td>Nazwa</td><td>Cena</td><td>Kolor</td><td>Liczba sztuk</td></tr>";
        if (lista===null) el.innerHTML=str+"<p>Pusta lista zadań</p>";
        else {
                for(i=0;i<lista.length;i++)
                {
                        str+="<tr><td>"+lista[i].nazwa+"</td><td>"+lista[i].cena+"</td><td>"+lista[i].kolor+"</td><td>"+lista[i].liczba+"</td>";
                        str+="<td><button class='usun' onclick='usunZadanie("+i+")' >usuń</button></td>";
                        str+="<td><button class='edycja' onclick='edycja("+i+")' >edycja</button></td></tr>";
                }
        }
        str+="</tbody></table>";
        el.innerHTML=str;
}
function usunListe()
{
        localStorage.removeItem('lista');
        //zaktualizuj widok na stronie
        pokazListe();
}
function usunZadanie(i)
{ var lista = JSON.parse(localStorage.getItem('lista'));
        if (confirm("Usunąć produkt?")) lista.splice(i,1);
        localStorage.setItem('lista', JSON.stringify(lista));
        pokazListe();
}
/*function edycja(i)
{
        var el = document.getElementById("edycja");
        var tresc="<form>Nazwa produktu: <input type='text' id='nazwae'> Cena: <input type='number' id='cenae'> Kolor: <input type='color'" +
            " id='kolore'>" +
            "Liczba sztuk: <input type='number' id='liczbae'> <button type='button' onclick='edycjaWpis(i)'>Zapisz</button> </form>";
        el.innerHTML=tresc;
}
function edycjaWpis(i)
{
        var lista = JSON.parse(localStorage.getItem('lista'));
        lista[i].nazwa = document.getElementById('nazwae').value
        lista[i].cena = document.getElementById('cenae').value
        lista[i].kolor = document.getElementById('kolore').value
        lista[i].liczba = document.getElementById('liczbae').value
        localStorage.setItem('lista', JSON.stringify(lista));
        pokazListe();
}*/

function edycja(i)
{
        var lista = JSON.parse(localStorage.getItem('lista'));
        var lista2 = JSON.parse(localStorage.getItem('lista'));
        lista[i].nazwa = prompt("Podaj nazwę:",lista2[i].nazwa);
        lista[i].cena = prompt("Podaj cenę:",lista2[i].cena);
        lista[i].kolor = prompt("Podaj kolor:",lista2[i].kolor);
        lista[i].liczba = prompt("Podaj liczbę sztuk:",lista2[i].liczba);
        if(lista[i].nazwa===null || lista[i].nazwa==="") lista[i].nazwa = lista2[i].nazwa;
        if(lista[i].cena===null || lista[i].cena==="") lista[i].cena = lista2[i].cena;
        if(lista[i].kolor===null || lista[i].kolor==="") lista[i].kolor = lista2[i].kolor;
        if(lista[i].liczba===null || lista[i].liczba==="") lista[i].liczba = lista2[i].liczba;
        localStorage.setItem('lista', JSON.stringify(lista));
        pokazListe();

}

function wyszukaj()
{
        var lista = JSON.parse(localStorage.getItem('lista'));
        const wyszukanie = prompt("Jakiego produktu szukasz?");
        if (lista===null) alert("Pusta lista");
        else
        {
                for (i = 0; i < lista.length; i++)
                {
                        if (wyszukanie === lista[i].nazwa) alert("Znaleziono");
                }
        }

}