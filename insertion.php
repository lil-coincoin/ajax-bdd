<?php
//Definit l'entete de réponse au format JSON
header('Content-Type: application/json');

//Connexion à la BDD
require_once 'connexion.php';

$bdd = connectBdd('root', '', 'ajax');

//Recupere et decode le corps de la requete POST en JSON
$values = json_decode(file_get_contents('php://input', true));

$prenom = htmlspecialchars(strip_tags($values->firstname));
$nom = htmlspecialchars(strip_tags($values->lastname));

$query = $bdd->prepare('INSERT INTO invites (prenom, nom) VALUES (:prenom, :nom)');
$query->bindValue(':prenom', $prenom);
$query->bindValue(':nom', $nom);
$query->execute();

echo json_encode([
    'status' => 201,
    'message' => 'Le nouvel invité est bien enregistré'
]);
?>