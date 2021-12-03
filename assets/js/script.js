// HO DIMENTICATO IL PRIMO PUSH MA ERO TROPPO ECCITATO AD INIZIARE IL PROGETTO E HO INIZIATO SUBITO
// HO PROCEDUTO IN UNA MANIERA DIVERSA E IN QUELLA RICHIESTA ( RISPETTO A QUELLA RICHIESTA, C'E SOLO L'AGGIUNTA DI UN BOTTONE CON UNA FUNZIONE ON CLICK)

function pricecalculator(){
    let km = document.getElementById("km-percorso").value;
    let under18 = document.getElementById("under-18").checked;
    let over65 = document.getElementById("over-65").checked;
    let pricebykm = km * 0.21;

    if(km != 0){
        if ((under18==true)&&(over65==false)){
            document.getElementById("result").innerHTML = (pricebykm - ((pricebykm / 100)*20)).toFixed(2)+ "€";
    
        }else if ((under18==false)&&(over65==true)){
            document.getElementById("result").innerHTML = (pricebykm - ((pricebykm / 100)*40)).toFixed(2)+ "€";
        }
        else if ((under18==false)&&(over65==false)){
            document.getElementById("result").innerHTML = pricebykm.toFixed(2) + "€" ;
        }
        else if((under18==true)&&(over65==true)){
            document.getElementById("result").innerHTML = "Signor Dorian Grey, e' forse lei?" ;
        }
    } else{
        document.getElementById("result").innerHTML = "Inserire i chilometri per utilizzare il nostro calcolatore" ;
    }
    
    
}
function promptdata(){
    let km = prompt("Inserisci i chilometri da percorrere")
    let age = prompt("Inserisci l'eta' del conducente")
    let pricebykm = km * 0.21;

    if ((km != 0) && (age!=0)){
        if (age<18){
            document.getElementById("result").innerHTML = (pricebykm - ((pricebykm / 100)*20)).toFixed(2)+ "€";
            pricebykm = pricebykm.toFixed(2)
    
        }else if (age>=65){
            document.getElementById("result").innerHTML = (pricebykm - ((pricebykm / 100)*40)).toFixed(2)+ "€";
            pricebykm = pricebykm.toFixed(2)
        }
        else{
            document.getElementById("result").innerHTML = pricebykm.toFixed(2)+ "€" ;
        }

    }else{
        document.getElementById("result").innerHTML = "Inserire tutti i dati richiesti per utilizzare il nostro calcolatore" ;
    }
}