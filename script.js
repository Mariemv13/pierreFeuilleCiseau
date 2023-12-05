const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

// Evenement 'Click sur les buttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e)=>{
    // Récupération de l'ID du boutton cliqué
    alert(e.target.id);
}))