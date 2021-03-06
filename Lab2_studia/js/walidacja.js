function sprawdzPole(pole_id,obiektRegex)
{
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return false;
    else return true;
}
function sprawdz_radio(nazwa_radio)
{
    var obiekt=document.getElementsByName(nazwa_radio);
    for (i=0;i<obiekt.length;i++)
    { wybrany=obiekt[i].checked;
        if (wybrany) return true; }
    return false;
}
function sprawdz_box(box_id)
{
    var obiekt=document.getElementsByName(box_id);
    for (i=0;i<obiekt.length;i++)
    { wybrany=obiekt[i].checked;
        if (wybrany) return true; }
    return false;
}
function sprawdz()
{
    var ok=true;
    obiektNazw = /^[a-zA-Z]{2,20}$/;
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek=/^[1-9][0-9]{1,2}$/;

    if (!sprawdzPole("nazw",obiektNazw))
    {
        ok=false;
        document.getElementById("nazw_error").innerHTML= "Wpisz poprawnie nazwisko!";
    }
    else document.getElementById("nazw_error").innerHTML="";
    if (!sprawdzPole("wiek",obiektWiek))
    {
        ok=false;
        document.getElementById("wiek_error").innerHTML= "Wpisz poprawnie wiek!";
    }
    else document.getElementById("wiek_error").innerHTML="";
    if (!sprawdzPole("email",obiektemail))
    {
        ok=false;
        document.getElementById("email_error").innerHTML= "Wpisz poprawnie email!";
    }
    else document.getElementById("email_error").innerHTML="";
    if (!sprawdz_box("jezyk"))
    {
        ok=false;
        document.getElementById("produkt_error").innerHTML= "Zaznacz produkt!";
    }
    else document.getElementById("produkt_error").innerHTML="";
    if (!sprawdz_radio("zaplata"))
    {
        ok=false;
        document.getElementById("zaplata_error").innerHTML= "Wybierz sposób zapłaty!";
    }
    else document.getElementById("zaplata_error").innerHTML="";
    return ok;
    pokazDane();
}
function pokazDane()
{
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Nazwisko: "+document.getElementById('nazw').value+"\n";
    dane+="Wiek: "+document.getElementById('wiek').value+"\n";
    dane+="Kraj: "+document.getElementById("kraj").value+"\n";
    dane+="Email: "+document.getElementById('email').value+"\n";
    dane+="Język: ";
    var jezyk=document.getElementsByName("jezyk");
    for(let i=0; i<jezyk.length; i++)
    {
        if(jezyk[i].checked) dane+=jezyk[i].value+" ";
    }
    dane+="\n"+"Sposób zapłaty: ";
    var zaplata=document.getElementsByName("zaplata");
    for(let i=0; i<zaplata.length; i++)
    {
        if(zaplata[i].checked) dane+=zaplata[i].value+" ";
    }
    if (window.confirm(dane)) return true;
    else return false;
}