<?php

//Connexion à la BDD
require_once 'connexion.php';

$bdd = connectBdd('root', '', 'ajax');
$query = $bdd->query('SELECT * FROM invites');
$invites = $query->fetchAll();

//Force l'entete du navigateur en UTF-8
header('Content-type: application/json; charset=utf-8');
echo json_encode($invites);

?>