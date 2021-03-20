function zapisz()
{
        var item = {};
        item.nazwa = document.getElementById('nazwa').value;
        item.cena = document.getElementById('cena').value;
        item.kolor = document.getElementById('kolor').value;
        item.liczba = document.getElementById('liczba').value;
        localStorage.setItem('item-1', JSON.stringify(item));
}