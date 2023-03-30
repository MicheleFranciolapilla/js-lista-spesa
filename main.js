document.getElementsByTagName("h1")[0].className = "text-primary p-2 pt-5 mt-5";
document.getElementsByTagName("h4")[1].className = "text-info";

let     index       = 1;
let     prodotti    = [];
let     prodotto    = "";
let     terminato   = false; 
let     quit        = false;


function output_data()
{
    if (!quit)
    {
        alert("Stiamo per stampare la tua lista della spesa");
        let i = 0;
        document.writeln('<h2>Ecco la tua lista della spesa:</h2>');
        do
        {
            document.writeln(`<h6>${i + 1}: ${prodotti[i]}</h6>`);
            i++;
        }
        while (i < index);
    }
    document.writeln("Grazie e arrivederci alla prossima spesa");
}

function input_data()
{
    while (!terminato)
    {
        prodotto = prompt(`Inserisci il prodotto nr ${index}`);
        if ((prodotto == "") || (prodotto === null))
        {
            switch (index)
            {
                case 1:
                    prodotto = prompt("Non hai ancora inserito nessun prodotto. Clicca su 'annulla' o semplicemente non digitare niente, per abbandonare");
                    if ((prodotto == "") || (prodotto === null))
                    {
                        terminato = true;
                        quit = true;
                    }
                    else
                    {
                        prodotti.push(prodotto);
                        index++;
                    }
                    break;
                default:
                    terminato = true;
            }
        }
        else
        {
            prodotti.push(prodotto);
            index++;
        }
        if (index == 31)
        {
            terminato = true;
        }
    }
    index--;
    console.log(index);
    console.log(prodotti);
    console.log(terminato);
    output_data();
}


document.onclick = function()
{
        document.getElementById("click_to_start").innerText = "";   
        input_data();
}



