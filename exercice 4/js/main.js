
// On cherche les nombres premiers jusqu'à 100
var max = 100;

for(i = 2; i <= max; i++) {

let j = 1;
let racine = Math.floor(Math.sqrt(i));

do {
j++;
} while(j <= racine && i%j != 0);

if(j > racine) {

// On affiche les nombres premiers trouvés
document.write(i +"<br>")

}

}