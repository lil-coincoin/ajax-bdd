/**
 * Envoi des données au serveur PHP
 */

document.querySelector('form').addEventListener('submit', function(event){
    //Empeche le formulaire de recharger la page
    event.preventDefault()

    //Recupere les valeurs de mes champs de formulaire
    const prenom = document.querySelector('#prenom').value;
    const nom = document.querySelector('#nom').value;

    fetch('insertion.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: prenom,
            lastname: nom
        })
    })
        .then(response => response.json())
        .then(response => {
            const li = document.createElement('li');
            li.textContent = `${prenom} ${nom}`;

            document.querySelector('ul').appendChild(li);
        })
        .catch(error => console.error(error))
});