<?php

declare(strict_types=1);

$payload = getJsonRequestBody();
$slug = isset($payload['slug']) ? trim((string) $payload['slug']) : '';
$title = isset($payload['title']) ? trim((string) $payload['title']) : '';
$content = isset($payload['content']) ? trim((string) $payload['content']) : '';

if ($slug === '' || $title === '' || $content === '') {
    sendJsonResponse(422, [
        'success' => false,
        'message' => 'Fields slug, title, and content are required.',
    ]);
}

try {
    $pdo = getDatabaseConnection();

    $existingPage = $pdo->prepare(
        'SELECT id
         FROM pages
         WHERE slug = :slug
         LIMIT 1'
    );
    $existingPage->execute(['slug' => $slug]);

    if ($existingPage->fetch() !== false) {
        sendJsonResponse(409, [
            'success' => false,
            'message' => 'Page with this slug already exists.',
        ]);
    }

    $statement = $pdo->prepare(
        'INSERT INTO pages (slug, title, content)
         VALUES (:slug, :title, :content)'
    );
    $statement->execute([
        'slug' => $slug,
        'title' => $title,
        'content' => $content,
    ]);
} catch (PDOException $exception) {
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'Failed to create page.',
        'error' => $exception->getMessage(),
    ]);
}

sendJsonResponse(201, [
    'success' => true,
    'message' => 'Page created',
]);
