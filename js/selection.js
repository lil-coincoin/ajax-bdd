/**
 * Selectionner les données issues d'une BDD
 */

fetch('selection.php')
    .then(response=>response.json())
    .then(invites => {
        const ul = document.querySelector('ul');
        invites.forEach(invite => {
            const li = document.createElement('li');
            li.textContent = `${invite.prenom} ${invite.nom}`;
            ul.appendChild(li);
        });
    })
    .catch(error=>console.error(error));