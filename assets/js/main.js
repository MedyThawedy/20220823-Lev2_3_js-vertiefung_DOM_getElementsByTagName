
/*
In dieser Übung werden wir die getElementsByTagName Methode lernen.
Schreibe eine Funktion, die beim Anklicken des “Change me”-Buttons, die Button- und Hintergrundfarbe der einzelnen Elemente ändert.
Hinweise:
Nutze die Methode getElementById
Nutze die Methode getElementsByTagName
Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333
Denk an den index[]
*/
// #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333


let el1 = document.getElementById('navChange');

let b = false;

let collection;
let collection2;

el1.addEventListener('click', (e) => {
    collection = document.getElementsByTagName("a");
    collection2 = document.getElementsByTagName("a");
    if (b === false) {
        // console.log(1);
        // console.log(collection);
        // console.log(collection2)
        collection[0].style.backgroundColor = '#f6c89f';
        collection[1].style.backgroundColor = '#ffe7d1';
        collection[2].style.backgroundColor = '#4b8e8d';
        collection2[3].style.backgroundColor = '#396362';
        b = true;
        collection = [];
    } else {
        // console.log(2);
        // console.log(collection);
        // console.log(collection2)
        document.getElementById('navHome').style.backgroundColor = '#333';
        collection[0].style.backgroundColor = '#333';
        collection[1].style.backgroundColor = '#333';
        collection[2].style.backgroundColor = '#333';
        collection2[3].style.backgroundColor = '#4CAF50';
        b = false;
        collection = [];
    }

});