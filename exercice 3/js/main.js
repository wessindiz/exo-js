let age= parseInt(prompt('Quel est votre age?'));

function checkage(){
if (age>=18){
    alert('Vous pouvez accéder à ce site!');
}
else{
    alert('Vous n\'avez pas l\'age requis! Veuillez réessayer!');
    age= parseInt(prompt('Quel est votre age?'));
    checkage();
}
}
checkage();