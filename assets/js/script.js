var btnGo = document.querySelector('.btn-GO');
var divHome = document.querySelector('.home');
var divBattle = document.querySelector('.battle');
var divResult = document.querySelector('.resultGame');
var getPseudo = document.querySelector('.input')
var pseudo = document.querySelector('.userName');

//////// PAGE 1 BUTTON GO ET PSEUDO   ///////////////////

btnGo.addEventListener('click', function(){
    divHome.style.display = 'none';
    divBattle.style.display = 'block';
    pseudo.textContent =getPseudo.value;
    
})

//////// PAGE 2 BUTTON RETURN  ///////////////////

var btnReturn = document.querySelector('.return');

btnReturn.addEventListener('click', function(){
    divBattle.style.display = 'none';
    divHome.style.display = 'block';
})

//////// PAGE 2 CHOIX DES ARMES  ///////////////////

var btnPierre = document.querySelector('.pierre');
var btnFeuille = document.querySelector('.feuille');
var btnCiseaux = document.querySelector('.ciseaux');
var divTotoChoice = document.querySelector('.totoChoice');
var divCompChoice = document.querySelector('.compChoice')
var totoPierre = document.querySelector('.totoPierre');
var totoFeuille = document.querySelector('.totoFeuille');
var totoCiseaux = document.querySelector('.totoCiseaux');
var ordiPierre = document.querySelector('.ordiPierre');
var ordiFeuille = document.querySelector('.ordiFeuille');
var ordiCiseaux = document.querySelector('.ordiCiseaux');
var divScoreToto = document.querySelector('.scoreToto')
var divScoreComp = document.querySelector('.scoreComp');
var scoreToto = 0;
var scoreComp = 0;
divScoreToto.innerHTML = scoreToto;
divScoreComp.innerHTML = scoreComp;
//////////// SI JOUEUR CHOISI LA PIERRE /////////////////////

btnPierre.addEventListener('click', function(){

    // Injecter l'image cliquée
    var divPlayerChoice = document.querySelector('.totoChoice');
    divPlayerChoice.innerHTML = btnPierre.outerHTML;
    
    // Choisir de manière aléatoire le signe du computeur
    var myChoices = ['pierre','feuille','ciseaux'];
    var rand = Math.random()*3 | 0;
    var rValue = myChoices[rand];
    
    // Injecter l'image du signe du computeur
    // Déterminer le gagnant entre le signe player et le signe computer
    var divComputerChoice = document.querySelector('.compChoice')
    var resultWin= document.querySelector('.win');
    var resultLoose = document.querySelector('.loose');
    var resultEquality = document.querySelector('.equality');
    
    if(rValue === 'pierre') {
        divComputerChoice.innerHTML = '<img class="ordiPierre" src="/assets/img/pierre.png" alt="pierre">';
        // Egalité
        resultEquality.style.display="flex";

    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        // Gagné
        resultWin.style.display="flex";
        divScoreToto.innerHTML = scoreToto++;
        

    } else { (rValue === 'feuille') 
        divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
        // Perdu
        resultLoose.style.display="flex";
        divScoreComp.innerHTML = scoreComp++;
    }    
    // Incrémenter le score du gagnant (computeur ou player)
    
    
    
        
    // Injecter le résultat
})       
////////////// SI JOUEUR CHOISI LA FEUILLE /////////////////////

btnFeuille.addEventListener('click', function(){
    
    // Injecter l'image cliquée
    var divPlayerChoice = document.querySelector('.totoChoice');
    divPlayerChoice.innerHTML = btnFeuille.outerHTML;
    
    // Choisir de manière aléatoire le signe du computeur
    var myChoices = ['pierre','feuille','ciseaux'];
    var rand = Math.random()*3 | 0;
    var rValue = myChoices[rand];
    
    // Injecter l'image du signe du computeur
    // Déterminer le gagnant entre le signe player et le signe computer
    var divComputerChoice = document.querySelector('.compChoice')
    var resultWin= document.querySelector('.win');
    var resultLoose = document.querySelector('.loose');
    var resultEquality = document.querySelector('.equality');
    if(rValue === 'pierre') {
        divComputerChoice.innerHTML = '<img class="ordiPierre" src="/assets/img/pierre.png" alt="pierre">';
        // Gagné
        resultWin.style.display="flex";

    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        // Perdu
        resultEquality.style.display="flex";

    } else { (rValue === 'feuille')     
        divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
        // Egalité
        resultEquality.style.display="flex";
    }    
})    
////////////// SI JOUEUR CHOISI LES CISEAUX /////////////////////

btnCiseaux.addEventListener('click', function(){
    
    // Injecter l'image cliquée
    var divPlayerChoice = document.querySelector('.totoChoice');
    divPlayerChoice.innerHTML = btnCiseaux.outerHTML;
    
    // Choisir de manière aléatoire le signe du computeur
    var myChoices = ['pierre','feuille','ciseaux'];
    var rand = Math.random()*3 | 0;
    var rValue = myChoices[rand];
    
    // Injecter l'image du signe du computeur
    // Déterminer le gagnant entre le signe player et le signe computer
    var divComputerChoice = document.querySelector('.compChoice')
    var resultWin= document.querySelector('.win');
    var resultLoose = document.querySelector('.loose');
    var resultEquality = document.querySelector('.equality');
    if(rValue === 'pierre') {
        divComputerChoice.innerHTML = '<img class="ordiPierre" src="/assets/img/pierre.png" alt="pierre">';
        // Gagné
        resultWin.style.display="flex";

    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        // Egalité
        resultEquality.style.display="flex";

    } else { (rValue === 'feuille')     
    divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
    // Perdu
    resultLoose.style.display="flex";
    }
})      
// Injecter en fonction du gagnant si c'est gagné, perdu ou égalité
    
// var score = 
//     divScoreToto= document.querySelector('.scoreToto')
//     divScoreComp=document.querySelector('.scoreComp')
// if(score===win){

// }    



    



// console.log(rValue);

