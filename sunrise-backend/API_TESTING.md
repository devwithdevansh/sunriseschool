# Pages API Testing

This backend exposes two Pages API routes:

- `GET /api/pages/{slug}`
- `POST /api/pages/update`

If you run the PHP backend locally from the `backend` folder, example base URLs are usually:

- `http://localhost/sunrise-school/backend/api/pages/about-school`
- `http://localhost/sunrise-school/backend/api/pages/update`

If you use PHP's built-in server from the `backend` folder:

```powershell
..\tools\php\php.exe -S localhost:8000
```

Then the example URLs become:

- `http://localhost:8000/api/pages/about-school`
- `http://localhost:8000/api/pages/update`

## GET Example

Request:

```http
GET /api/pages/about-school
Accept: application/json
```

Example full URL:

```text
http://localhost:8000/api/pages/about-school
```

Expected success response:

```json
{
  "success": true,
  "data": {
    "id": 2,
    "slug": "about-school",
    "title": "About School",
    "content": "Sunrise School is committed to holistic education.",
    "updated_at": "2026-03-22 10:30:00"
  }
}
```

Example not found response:

```json
{
  "success": false,
  "message": "Page not found."
}
```

## POST Update Example

Request URL:

```text
http://localhost:8000/api/pages/update
```

Headers:

```text
Content-Type: application/json
Accept: application/json
```

Sample JSON request body:

```json
{
  "slug": "about-school",
  "title": "About School",
  "content": "Sunrise School builds strong values, academic excellence, and all-round development."
}
```

Expected success response:

```json
{
  "success": true,
  "message": "Page saved successfully.",
  "data": {
    "id": 2,
    "slug": "about-school",
    "title": "About School",
    "content": "Sunrise School builds strong values, academic excellence, and all-round development.",
    "updated_at": "2026-03-22 10:35:00"
  }
}
```

Validation error response:

```json
{
  "success": false,
  "message": "Fields slug, title, and content are required."
}
```

## Postman Instructions

### Test GET page

1. Create a new request in Postman.
2. Set method to `GET`.
3. Enter URL `http://localhost:8000/api/pages/about-school`.
4. Add header `Accept: application/json`.
5. Click `Send`.

### Test POST update page

1. Create a new request in Postman.
2. Set method to `POST`.
3. Enter URL `http://localhost:8000/api/pages/update`.
4. Open the `Headers` tab and add:
   `Content-Type: application/json`
5. Open the `Body` tab.
6. Select `raw`.
7. Choose `JSON`.
8. Paste this body:

```json
{
  "slug": "about-school",
  "title": "About School",
  "content": "Updated from Postman test."
}
```

9. Click `Send`.

## Browser Test Page

Open [pages-test.html](C:\Users\Lenovo\OneDrive\Desktop\Sem-5 Vacation\projects\sunrise-school\backend\pages-test.html) in your browser after the backend is running. It includes:

- a `GET` page tester by slug
- a `POST` page update form
- a JSON response viewer
