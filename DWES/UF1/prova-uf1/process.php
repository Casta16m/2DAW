<?php

signUp();

function signUp()
{
    if (isset($_POST["nom"]) != null && isset($_POST["email"]) != null && isset($_POST["password"]) != null) {

        $dades = array('nom' => $_POST["nom"], 'email' => $_POST["email"], 'passwd' => $_POST["password"]);

        $file = implode($dades);

        llegeix($file);
        escriu($dades, $file);
    } else {
        header('Location: http://localhost/prova-uf1/', true, 303);
    }
}

/**
 * Llegeix les dades del fitxer. Si el document no existeix torna un array buit.
 *
 * @param string $file
 * @return array
 */
function llegeix(string $file): array
{
    $var = [];
    if (file_exists($file)) {
        $var = json_decode(file_get_contents($file), true);
    }
    return $var;
}

/**
 * Guarda les dades a un fitxer
 *
 * @param array $dades
 * @param string $file
 */
function escriu(array $dades, string $file): void
{
    file_put_contents($file, json_encode($dades, JSON_PRETTY_PRINT));
}
