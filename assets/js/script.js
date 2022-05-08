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
        // Injecte et incrémente score + 1 quand user gagne
        divScoreToto.innerHTML = scoreToto++;
        

    } else { (rValue === 'feuille') 
        divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
        // Perdu
        resultLoose.style.display="flex";
        // Injecte  et incrémente score + 1 quand computer gagne
        divScoreComp.innerHTML = scoreComp++;
    }    

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
        // Injecte et incrémente score + 1 quand user gagne
        divScoreToto.innerHTML = scoreToto++;
    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        // Perdu
        resultEquality.style.display="flex";
        // Injecte et incrémente computer + 1 quand user gagne
        divScoreComp.innerHTML = scoreComp++;
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
        // Injecte  et incrémente score + 1 quand user gagne
        divScoreToto.innerHTML = scoreToto++;
    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        // Egalité
        resultEquality.style.display="flex";

    } else { (rValue === 'feuille')     
    divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
    // Perdu
    resultLoose.style.display="flex";
    // Injecte et incrémente score + 1 quand computer gagne
    divScoreComp.innerHTML = scoreComp++;
    }
})      

// définir variable résultat score actuel sinon ne grimpe jamais
var actualScoretoto = scoreToto;
console.log(actualScoretoto)
var actualScoreComp = scoreComp;
// pour injecter et incrémenter les rounds (1 round= 3 victoires)

// var round = document.querySelector('.roundTour')
// var roundScore = 1;

// if (scoreComp >= 3){
//     round.innerHTML = roundScore++;
// } else {(scoreToto>= 3)
//     round.innerHTML = roundScore++;
// }


// SI ROUND = 5

// calculer les taux de victoire
// afficher les taux de victoire

// définir le gagant si taux victoire >= à 51%



// console.log(rValue);

