let score = 0

const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listephrases = ["pas de panique", "la vie l'univers et le reste", "merci pour le poisson"]

let Total = listeMots.length

choix = choisirPhraseOuMots()

if (choix === "mots"){
    for(let compteur =0; compteur < 3; compteur++){
    
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[compteur])
        
        if (motUtilisateur === listeMots[compteur]) {
            console.log("Bravo !")
            score++
        } else {
            console.log("Vous avez fait une erreur de frappe!!!")
        }
    }
    console.log(score)
} else {
    for(let compteur =0; compteur < 3; compteur++){
    
        let motUtilisateur = prompt("Entrez le mot : " + listephrases[compteur])
        
        if (motUtilisateur === listephrases[compteur]) {
            console.log("Bravo !")
            score++
        } else {
            console.log("Vous avez fait une erreur de frappe!!!")
        }
    }
    console.log(score)
}

function afficherResultat(score,Total){
    
    prompt("le résultat est de " + score +" sur " + Total)

    return 0
}

function choisirPhraseOuMots(){
    
    let choix = prompt("Veuillez choisir la liste mots ou phrases")

    while(choix !== "mots" && choix !== "phrases"){
        choix = prompt("Veuillez choisir la liste mots ou phrases")
    }

    return choix
}