<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/db.php';

function sendJsonResponse(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');

    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function getJsonRequestBody(): array
{
    $rawInput = file_get_contents('php://input');

    if ($rawInput === false || trim($rawInput) === '') {
        return [];
    }

    $decoded = json_decode($rawInput, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        sendJsonResponse(400, [
            'success' => false,
            'message' => 'Invalid JSON payload.',
        ]);
    }

    return is_array($decoded) ? $decoded : [];
}

function normalizeRequestPath(string $requestUri): string
{
    $path = parse_url($requestUri, PHP_URL_PATH);

    if (!is_string($path) || $path === '') {
        return '/';
    }

    // REMOVE project folder from path
    $basePath = '/sunrise-backend';
    if (str_starts_with($path, $basePath)) {
        $path = substr($path, strlen($basePath));
    }

    return rtrim($path, '/') ?: '/';
}

function sendMethodNotAllowed(array $allowedMethods): void
{
    header('Allow: ' . implode(', ', $allowedMethods));

    sendJsonResponse(405, [
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
}

function routeRequest(): void
{
    $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
    $requestUri = $_SERVER['REQUEST_URI'] ?? '/';
    $normalizedPath = normalizeRequestPath($requestUri);

    try {

        // ✅ FIRST: handle specific route (IMPORTANT FIX)
        if ($normalizedPath === '/api/pages/update') {
            if ($method !== 'POST') {
                sendMethodNotAllowed(['POST']);
            }

            require __DIR__ . '/../modules/pages/updatePage.php';
            return;
        }

        // ✅ THEN: dynamic slug route
        $pageSlugPattern = '#^/api/pages/(?P<slug>[A-Za-z0-9_-]+)$#';

        if (preg_match($pageSlugPattern, $normalizedPath, $matches) === 1) {
            if ($method !== 'GET') {
                sendMethodNotAllowed(['GET']);
            }

            $_GET['slug'] = $matches['slug'];
            require __DIR__ . '/../modules/pages/getPage.php';
            return;
        }

        // ❌ fallback
        sendJsonResponse(404, [
            'success' => false,
            'message' => 'Route not found.',
        ]);

    } catch (Throwable $exception) {
        sendJsonResponse(500, [
            'success' => false,
            'message' => 'An unexpected server error occurred.',
            'error' => $exception->getMessage(),
        ]);
    }
}