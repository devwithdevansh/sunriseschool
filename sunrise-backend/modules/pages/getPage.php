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
        'SELECT id, slug, title, content, updated_at
         FROM pages
         WHERE slug = :slug
         LIMIT 1'
    );
    $statement->execute(['slug' => $slug]);
    $page = $statement->fetch();
} catch (PDOException $exception) {
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'Failed to fetch page.',
        'error' => $exception->getMessage(),
    ]);
}

if ($page === false) {
    sendJsonResponse(404, [
        'success' => false,
        'message' => 'Page not found.',
    ]);
}

sendJsonResponse(200, [
    'success' => true,
    'data' => $page,
]);
