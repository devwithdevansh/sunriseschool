<?php

declare(strict_types=1);

try {
    $pdo = getDatabaseConnection();
    $statement = $pdo->query(
        'SELECT slug, title, updated_at
         FROM pages
         ORDER BY updated_at DESC, id DESC'
    );
    $pages = $statement->fetchAll();
} catch (PDOException $exception) {
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'Failed to fetch pages.',
        'error' => $exception->getMessage(),
    ]);
}

sendJsonResponse(200, [
    'success' => true,
    'data' => $pages,
]);
