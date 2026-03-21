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
    $statement = $pdo->prepare(
        'INSERT INTO pages (slug, title, content)
         VALUES (:slug, :title, :content)
         ON DUPLICATE KEY UPDATE
           title = VALUES(title),
           content = VALUES(content),
           updated_at = CURRENT_TIMESTAMP'
    );
    $statement->execute([
        'slug' => $slug,
        'title' => $title,
        'content' => $content,
    ]);

    $pageLookup = $pdo->prepare(
        'SELECT id, slug, title, content, updated_at
         FROM pages
         WHERE slug = :slug
         LIMIT 1'
    );
    $pageLookup->execute(['slug' => $slug]);
    $page = $pageLookup->fetch();
} catch (PDOException $exception) {
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'Failed to save page.',
        'error' => $exception->getMessage(),
    ]);
}

sendJsonResponse(200, [
    'success' => true,
    'message' => 'Page saved successfully.',
    'data' => $page,
]);
