

console.log("Bienvenido al club del entretenimiento");
let nombre = prompt("Ingresa tu nombre ");
let edad = parseInt(prompt("Ingresa tu edad "));
function anime() {
    alert("-Slam Dunk -Great Teacher Onizuka (G.T.O) -Cowboy Bebops -Samurai X (Ruroni Kenshin) -Neon Genesis Evangelion -Dragon Ball Z");
}
function peliAnime() {
    alert("-El viaje de Chihiro (2001) -La Princesa Mononoke (1997) -Ghost in the Shell (1995) -La tumba de las luciérnagas (1988) -Mi vecino Totoro (1998)");
}

if (edad >= 16) {

    console.log("Tenes la edad suficiente para participar del test");

    for (let i =0; i <= 3; i++) {
        let opcion = parseInt(prompt("¿Que tenes ganas de ver?  1-Animé 2-Peliculas 3-Series: selecciona la opcion que mas te guste"));
        if (opcion == 1) {
           let seleccion =parseInt(prompt("¿queres ver?: 1-series  2-peliculas"));
           if (seleccion ==1){
            alert("La recomendacion para ti es ") ;
             anime();
           }
           else if (seleccion ==2){
            alert("La recomendacion para ti es ") ;
             peliAnime();

           } 
        
           break;
        }
       
       
        
        else if (opcion == 2) {
            prompt("¿queres tipo de pelicula que ver?: 1-Animadas  2-Personas Humanas");
        break;
        }
        else if (opcion == 3) {
            prompt("¿queres ver?: 1-Series Animadas  2-2-Personas Humanas");
         break;
        }
    
        else {
            console.log("opcion no disponible! te quedan " +(3-i)+" intentos ");
        }

    }      
}
else {
    console.log("lo sentimos, debes ser mayor de 15 para participar del test");
}


function despedida(){
    console.log(nombre +" Gracias por participar del simulador");
}
despedida();