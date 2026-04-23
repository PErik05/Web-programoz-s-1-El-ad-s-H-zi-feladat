<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$host = 'localhost';
$dbname = 'nb1_bajnoksag'; 
$username = 'nb1_bajnoksag';
$password = 'nb1_bajnoksag123';

try {
    $dbh = new PDO("mysql:host=$host;dbname=$dbname", $username, $password, array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
    $dbh->exec("set names utf8");
} catch (PDOException $e) {
    die(json_encode(["error" => "Adatbázis hiba: " . $e->getMessage()]));
}

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        $stmt = $dbh->query("SELECT * FROM klub");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;
}
?>