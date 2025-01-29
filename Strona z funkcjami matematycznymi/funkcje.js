//Ćwiczenie 1 Uruchom skrypt podany poniżej i przeanalizuj jego działanie. Dodaj własne komentarze oraz uzupełnij o własne 
//przykłady prezentujące działanie co najmniej 3 z wybranych metod obiektów Global, Number, Math. 
//Ludera Wiktor 
function pokakodcw1()
{
    const kodcw1 = `
    function f1()
{
    var x = document.getElementById("input1").value; 
    // pobranie wartości z pola tekstowego  
    document.getElementById("wynikcw1").innerHTML = " Wartość x=" + x; 
    document.getElementById("wynikcw1").innerHTML += "<BR> x * Math.PI=" + x * Math.PI; 
    //Zwraca wartość liczby pi.

    document.getElementById("wynikcw1").innerHTML += "<BR> Math.cos(Math.PI) = " + Math.cos(Math.PI);  
    //Zwraca cosinus kąta podanego w radianach. Przykład: Math.cos(Math.PI) zwróci -1.

    document.getElementById("wynikcw1").innerHTML += "<BR> Math.round(x) = " + Math.round(x); 
    // Zaokrągla liczbę do najbliższej liczby całkowitej.
    
    document.getElementById("wynikcw1").innerHTML 
    += "<BR> ilość miejs znaczących: x * Math.PI).toPrecision(3) = " + (x * Math.PI).toPrecision(3); 
    /* Obiekt Number - metoda toPrecision() 
    Formatuje liczbę, ograniczając ją do określonej liczby cyfr znaczących.*/
    
    document.getElementById("wynikcw1").innerHTML 
    += "<BR> ilość miejsc po przecinku: (x * Math.PI).toFixed(3)= " + (x * Math.PI).toFixed(3); 
    // obiekt Number - metoda toFixed() - Formatuje liczbę do określonej liczby miejsc po przecinku. 
   
    document.getElementById("wynikcw1").innerHTML 
    += "<BR> (n)=>(10): parseInt(x, 8) = " + parseInt(x, 8); 
    /* metoda parseInt(x, n): 
    Konwertuje x na liczbę całkowitą 
    w systemie liczbowym o podstawie n (np. 8 dla systemu ósemkowego)*/
    
    //konwersja na liczbę całkowitą z systemu (n) 
    x = Number(document.getElementById("input1").value); // konwersja na liczbę 
    document.getElementById("wynikcw1").innerHTML 
    += "<BR> (10)=>(n): " + x + ".toString(2) = " + x.toString(2); 
    //x.toString(2): Przekształca liczbę x do systemu binarnego (2).
    
    // konwersja na łańcuch znaków z systemu (10) 
    var y = parseInt(x, 10); 
    // obiekt Global - metoda parseInt() 
    var z = Math.random()  
    //Zwraca losową liczbę zmiennoprzecinkową
    document.getElementById("wynikcw1").innerHTML += "<BR> losowanie: Math.random() = " + z; 
    document.getElementById("wynikcw1").innerHTML 
    += "<BR> losowanie: (Math.floor(x * Math.random()) - 5).toString()= "
    + (Math.floor(x * z) - 5).toString();
    //Losuje liczbę całkowitą
    
    //Pierwszy Przykład
    let w = 4;
    let poka_potege = Math.pow(w, 2); // 4 do potęgi 2
    document.getElementById("wynikcw1").innerHTML 
    += "<BR><BR> Pierwszy przykład to 4 do potęgi 2 = " + poka_potege;
    //Drugi Przykład
    let liczba_float = "123.45";
    let wartosc_zmieniona = Number.parseFloat(liczba_float); 
    // Konwertuje ciąg tekstowy 123.45 na liczbę zmiennoprzecinkową 123.45
    document.getElementById("wynikcw1").innerHTML 
    += "<BR><BR> Konwersja tekstu na liczbe zmienno przecinkową = " + wartosc_zmieniona;
    //Trzeci Przykład
    let max_value = Math.max(5, 10, 3, 8); // Szuka największej liczby w zbiorze tych 4 liczb
    document.getElementById("wynikcw1").innerHTML 
    += "<BR><BR> Największa liczba w poddanym przedziale (5, 10, 3, 8) to: " + max_value;

    document.getElementById("wynik_cw1").style.display = "block";
} 
// obiekty Math, Number - pozwalają na realizację operacji matematycznych`;
    document.getElementById("kodfunkcjicw1").innerText = kodcw1;
    document.getElementById("kodfunkcjicw1").style.display = "block";
    document.getElementById("kodfunkcji1").style.display = "none";
    document.getElementById("kodfunkcji2").style.display = "none";
    document.getElementById("kodfunkcji3").style.display = "none";
    document.getElementById("kodfunkcji4").style.display = "none";
    document.getElementById("kodfunkcji5").style.display = "none";
    document.getElementById("kodfunkcji6").style.display = "none";
    document.getElementById("kodfunkcji7").style.display = "none";
    document.getElementById("kodfunkcji8").style.display = "none";
    document.getElementById("kodfunkcji9").style.display = "none";
    document.getElementById("kodfunkcji10").style.display = "none";
    document.getElementById("kodfunkcji11").style.display = "none";
    document.getElementById("kodfunkcji12").style.display = "none";
    document.getElementById("kodfunkcji13").style.display = "none";
    document.getElementById("kodfunkcji14").style.display = "none";
    document.getElementById("kodfunkcji15").style.display = "none";
    document.getElementById("kodfunkcjicw2").style.display = "none";
    
    document.getElementById("cw1").style.display = "block";
    document.getElementById("cw2").style.display = "none";
    document.getElementById("zadanie1").style.display = "none";
    document.getElementById("zadanie2").style.display = "none";
    document.getElementById("zadanie3").style.display = "none";
    document.getElementById("zadanie4").style.display = "none";
    document.getElementById("zadanie5").style.display = "none";
    document.getElementById("zadanie6").style.display = "none";
    document.getElementById("zadanie7").style.display = "none";
    document.getElementById("zadanie8").style.display = "none";
    document.getElementById("zadanie9").style.display = "none";
    document.getElementById("zadanie10").style.display = "none";
    document.getElementById("zadanie11").style.display = "none";
    document.getElementById("zadanie12").style.display = "none";
    document.getElementById("zadanie13").style.display = "none";
    document.getElementById("zadanie14").style.display = "none";
    document.getElementById("zadanie15").style.display = "none";

}
function f1()
{
    var x = document.getElementById("input1").value; 
    // pobranie wartości z pola tekstowego  
    document.getElementById("wynikcw1").innerHTML = " Wartość x=" + x; 
    document.getElementById("wynikcw1").innerHTML += "<BR> x * Math.PI=" + x * Math.PI; 
    //Zwraca wartość liczby pi.

    document.getElementById("wynikcw1").innerHTML += "<BR> Math.cos(Math.PI) = " + Math.cos(Math.PI);  
    //Zwraca cosinus kąta podanego w radianach. Przykład: Math.cos(Math.PI) zwróci -1.

    document.getElementById("wynikcw1").innerHTML += "<BR> Math.round(x) = " + Math.round(x); 
    // Zaokrągla liczbę do najbliższej liczby całkowitej.
    
    document.getElementById("wynikcw1").innerHTML += "<BR> ilość miejs znaczących: x * Math.PI).toPrecision(3) = " + (x * Math.PI).toPrecision(3); 
    // Obiekt Number - metoda toPrecision() Formatuje liczbę, ograniczając ją do określonej liczby cyfr znaczących.
    
    document.getElementById("wynikcw1").innerHTML += "<BR> ilość miejsc po przecinku: (x * Math.PI).toFixed(3)= " + (x * Math.PI).toFixed(3); 
    // obiekt Number - metoda toFixed() - Formatuje liczbę do określonej liczby miejsc po przecinku. 
   
    document.getElementById("wynikcw1").innerHTML += "<BR> (n)=>(10): parseInt(x, 8) = " + parseInt(x, 8); 
    // metoda parseInt(x, n): Konwertuje x na liczbę całkowitą w systemie liczbowym o podstawie n (np. 8 dla systemu ósemkowego).
    
    //konwersja na liczbę całkowitą z systemu (n) 
    x = Number(document.getElementById("input1").value); // konwersja na liczbę 
    document.getElementById("wynikcw1").innerHTML += "<BR> (10)=>(n): " + x + ".toString(2) = " + x.toString(2); //x.toString(2): Przekształca liczbę x do systemu binarnego (2).
    // konwersja na łańcuch znaków z systemu (10) 
    var y = parseInt(x, 10); 
    // obiekt Global - metoda parseInt() 
    var z = Math.random()  
    //Zwraca losową liczbę zmiennoprzecinkową
    document.getElementById("wynikcw1").innerHTML += "<BR> losowanie: Math.random() = " + z; 
    document.getElementById("wynikcw1").innerHTML += "<BR> losowanie: (Math.floor(x * Math.random()) - 5).toString()= " + (Math.floor(x * z) - 5).toString();
    //Losuje liczbę całkowitą
    
    //Pierwszy Przykład
    let w = 4;
    let poka_potege = Math.pow(w, 2); // 4 do potęgi 2
    document.getElementById("wynikcw1").innerHTML += "<BR><BR> Pierwszy przykład to 4 do potęgi 2 = " + poka_potege;
    //Drugi Przykład
    let liczba_float = "123.45";
    let wartosc_zmieniona = Number.parseFloat(liczba_float); // Konwertuje ciąg tekstowy 123.45 na liczbę zmiennoprzecinkową 123.45
    document.getElementById("wynikcw1").innerHTML += "<BR><BR> Konwersja tekstu na liczbe zmienno przecinkową = " + wartosc_zmieniona;
    //Trzeci Przykład
    let max_value = Math.max(5, 10, 3, 8); // Szuka największej liczby w zbiorze tych 4 liczb
    document.getElementById("wynikcw1").innerHTML += "<BR><BR> Największa liczba w poddanym przedziale (5, 10, 3, 8) to: " + max_value;

    document.getElementById("wynik_cw1").style.display = "block";
} 
// obiekty Math, Number - pozwalają na realizację operacji matematycznych
function f2() 
{ 
    var l = document.getElementById("input1").value; 
    if ((l != "") && (isNaN(l) == false)) 
    { 
        return l * l; 
    } 
    else return `${l} to nie jest liczba`; 
} 
function f2a() 
{ 
    var l = document.getElementById("input1").value; 
    document.getElementById("wynikcw1").innerHTML += `<BR><BR> Z funkcji f2a():  ${l} * ${l} = ${f2()}` 
} 
// Funkcja f3 z obsługą błędu dzielenia przez zero
/*Uzupełnij skrypt dodając obsługę funkcji f3() przy zdarzeniu kliknięcia przycisku z wyświetlaniem odpowiedniej 
informacji na stronie. Zdefiniuj funkcję f4_XY(), gdzie XY- twoje inicjały, korzystając z definicji funkcji f3() w taki 
sposób aby wyświetlany był również komunikat o błędzie dzielenia przez zero, jeżeli wprowadzimy wartość x równą 
zero. */ 
//Ludera Wiktor 
function pokakodcw2()
{
    const kodcw2 = `
    function f3() 
    {
    let l = document.getElementById('input2').value; 
    if (l == "") 
    { 
        return "To jest pusty łańcuch. Wpisz liczbę"; 
    } 
    else if (isNaN(l) == true) 
    { 
        return "To nie jest liczba. Podaj liczbę"; 
    }
    else if (l == 0) 
    {
        return "Błąd: dzielenie przez zero!";
    } 
    else 
    { 
        return 1/l; 
    } 
    } 
    function f4_WL()
    {
        let wynik_f3 = f3();
        if (wynik_f3 == "Błąd: dzielenie przez zero!") 
        {
            document.getElementById('paragrafcw2').innerText = wynik_f3;
        } 
        else 
        {
            document.getElementById('paragrafcw2').innerText = "Wynik dzielenia: " + wynik_f3;
        }
        document.getElementById("wynik_cw2").style.display = "block";
    }
    document.getElementById('sprawdz_wynik').addEventListener('click', f4_WL);
`;
    document.getElementById("kodfunkcjicw2").innerText = kodcw2;
    document.getElementById("kodfunkcjicw2").style.display = "block";
    document.getElementById("kodfunkcjicw1").style.display = "none";
    document.getElementById("kodfunkcji1").style.display = "none";
    document.getElementById("kodfunkcji2").style.display = "none";
    document.getElementById("kodfunkcji3").style.display = "none";
    document.getElementById("kodfunkcji4").style.display = "none";
    document.getElementById("kodfunkcji5").style.display = "none";
    document.getElementById("kodfunkcji6").style.display = "none";
    document.getElementById("kodfunkcji7").style.display = "none";
    document.getElementById("kodfunkcji8").style.display = "none";
    document.getElementById("kodfunkcji9").style.display = "none";
    document.getElementById("kodfunkcji10").style.display = "none";
    document.getElementById("kodfunkcji11").style.display = "none";
    document.getElementById("kodfunkcji12").style.display = "none";
    document.getElementById("kodfunkcji13").style.display = "none";
    document.getElementById("kodfunkcji14").style.display = "none";
    document.getElementById("kodfunkcji15").style.display = "none";
    
    document.getElementById("cw1").style.display = "none";
    document.getElementById("cw2").style.display = "block";
    document.getElementById("zadanie1").style.display = "none";
    document.getElementById("zadanie2").style.display = "none";
    document.getElementById("zadanie3").style.display = "none";
    document.getElementById("zadanie4").style.display = "none";
    document.getElementById("zadanie5").style.display = "none";
    document.getElementById("zadanie6").style.display = "none";
    document.getElementById("zadanie7").style.display = "none";
    document.getElementById("zadanie8").style.display = "none";
    document.getElementById("zadanie9").style.display = "none";
    document.getElementById("zadanie10").style.display = "none";
    document.getElementById("zadanie11").style.display = "none";
    document.getElementById("zadanie12").style.display = "none";
    document.getElementById("zadanie13").style.display = "none";
    document.getElementById("zadanie14").style.display = "none";
    document.getElementById("zadanie15").style.display = "none";
}
function f3() 
{
    let l = document.getElementById('input2').value; 
    if (l == "") 
    { 
        return "To jest pusty łańcuch. Wpisz liczbę"; 
    } 
    else if (isNaN(l) == true) 
    { 
        return "To nie jest liczba. Podaj liczbę"; 
    }
    else if (l == 0) 
    {
        return "Błąd liczba została podzielona przez zero.";
    } 
    else 
    { 
        return 1/l; 
    }
} 
function f4_WL()
{
    let wynik_f3 = f3();
    if (wynik_f3 == "Błąd liczba została podzielona przez zero.") 
    {
        document.getElementById('paragrafcw2').innerText = wynik_f3;
    } 
    else 
    {
        document.getElementById('paragrafcw2').innerText = "Wynik dzielenia: " + wynik_f3;
    }
    document.getElementById("wynik_cw2").style.display = "block";
}
document.getElementById('sprawdz_wynik').addEventListener('click', f4_WL);

b1.addEventListener('click', f1); 
b1.addEventListener('click', f2a); 


// Zadanie 1. skrypt sprawdzający czy wartość wprowadzona do pola tekstowego jest liczbą. Jeżeli tak, to czy jest to liczba dodatnia,zero czy liczba ujemna.
//Ludera Wiktor 
function pokakod1()
{  
const kod1 = `
function function1()
{
    function function1()
{
    let y = (document.getElementById("liczba_do_sprawdzenia").value);
    if(isNaN(y))
    {
        document.getElementById("p1").innerHTML =  y  + " nie jest liczba " + " <BR><BR> ";
    }
    else if(y == "")
    {
        document.getElementById("p1").innerHTML =  y  + "Wprowadź liczbe" + " <BR><BR> ";
    }
    else if(y>0)
    {
        document.getElementById("p1").innerHTML +=  y  + " jest liczba dodatnia " + " <BR><BR> ";
    } 
    else if(y<0)
    {
        document.getElementById("p1").innerHTML +=  y  + " jest liczba ujemna " + " <BR><BR> ";
    }  
    else if(y==0)
    {
        document.getElementById("p1").innerHTML +=  y  + " jest rowne 0 " + " <BR><BR> ";
    }
        document.getElementById("wynik_zadania1").style.display = "block";
}
`;
document.getElementById("kodfunkcji1").innerText = kod1;
document.getElementById("kodfunkcji1").style.display = "block";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "block";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";

}
function function1()
{
    let y = (document.getElementById("liczba_do_sprawdzenia").value);
    if(isNaN(y))
    {
        document.getElementById("p1").innerHTML =  y  + " nie jest liczba " + " <BR><BR> ";
    }
    else if(y == "")
    {
        document.getElementById("p1").innerHTML =  y  + "Wprowadź liczbe" + " <BR><BR> ";
    }
    else if(y>0)
    {
        document.getElementById("p1").innerHTML +=  y  + " jest liczba dodatnia " + " <BR><BR> ";
    } 
    else if(y<0)
    {
        document.getElementById("p1").innerHTML +=  y  + " jest liczba ujemna " + " <BR><BR> ";
    }  
    else if(y==0)
    {
        document.getElementById("p1").innerHTML +=  y  + " jest rowne 0 " + " <BR><BR> ";
    }
    document.getElementById("wynik_zadania1").style.display = "block";
}
// Zadanie 2. Napisz skrypt wyświetlający kolejne liczby całkowite z zakresu podanego w dwóch polach tekstowych. 
// //Ludera Wiktor 
function pokakod2()
{  
const kod2 = `
function function2()
{
    let y = parseInt(document.getElementById("tekst1").value);
    let z = parseInt(document.getElementById("tekst2").value);
    let ciag = "";
    if (isNaN(z) || z === "" || isNaN(y) || y === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    } 
    if(y<z)
    {
        for(let i = y;i<=z;i++)
        {
            ciag += i + "<BR>";
        }
    } 
    else if(z<y)
    {
        for(let i = y;i>=z;i--)
        {
            ciag += i + "<BR>";
        }
    } 
    document.getElementById("p2").innerHTML = ciag;
    document.getElementById("wynik_zadania2").style.display = "block";
}`;
document.getElementById("kodfunkcji2").innerText = kod2;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "block";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "block";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function2()
{
    let y = parseInt(document.getElementById("tekst1").value);
    let z = parseInt(document.getElementById("tekst2").value);
    let ciag = "";
    if (isNaN(z) || z === "" || isNaN(y) || y === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    } 
    if(y<z)
    {
        for(let i = y;i<=z;i++)
        {
            ciag += i + "<BR>";
        }
    } 
    else if(z<y)
    {
        for(let i = y;i>=z;i--)
        {
            ciag += i + "<BR>";
        }
    } 
    document.getElementById("p2").innerHTML = ciag;
    document.getElementById("wynik_zadania2").style.display = "block";
}
//Zadanie 3. Wyświetlanie wszystkich liczb z przedziału [a,b], które są podzielne przez n
//Ludera Wiktor 
function pokakod3()
{  
const kod3 = `
function function3() 
{
    let a = parseInt(document.getElementById("tekst3").value);
    let b = parseInt(document.getElementById("tekst4").value);
    let n = parseInt(document.getElementById("tekst5").value);
    if (isNaN(n) || n === "" || isNaN(a) || a === "" || isNaN(b) || b === "" ) 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    }  
    for (let i = a; i <= b; i++) 
        {
        if (i % n === 0) 
            {
                document.getElementById("p3").innerHTML += i + "<BR>";
            }
        }
    document.getElementById("wynik_zadania3").style.display = "block";
}`;
document.getElementById("kodfunkcji3").innerText = kod3;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "block";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "block";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function3() 
{
    let a = parseInt(document.getElementById("tekst3").value);
    let b = parseInt(document.getElementById("tekst4").value);
    let n = parseInt(document.getElementById("tekst5").value);
    if (isNaN(n) || n === "" || isNaN(a) || a === "" || isNaN(b) || b === "" ) 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    }  
    for (let i = a; i <= b; i++) 
        {
        if (i % n === 0) 
            {
                document.getElementById("p3").innerHTML += i + "<BR>";
            }
        }
    document.getElementById("wynik_zadania3").style.display = "block";
}
//Zadanie 4.  Wyświetlanie ilości i  sumy cyfr liczby całkowitej n wprowadzonej do pola tekstowego.
//Ludera Wiktor 
function pokakod4()
{  
const kod4 = `
function function4()
{
    let n = parseInt(document.getElementById("tekst6").value);
    let suma_cyfr = 0; 
    let liczba_na_znaki = n.toString();
    let ilosc_cyfr = liczba_na_znaki.length;
    n = Math.abs(parseInt(n)); //wartosc bezwzgledna zeby miec dodawanie zawsze
    if (isNaN(n) || n === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    }  
    for (let i = 0; i < ilosc_cyfr; i++) 
    {
        suma_cyfr += parseInt(liczba_na_znaki[i]);
    }
    document.getElementById("p4").innerHTML = "Ilość cyfr podanych: " + ilosc_cyfr + "<br><br> Suma tych cyfr: " + suma_cyfr;

    document.getElementById("wynik_zadania4").style.display = "block";
}`;
document.getElementById("kodfunkcji4").innerText = kod4;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "block";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "block";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function4()
{
    let n = parseInt(document.getElementById("tekst6").value);
    let suma_cyfr = 0; 
    let liczba_na_znaki = n.toString();
    let ilosc_cyfr = liczba_na_znaki.length;
    n = Math.abs(parseInt(n)); //wartosc bezwzgledna zeby miec dodawanie zawsze
    if (isNaN(n) || n === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    }  
    for (let i = 0; i < ilosc_cyfr; i++) 
    {
        suma_cyfr += parseInt(liczba_na_znaki[i]);
    }
    document.getElementById("p4").innerHTML = "Ilość cyfr podanych: " + ilosc_cyfr + "<br><br> Suma tych cyfr: " + suma_cyfr;

    document.getElementById("wynik_zadania4").style.display = "block";
}

//Zadanie 5. Napisz skrypt, który wyznaczy silnię liczby n.
//Ludera Wiktor 
function pokakod5() 
{
const kod5 = `
function function5()
{
    let n = parseInt(document.getElementById("tekst11").value);
    let z=1;
    if (isNaN(n) || n === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    }  
    for(let i=n;i>1;i--)
    {
        z*=i;
    }
    document.getElementById("p5").innerHTML = "Silnia liczby " + n + " wynosi: " + z + "<BR>";

    document.getElementById("wynik_zadania5").style.display = "block";
}`;
document.getElementById("kodfunkcji5").innerText = kod5;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "block";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "block";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function5()
{
    let n = parseInt(document.getElementById("tekst11").value);
    let z=1;
    if (isNaN(n) || n === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    }  
    for(let i=n;i>1;i--)
    {
        z*=i;
    }
    document.getElementById("p5").innerHTML = "Silnia liczby " + n + " wynosi: " + z + "<BR>";

    document.getElementById("wynik_zadania5").style.display = "block";
}
//Zadanie 6. Wyświetlanie n-kolejnych potęg naturalnych liczby całkowitej p: p1, …, pn
//Ludera Wiktor 
function pokakod6()
{  
const kod6 = `
function function6()
{
    let  p= parseInt(document.getElementById("liczba_poteg").value);
    let  n= parseInt(document.getElementById("potega").value);
    let wynik_potegowania ="";
    if (isNaN(p) || isNaN(n) || p === "" || n === "") 
    {
        alert("Proszę wprowadzić poprawne liczby.");
        return;
    }
    
    for(let i=1;i<=n;i++)
    {
        let liczba_spotengowana = Math.pow(p,i);
        wynik_potegowania += "Liczba p^" + i + " = " + liczba_spotengowana + " <br>";
    }
    
    document.getElementById("p6").innerHTML = wynik_potegowania;

    document.getElementById("wynik_zadania6").style.display = "block";
}`;
document.getElementById("kodfunkcji6").innerText = kod6;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "block";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "block";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function6()
{
    let  p= parseInt(document.getElementById("liczba_poteg").value);
    let  n= parseInt(document.getElementById("potega").value);
    let wynik_potegowania ="";
    if (isNaN(p) || isNaN(n) || p === "" || n === "") 
    {
        alert("Proszę wprowadzić poprawne liczby.");
        return;
    }

    for(let i=1;i<=n;i++)
    {
        let liczba_spotengowana = Math.pow(p,i);
        wynik_potegowania += "Liczba p^" + i + " = " + liczba_spotengowana + " <br>";
    }
    
    document.getElementById("p6").innerHTML = wynik_potegowania;

    document.getElementById("wynik_zadania6").style.display = "block";
}
//Zadanie 7. Dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie liczb rzeczywistych i wyświetlanie wyniku z możliwością ustalania formatu
//Ludera Wiktor 
function pokakod7()
{  
const kod7 = `
function function7()
{
    let number1 = parseFloat(document.getElementById("i1").value);
    let number2 = parseFloat(document.getElementById("i2").value);
    let number3 = parseFloat(document.getElementById("i3").value);
    const option1 = parseFloat(document.getElementById("s1").value);
    let answer;
    switch(option1) 
    {
        case 1:
            answer = number1 * number2;
            break;
        case 2:
            answer = number1 / number2;
            break;
        case 3:
            answer = number1 + number2;
            break;
        case 4:
            answer = number1 - number2;
            break;
        case 5:
            answer = Math.pow(number1, number2);
            break;
    }
    document.getElementById("w1").innerHTML = answer.toFixed(number3);

    document.getElementById("wynik_zadania7").style.display = "block";
}`;
document.getElementById("kodfunkcji7").innerText = kod7;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "block";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "block";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
} 
function function7()
{
    let number1 = parseFloat(document.getElementById("i1").value);
    let number2 = parseFloat(document.getElementById("i2").value);
    let number3 = parseFloat(document.getElementById("i3").value);
    const option1 = parseFloat(document.getElementById("s1").value);
    let answer;
    if (isNaN(number1) || number1 === "" || isNaN(number2) || number2 === "" || isNaN(number3) || number3 === "") 
    {
        alert("Proszę wprowadzić poprawną liczbę.");
        return;
    } 
    switch(option1) 
    {
        case 1:
            answer = number1 * number2;
            break;
        case 2:
            answer = number1 / number2;
            break;
        case 3:
            answer = number1 + number2;
            break;
        case 4:
            answer = number1 - number2;
            break;
        case 5:
            answer = Math.pow(number1, number2);
            break;
    }
    document.getElementById("w1").innerHTML = answer.toFixed(number3);

    document.getElementById("wynik_zadania7").style.display = "block";
}
//Zadanie 8. Konwersja liczb z systemu o podstawie p na system dziesiętny i odwrotnie
//Ludera Wiktor 
function pokakod8()
{  
const kod8 = `
function function8()
{
    const number4 = document.getElementById("i4").value;
    const option2 = parseInt(document.getElementById("s2").value);
    let answer;
    if (isNaN(number4) || number4 === "") 
    {
        alert("Proszę podać poprawną liczbę.");
        return;
    }  
    switch(option2) 
    {
        case 1:
            answer = parseInt(number4).toString(2);
            break;
        case 2:
            answer = parseInt(number4, 2);
            break;
    }
    document.getElementById("w2").innerHTML = answer;

    document.getElementById("wynik_zadania8").style.display = "block";
}`;
document.getElementById("kodfunkcji8").innerText = kod8;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "block";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "block";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function8()
{
    const number4 = document.getElementById("i4").value;
    const option2 = parseInt(document.getElementById("s2").value);
    let answer;
    if (isNaN(number4) || number4 === "") 
    {
        alert("Proszę podać poprawną liczbę.");
        return;
    }  
    switch(option2) 
    {
        case 1:
            answer = parseInt(number4).toString(2);
            break;
        case 2:
            answer = parseInt(number4, 2);
            break;
    }
    document.getElementById("w2").innerHTML = answer;

    document.getElementById("wynik_zadania8").style.display = "block";
}
//Zadanie 9. Losowanie  z powtórzeniami i bez powtórzeń n (n>0) liczb całkowitych z przedziału [a,b] 
//document.getElementById("w5").innerHTML = `Wylosowane liczby: ${liczby.join(", ")}`;
//Ludera Wiktor 
function pokakod9()
{  
const kod9 = `
function function9() 
{ 
    const number1 = parseInt(document.getElementById("i5").value);
    const number2 = parseInt(document.getElementById("i6").value);
    const number3 = parseInt(document.getElementById("i7").value);
    var checkbox = document.querySelector("input[name='chbox1']").checked;
    let numbers = [];
    if (isNaN(number1) || isNaN(number2) || isNaN(number3) || number3 <= 0) 
    {
        alert("Proszę podać prawidłowy przedział.");
        return;
    }
    if(checkbox == false)
    {
        for(let x=0; x < number3; x++)
            {
                numbers.push(Math.floor(Math.random() * (number2 - number1 + 1) + number1));
            }
    } 
    else 
    {
        for(let x=0; x < number3; x++)
        {
            let numberToCheck = Math.floor(Math.random() * 
            (number2 - number1 + 1) + number1);
            if(numbers.includes(numberToCheck) == false) 
            {
                numbers.push(numberToCheck);
            }
            else
            {
                x=x-1;
            }
        }
    }
    document.getElementById("w3").innerHTML = numbers.join("<br>");

    document.getElementById("wynik_zadania9").style.display = "block";
}`;
document.getElementById("kodfunkcji9").innerText = kod9;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "block";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "block";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function9() 
{ 
    const number1 = parseInt(document.getElementById("i5").value);
    const number2 = parseInt(document.getElementById("i6").value);
    const number3 = parseInt(document.getElementById("i7").value);
    var checkbox = document.querySelector("input[name='chbox1']").checked;
    let numbers = [];
    if (isNaN(number1) || isNaN(number2) || isNaN(number3) || number3 <= 0) 
    {
        alert("Proszę podać prawidłowy przedział.");
        return;
    }
    if(checkbox == false)
    {
        for(let x=0; x < number3; x++)
            {
                numbers.push(Math.floor(Math.random() * (number2 - number1 + 1) + number1));
            }
    } 
    else 
    {
        for(let x=0; x < number3; x++)
        {
            let numberToCheck = Math.floor(Math.random() * 
            (number2 - number1 + 1) + number1);
            if(numbers.includes(numberToCheck) == false) 
            {
                numbers.push(numberToCheck);
            }
            else
            {
                x=x-1;
            }
        }
    }
    document.getElementById("w3").innerHTML = numbers.join("<br>");

    document.getElementById("wynik_zadania9").style.display = "block";
}
// Zadanie 10. Obliczanie wartości średniej i maksymalnej z wylosowanego zbioru z przedziału [a,b]
//Ludera Wiktor 
function pokakod10()
{  
const kod10 = `
function function10()
{
    let liczba_jeden = parseInt(document.getElementById("poczatek").value); 
    let liczba_dwa = parseInt(document.getElementById("koniec").value);     
    let liczby_losowane = [];
    let liczba_losowan = parseInt(document.getElementById("i8").value); 
    let sum = 0;
    if (isNaN(liczba_jeden) || isNaN(liczba_dwa) || isNaN(liczba_losowan) || liczba_losowan <= 0) 
    {
        alert("Proszę podać prawidłowy przedział.");
        return;
    }
 
    for (let i = 0; i < liczba_losowan; i++) 
    {
        liczby_losowane.push(Math.floor(Math.random() 
        * (liczba_dwa - liczba_jeden + 1)) + liczba_jeden);
    }
     
    for(let y = 0; y < liczby_losowane.length; y++)
    {
        sum = sum + liczby_losowane[y];
    }
    document.getElementById("w4").innerHTML = sum/liczby_losowane.length;
    liczby_losowane.sort(function(a, b){return a - b});
    document.getElementById("w5").innerHTML = liczby_losowane[liczby_losowane.length-1];

    document.getElementById("wynik_zadania10").style.display = "block";
}`;
document.getElementById("kodfunkcji10").innerText = kod10;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "block";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "block";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function10()
{
    let liczba_jeden = parseInt(document.getElementById("poczatek").value); 
    let liczba_dwa = parseInt(document.getElementById("koniec").value);     
    let liczby_losowane = [];
    let liczba_losowan = parseInt(document.getElementById("i8").value); 
    let sum = 0;
    if (isNaN(liczba_jeden) || isNaN(liczba_dwa) || isNaN(liczba_losowan) || liczba_losowan <= 0) 
    {
        alert("Proszę podać prawidłowy przedział.");
        return;
    }
 
    for (let i = 0; i < liczba_losowan; i++) 
    {
        liczby_losowane.push(Math.floor(Math.random() * (liczba_dwa - liczba_jeden + 1)) + liczba_jeden);
    }
     
    for(let y = 0; y < liczby_losowane.length; y++)
    {
        sum = sum + liczby_losowane[y];
    }
    document.getElementById("w4").innerHTML = sum/liczby_losowane.length;
    liczby_losowane.sort(function(a, b){return a - b});
    document.getElementById("w5").innerHTML = liczby_losowane[liczby_losowane.length-1];

    document.getElementById("wynik_zadania10").style.display = "block";
}
//zadanie 11   Wyświetlanie ilości liczb z wylosowanego zbioru, których wartość jest równa liczbie x wprowadzonej do pola tekstowego
//Ludera Wiktor 
function pokakod11()
{  
const kod11 = `
function function11()
{   
    let x = parseInt(document.getElementById("x").value);
    let a = parseInt(document.getElementById("poczatek2").value); 
    let b = parseInt(document.getElementById("koniec2").value); 
    let n = parseInt(document.getElementById("i9").value); 
    let liczby = [];
    let zliczanie_x = 0; 
    if (isNaN(x)) 
    {
        alert("Proszę wprowadzić poprawną liczbę");
        return;
    }

    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0 ) 
    {
        alert("Proszę podać prawidłowy przedział");
        return;        
    }

    for(let i=0; i < n; i++)
    {
        let losowaLiczba = Math.floor(Math.random() * (b - a + 1) + a);
        liczby.push(losowaLiczba);  
        if (losowaLiczba === x) 
        {
            zliczanie_x++;
        }
    }
    document.getElementById("w6").innerHTML = "Liczba wystąpień " + x + ": " + zliczanie_x;

    document.getElementById("wynik_zadania11").style.display = "block";
}`;
document.getElementById("kodfunkcji11").innerText = kod11;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "block";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "block";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
} 
function function11()
{   
    let x = parseInt(document.getElementById("x").value);
    let a = parseInt(document.getElementById("poczatek2").value); 
    let b = parseInt(document.getElementById("koniec2").value); 
    let n = parseInt(document.getElementById("i9").value); 
    let liczby = [];
    let zliczanie_x = 0; 
    if (isNaN(x)) 
    {
        alert("Proszę wprowadzić poprawną liczbę");
        return;
    }

    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0 ) 
    {
        alert("Proszę podać prawidłowy przedział");
        return;        
    }

    for(let i=0; i < n; i++)
    {
        let losowaLiczba = Math.floor(Math.random() * (b - a + 1) + a);
        liczby.push(losowaLiczba);  
        if (losowaLiczba === x) 
        {
            zliczanie_x++;
        }
    }
    document.getElementById("w6").innerHTML = "Liczba wystąpień " + x + ": " + zliczanie_x;

    document.getElementById("wynik_zadania11").style.display = "block";
}       
// Zadanie 12. Porządkowanie rosnąco i malejąco wylosowanych liczb
//Ludera Wiktor 
function pokakod12()
{  
const kod12 = `
function function12()
{
    let a = parseInt(document.getElementById("poczatek3").value); 
    let b = parseInt(document.getElementById("koniec3").value); 
    let n = parseInt(document.getElementById("i10").value); 
    let liczby = [];
    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0 ) 
    {
        alert("Proszę podać prawidłowy przedział");
        return;
    }
    for(let x=0; x < n; x++)
    {   
        let losowanie_numerow = Math.floor(Math.random() * (b - a + 1) + a);
        liczby.push(losowanie_numerow);
    }
    let rosnaco = [...liczby].sort((x, y) => x - y);
    let malejaco = [...liczby].sort((x, y) => y - x);

    document.getElementById("w7").innerHTML = rosnaco.join("<br>");
    document.getElementById("w8").innerHTML = malejaco.join("<br>");

    document.getElementById("wynik_zadania12").style.display = "block";
}`;
document.getElementById("kodfunkcji12").innerText = kod12;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "block";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "block";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function12()
{
    let a = parseInt(document.getElementById("poczatek3").value); 
    let b = parseInt(document.getElementById("koniec3").value); 
    let n = parseInt(document.getElementById("i10").value); 
    let liczby = [];
    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0 ) 
    {
        alert("Proszę podać prawidłowy przedział");
        return;
    }
    for(let x=0; x < n; x++)
    {   
        let losowanie_numerow = Math.floor(Math.random() * (b - a + 1) + a);
        liczby.push(losowanie_numerow);
    }
    let rosnaco = [...liczby].sort((x, y) => x - y);
    let malejaco = [...liczby].sort((x, y) => y - x);

    document.getElementById("w7").innerHTML = rosnaco.join("<br>");
    document.getElementById("w8").innerHTML = malejaco.join("<br>");

    document.getElementById("wynik_zadania12").style.display = "block";
}
/*Zadanie 13. Napisz skrypt którty po wczytaniu dwóch liczb całkowitych – a, b, skrypt pyta o ich iloczyn do momentu aż zostanie podany prawidłowy wynik. 
Następnie wyświetlany jest prawidłowy wynik oraz ilość prób podawania wyniku. */
//Ludera Wiktor 
function pokakod13()
{  
const kod13 = `
function function13()
{
    let zliczanie_prob = 0;
    let y = parseInt(document.getElementById("tekst8a").value);
    let z = parseInt(document.getElementById("tekst8b").value);
    let x;
    x=y*z;
    if (isNaN(y) || isNaN(z) || z === "" || y === "") 
    {
        alert("Proszę wprowadzić poprawną wartość");
        return;
    }
    let a = false;
    do
    {
    var iloczyn = prompt("Ile wynosi iloczyn podanych liczb"); 
    zliczanie_prob++;
    if(iloczyn!=x)
        {
            alert("zly wynik");
        }
        
    else if(iloczyn==x)
        {
            a=true;
        }      
    }
    while(a==false);
    alert("Wynik jest prawidlowy"); //do dokonczenia zliczanie prób\
    alert("Liczba prób wynosiła: " + zliczanie_prob);
}`;
document.getElementById("kodfunkcji13").innerText = kod13;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "block";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "block";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "none";
}
function function13()
{
    let zliczanie_prob = 0;
    let y = parseInt(document.getElementById("tekst8a").value);
    let z = parseInt(document.getElementById("tekst8b").value);
    let x;
    x=y*z;
    if (isNaN(y) || isNaN(z) || z === "" || y === "") 
    {
        alert("Proszę wprowadzić poprawną wartość");
        return;
    }
    let a = false;
    do
    {
    var iloczyn = prompt("Ile wynosi iloczyn podanych liczb"); 
    zliczanie_prob++;
    if(iloczyn!=x)
        {
            alert("zly wynik");
        }
        
    else if(iloczyn==x)
        {
            a=true;
        }      
    }
    while(a==false);
    alert("Wynik jest prawidlowy"); //do dokonczenia zliczanie prób\
    alert("Liczba prób wynosiła: " + zliczanie_prob);
}
//Zadanie 14.// Losowanie liczby z zakresu 1-100
// Funkcja do obsługi zgadywania liczby
//Ludera Wiktor 
function pokakod14()
{  
const kod14 = `
let losuj = Math.floor(Math.random() * 100) + 1;   
let proby = 0;
function function14() 
{
    
    let liczba_podana = document.getElementById("liczba_podana").value;
    let wiadomosc = document.getElementById("wiadomosc");
    let liczba_prob = document.getElementById("liczba_prob");
    proby++;
    if (isNaN(liczba_podana) || liczba_podana === "") 
    {
        alert("Proszę wprowadzić poprawną wartość");
        return;
    }
    else if (liczba_podana == losuj) 
    {
        wiadomosc.innerHTML = "Liczba została odgadnięta";
        liczba_prob.innerHTML = "Liczba prób:" + proby;
    } 
    else if (liczba_podana < losuj) 
    {
        wiadomosc.innerHTML = "Liczba jest zbyt mała spróbuj ponownie";
    } 
    else if (liczba_podana > losuj) 
    {
        wiadomosc.innerHTML = "Liczba jest zbyt duża spróbuj ponownie";
    }    
    
    document.getElementById("liczba_podana").value = "";

    document.getElementById("wynik_zadania14").style.display = "block";
}`;
document.getElementById("kodfunkcji14").innerText = kod14;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "block";
document.getElementById("kodfunkcji15").style.display = "none";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "block";
document.getElementById("zadanie15").style.display = "none";
}
let losuj = Math.floor(Math.random() * 100) + 1;   
let proby = 0;
function function14() 
{
    
    let liczba_podana = document.getElementById("liczba_podana").value;
    let wiadomosc = document.getElementById("wiadomosc");
    let liczba_prob = document.getElementById("liczba_prob");
    proby++;
    if (isNaN(liczba_podana) || liczba_podana === "") 
    {
        alert("Proszę wprowadzić poprawną wartość");
        return;
    }
    else if (liczba_podana == losuj) 
    {
        wiadomosc.innerHTML = "Liczba została odgadnięta";
        liczba_prob.innerHTML = "Liczba prób:" + proby;
    } 
    else if (liczba_podana < losuj) 
    {
        wiadomosc.innerHTML = "Liczba jest zbyt mała spróbuj ponownie";
    } 
    else if (liczba_podana > losuj) 
    {
        wiadomosc.innerHTML = "Liczba jest zbyt duża spróbuj ponownie";
    }    
    
    document.getElementById("liczba_podana").value = "";

    document.getElementById("wynik_zadania14").style.display = "block";
}
/*Zadanie 15.  Napisz skrypt który po podaniu do 2 pól tekstowych liczb całkowitych k, n z przedziału <1;20> wyświetlanie w kolejnych k-wierszach liczb w 
następujący sposób:  
1 2 3 .. n-1 n 
1 2 3 … n-1 
… 
1 2 
1  */
//Ludera Wiktor 
function pokakod15()
{  
const kod15 = `
function function15()
{
    let y = parseInt(document.getElementById("tekst16a").value);
    let z = parseInt(document.getElementById("tekst16b").value);
    if (isNaN(y) || y === "" || isNaN(z) || z === "") 
        {
            alert("Proszę wprowadzić poprawną wartość");
            return;
        }
    else if (y < 1 || y > 20 || z < 1 || z > 20) 
    {
        alert("Zła liczba, liczby muszą być w przedziale 1-20."); 
        return;
    }
    else if(y<=20 || z<=20 || y>=1 || z>=1)
    {
        x = y + z;
        do
        {
            for(let i=x;i>=1;i--)
            {
                document.getElementById("p16").innerHTML += i + " ";
            }
            document.getElementById("p16").innerHTML +="<BR>";
            x--;
        }
        while(x>=1);
    }
    document.getElementById("wynik_zadania15").style.display = "block";
}
`;
document.getElementById("kodfunkcji15").innerText = kod15;
document.getElementById("kodfunkcji1").style.display = "none";
document.getElementById("kodfunkcji2").style.display = "none";
document.getElementById("kodfunkcji3").style.display = "none";
document.getElementById("kodfunkcji4").style.display = "none";
document.getElementById("kodfunkcji5").style.display = "none";
document.getElementById("kodfunkcji6").style.display = "none";
document.getElementById("kodfunkcji7").style.display = "none";
document.getElementById("kodfunkcji8").style.display = "none";
document.getElementById("kodfunkcji9").style.display = "none";
document.getElementById("kodfunkcji10").style.display = "none";
document.getElementById("kodfunkcji11").style.display = "none";
document.getElementById("kodfunkcji12").style.display = "none";
document.getElementById("kodfunkcji13").style.display = "none";
document.getElementById("kodfunkcji14").style.display = "none";
document.getElementById("kodfunkcji15").style.display = "block";
document.getElementById("kodfunkcjicw1").style.display = "none";
document.getElementById("kodfunkcjicw2").style.display = "none";

document.getElementById("cw2").style.display = "none";
document.getElementById("cw1").style.display = "none";
document.getElementById("zadanie1").style.display = "none";
document.getElementById("zadanie2").style.display = "none";
document.getElementById("zadanie3").style.display = "none";
document.getElementById("zadanie4").style.display = "none";
document.getElementById("zadanie5").style.display = "none";
document.getElementById("zadanie6").style.display = "none";
document.getElementById("zadanie7").style.display = "none";
document.getElementById("zadanie8").style.display = "none";
document.getElementById("zadanie9").style.display = "none";
document.getElementById("zadanie10").style.display = "none";
document.getElementById("zadanie11").style.display = "none";
document.getElementById("zadanie12").style.display = "none";
document.getElementById("zadanie13").style.display = "none";
document.getElementById("zadanie14").style.display = "none";
document.getElementById("zadanie15").style.display = "block";
}
function function15()
{
    let y = parseInt(document.getElementById("tekst16a").value);
    let z = parseInt(document.getElementById("tekst16b").value);
    if (isNaN(y) || y === "" || isNaN(z) || z === "") 
        {
            alert("Proszę wprowadzić poprawną wartość");
            return;
        }
    else if (y < 1 || y > 20 || z < 1 || z > 20) 
    {
        alert("Zła liczba, liczby muszą być w przedziale 1-20."); 
        return;
    }
    else if(y<=20 || z<=20 || y>=1 || z>=1)
    {
        x = y + z;
        do
        {
            for(let i=x;i>=1;i--)
            {
                document.getElementById("p16").innerHTML += i + " ";
            }
            document.getElementById("p16").innerHTML +="<BR>";
            x--;
        }
        while(x>=1);
    }
    document.getElementById("wynik_zadania15").style.display = "block";
}
