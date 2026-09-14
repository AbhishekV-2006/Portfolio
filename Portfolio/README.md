# Portfolio Website

This repository contains the React/Vite frontend in `Portfolio/` and its Express API in the sibling `server/` folder.

## Run the application

From `LAB3/server/`:

```bash
npm install
npm start
```

From `LAB3/Portfolio/` in a second terminal:

```bash
npm install
npm run dev
```

The API runs on `http://localhost:5000` and the frontend runs on the Vite URL shown in the terminal, normally `http://localhost:5173`.

The API uses JSON files for persistence: `server/data/projects.json` and `server/data/contacts.json`. Copy `server/.env.example` to `server/.env` to configure the port, CORS origin, and data file paths. The contact list is intentionally an open endpoint with no authentication because it is provided for assignment verification.

The backend follows MVC architecture: route modules map URLs, controllers handle HTTP behavior and validation, models handle JSON persistence, and `app.js` owns Express middleware and route registration. `server.js` is only the application bootstrap.

## Frontend routes

- `/home`, `/about`, `/projects`, `/projects/:projectId`, and `/contact`
- `/` redirects to `/home`
- Unknown frontend routes render the existing not-found page

## API endpoints

### `GET /`

Health check:

```json
{ "status": "ok" }
```

### `GET /api/projects`

Returns the project array used by the Projects page. Each object includes `id`, `title`, `description`, `techStack`, `image`, `link`, `github`, and `details`.

### `GET /api/projects/:id`

Returns one project, or `404`:

```json
{ "error": "Project not found" }
```

### `POST /api/contact`

Request:

```json
{ "name": "Ada", "email": "ada@example.com", "message": "Hello", "subject": "Project" }
```

Success returns `201` with the stored submission. Missing fields and invalid email addresses return `400` with a `field` and `error` property.

### `GET /api/contact`

Returns every stored contact submission. This endpoint is intentionally unauthenticated for assignment verification.

### Unknown routes and malformed JSON

Unknown routes return `404` JSON. Malformed JSON bodies return `400` JSON, and other server errors return `500` JSON without exposing a stack trace to the client.

## API checks with curl

```bash
curl http://localhost:5000/
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/projects/signalist
curl http://localhost:5000/api/projects/not-found
curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Ada\",\"email\":\"ada@example.com\",\"message\":\"Hello\"}"
curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Ada\",\"email\":\"not-an-email\",\"message\":\"Hello\"}"
curl http://localhost:5000/api/contact
curl http://localhost:5000/api/doesnotexist
```
