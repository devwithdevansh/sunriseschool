<?php

declare(strict_types=1);

function getDatabaseConnection(): PDO
{
    static $connection = null;

    if ($connection instanceof PDO) {
        return $connection;
    }

    // ✅ Hardcoded config for XAMPP (no env issues)
    $host = 'localhost';
    $port = '3310';
    $database = 'sunrise_school_cms';
    $username = 'root';
    $password = ''; // keep empty for XAMPP
    $charset = 'utf8mb4';

    $dsn = "mysql:host=$host;port=$port;dbname=$database;charset=$charset";

    try {
        $connection = new PDO($dsn, $username, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    } catch (PDOException $exception) {
        http_response_code(500);
        header('Content-Type: application/json; charset=utf-8');

        echo json_encode([
            'success' => false,
            'message' => 'Database connection failed.',
            'error' => $exception->getMessage(),
        ], JSON_UNESCAPED_SLASHES);

        exit;
    }

    return $connection;
}