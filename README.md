# Portfolio Full-Stack Application

A personal portfolio website with a React frontend and a Node.js/Express API. The frontend displays portfolio information and project details, while the API serves project data and stores contact-form submissions in JSON files.

## Project Structure

LAB3/
├── Portfolio/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/        # Layout, navigation, footer, project cards
│   │   ├── pages/             # Home, about, projects, contact, and 404 pages
│   │   ├── api.js             # Shared API client
│   │   └── App.jsx            # Frontend route configuration
│   └── package.json
├── server/                    # Express backend
│   ├── config/env.js          # Environment-backed configuration
│   ├── controllers/           # Request handling and validation
│   ├── data/                  # JSON persistence files
│   ├── middleware/            # 404 and error handling
│   ├── models/                # JSON read/write and data access
│   ├── routes/                # API route definitions
│   ├── app.js                 # Express middleware and route mounting
│   ├── server.js              # Server entry point
│   └── package.json
└── README.md
The backend follows a small MVC structure: routes map URLs to controllers, controllers validate requests and create responses, and models handle JSON persistence.

## Setup and Run

Install dependencies separately for the frontend and backend:

cd server
npm install

Open a second terminal from the repository root and install the frontend dependencies:

cd Portfolio
npm install

Start the API in the first terminal:

cd server
npm start

Start the Vite development server in the second terminal:

cd Portfolio
npm run dev


The API is available at `http://localhost:5000`. Vite normally serves the frontend at `http://localhost:5173`.


## Configuration

The application works with the defaults, so an environment file is optional. To customize the backend, create `server/.env`:

env file
PORT=5000
ALLOWED_ORIGIN=http://localhost:5173
PROJECTS_DATA_FILE=./data/projects.json
CONTACT_DATA_FILE=./data/contacts.json

## Frontend Routes

The React application uses `react-router-dom`:

/ → Redirects to the Home page.
/home → Shows the portfolio home page.
/about → Shows information about me and my skills.
/projects → Displays a list of projects fetched from the API.
/projects/:projectId → Shows details of a specific project.
/contact → Allows users to send a message through the API.
Any other URL → Shows a 404 Not Found page.

API Endpoints
GET / → Checks whether the API is running. Returns { "status": "ok" }.

GET /api/projects → Gets a list of all projects from the project data file.

GET /api/projects/:id → Gets details of one specific project using its ID. If it doesn't exist, it returns a 404 error.

GET /api/contact → Shows all the contact messages submitted by users.

POST /api/contact → Allows users to submit a contact message. Name, email, and message are required, while subject is optional. The API also checks that the email is valid.

Error Handling
404 → Used when the requested API route or project doesn't exist.
400 → Used when the request contains invalid data or invalid JSON.
500 → Used when an unexpected server error occurs.
Testing the API with Postman

The backend runs at:

http://localhost:5000

In Postman, set this as your base URL and use it for all API requests.

You can test the following:

Health Check – GET /
View All Projects – GET /api/projects
View One Project – GET /api/projects/signalist
Submit a Contact Message – POST /api/contact
Test Invalid Email – Send a contact request with an incorrect email.
View Contact Messages – GET /api/contact
Test Invalid Route – GET /api/doesnotexist

Each request can be checked in Postman by comparing the status code and response with the expected result.

Data Storage
Project information is stored in server/data/projects.json.
Contact form submissions are stored in server/data/contacts.json.
The project does not use a database; it directly reads and writes data to these JSON files.
This approach is mainly suitable for learning and demonstration purposes, rather than handling a large production application.