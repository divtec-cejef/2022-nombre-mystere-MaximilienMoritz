/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 0.1
 * @since   2018-09-09 (date de création)
 */

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    "use strict";

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbEssais = 0;
    let test = false;
    let nbMystere = tireNombre(1, 100);

    //Tant que l'utilisateur n'a pas trouvé le nombre (test est faux)
    //Répète la saisie
    while (!test) {

        //Génère un nombre aléatoire compris entre 1 et 100
        let reponse = Number(prompt("Entrez un nombre entre 1 et 100"));

        //Incrémente le nombre d'essais
        nbEssais++;

        //Si l'utilisateur trouve le nombre
        //Affiche une confirmation et le nombre d'essais
        if (reponse === nbMystere) {
            alert(`Vous avez trouvé après ${nbEssais} essais`);
            test = true;

            //Si le nombre est plus grand / petit
            //Affiche un message en accordance
        } else if (reponse < nbMystere) {
            alert("C'est plus grand");
        } else {
            alert("C'est plus petit");
        }
    }

}()); // main IIFE
