<?php

declare(strict_types=1);

$slug = isset($_GET['slug']) ? trim((string) $_GET['slug']) : '';

if ($slug === '') {
    sendJsonResponse(400, [
        'success' => false,
        'message' => 'A valid page slug is required.',
    ]);
}

try {
    $pdo = getDatabaseConnection();
    $statement = $pdo->prepare(
        'DELETE FROM pages
         WHERE slug = :slug'
    );
    $statement->execute(['slug' => $slug]);

    if ($statement->rowCount() === 0) {
        sendJsonResponse(404, [
            'success' => false,
            'message' => 'Page not found.',
        ]);
    }
} catch (PDOException $exception) {
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'Failed to delete page.',
        'error' => $exception->getMessage(),
    ]);
}

sendJsonResponse(200, [
    'success' => true,
    'message' => 'Page deleted',
]);
