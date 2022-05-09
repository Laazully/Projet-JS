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
    if (getPseudo.value === ''){
        pseudo.textContent ='User';
    } else {
        pseudo.textContent =getPseudo.value;
    }
    
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

var divComputerChoice = document.querySelector('.compChoice')
var resultWin= document.querySelector('.win');
var resultLoose = document.querySelector('.loose');
var resultEquality = document.querySelector('.equality');
var userScore = 0;
var computerScore= 0;
var getUserScore = document.querySelector('.scoreUser')
var getComputerScore = document.querySelector('.scoreComp')

btnPierre.addEventListener('click', function(){
    // Injecter l'image cliquée
    var divPlayerChoice = document.querySelector('.userChoice');
    divPlayerChoice.innerHTML = btnPierre.outerHTML;

    // Choisir de manière aléatoire le signe du computeur
    // var choices = document.querySelectorAll('.choices');
    // var myChoices = ['pierre','feuille','ciseaux'];
    // var rand = Math.random()*3 | 0;
    // var rValue = myChoices[rand];

    // Injecter l'image du signe du computeur
    // Déterminer le gagnant entre le signe player et le signe computer
    // **Injecter en fonction du gagnant si c'est gagné, perdu ou égalité

    if(rValue === 'pierre') {
        divComputerChoice.innerHTML = '<img class="ordiPierre" src="/assets/img/pierre.png" alt="pierre">';
        //** */ Egalité
        
        // resultEquality.style.display="flex";
        // Score +0
        
    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        //** */ Gagné
        // resultWin.style.display="flex";
        // Score +1
        userScore ++; // Incrémenter le score du gagnant (computeur ou player)
        getUserScore.innerHTML = userScore; // Injecter le résultat
        winRate(userScore, computerScore);
    } else { //feuille
        divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
        //** */ Perdu
        // resultLoose.style.display="flex";
        // Score +0
        computerScore++;
        getComputerScore.innerHTML = computerScore;
        winRate(userScore, computerScore);

    }
})


btnFeuille.addEventListener('click', function(){
    // Injecter l'image cliquée
    var divPlayerChoice = document.querySelector('.userChoice');
    divPlayerChoice.innerHTML = btnFeuille.outerHTML;

    // Choisir de manière aléatoire le signe du computeur
    var choices = document.querySelectorAll('.choices');
    var myChoices = ['pierre','feuille','ciseaux'];
    var rand = Math.random()*3 | 0;
    var rValue = myChoices[rand];

    // Injecter l'image du signe du computeur
    // Déterminer le gagnant entre le signe player et le signe computer
    // **Injecter en fonction du gagnant si c'est gagné, perdu ou égalité


    if(rValue === 'pierre') {
        divComputerChoice.innerHTML = '<img class="ordiPierre" src="/assets/img/pierre.png" alt="pierre">';
        //** */ Gagné
        // resultWin.style.display="flex";
        // Score +1
        userScore ++; // Incrémenter le score du gagnant (computeur ou player)
        getUserScore.innerHTML = userScore; // Injecter le résultat
        winRate(userScore, computerScore);
    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        //** */ Perdu
        // resultLoose.style.display="flex";
        // Score +0
        computerScore++;
        getComputerScore.innerHTML = computerScore;
        winRate(userScore, computerScore);
    } else { //feuille
    divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
    //** */ Egalité
        // resultEquality.style.display="flex";
        // Score +0
        
    }
})

btnCiseaux.addEventListener('click', function(){
    // Injecter l'image cliquée
    var divPlayerChoice = document.querySelector('.userChoice');
    divPlayerChoice.innerHTML = btnCiseaux.outerHTML;

    // Choisir de manière aléatoire le signe du computeur
    var choices = document.querySelectorAll('.choices');
    var myChoices = ['pierre','feuille','ciseaux'];
    var rand = Math.random()*3 | 0;
    var rValue = myChoices[rand];

    // Injecter l'image du signe du computeur
    // Déterminer le gagnant entre le signe player et le signe computer
    // **Injecter en fonction du gagnant si c'est gagné, perdu ou égalité


    if(rValue === 'pierre') {
        divComputerChoice.innerHTML = '<img class="ordiPierre" src="/assets/img/pierre.png" alt="pierre">';
        //** */ Perdu
        // resultLoose.style.display="flex";
        // Score +0
        computerScore++;
        getComputerScore.innerHTML = computerScore;
        winRate(userScore, computerScore);


    } else if(rValue === 'ciseaux') {
        divComputerChoice.innerHTML = '<img class="ordiCiseaux" src="/assets/img/ciseaux.png" alt="ciseaux">';
        //** */ Egalité
            // resultEquality.style.display="flex";
            // Score +0
            
    } else {//feuille
        divComputerChoice.innerHTML ='<img class="ordiFeuille" src="/assets/img/feuille.png" alt="feuille"></img>';
        //** */ Gagné
        // resultWin.style.display="flex";
        // Score +1
        userScore ++; // Incrémenter le score du gagnant (computeur ou player)
        getUserScore.innerHTML = userScore; // Injecter le résultat
        winRate(userScore, computerScore);
    }
})

//fermeture de la pop-up 

// calcule du taux de victoire :
var pourcent = document.querySelector('.persent');

function winRate (getUserScore, getComputerScore){
    var getpourcent = Math.round(getUserScore / (getUserScore + getComputerScore) * 100) + '%';
    pourcent.innerHTML = getpourcent;
    round();
}





// Au bout de 3 victoires, le round est terminé, le n° round change 
//et score remis à zéro
var getRoundNumber = document.querySelector('.round');
var roundNumber = 1;
var scoreUserInit = 0;
var scoreCompInit = 0;
var winRateInit = 0;



function round (){
    if (userScore ==3 || computerScore==3){
        getUserScore.innerHTML = userScore;
        getComputerScore.innerHTML = computerScore;

        roundNumber++;
        getRoundNumber.innerHTML=roundNumber;
        //Remettre à 0 les scores de Computer et User:
        userScore = scoreUserInit;
        computerScore= scoreCompInit;

        // Afficher les scores remis à 0 :
        getUserScore.innerHTML = userScore;
        getComputerScore.innerHTML = computerScore;


        // Remettre le taux de victoire à zéro:
        getpourcent = winRateInit;
        //afficher le nouveau taux de victoire :
        pourcent.innerHTML=getpourcent + '%';
    } 
}



// Au bout de 5 round, la partie est terminé et renvoie vers resultat partie

