# URL Shortener

A simple yet efficient URL shortener service built with Node.js, Express, and MongoDB. Generate short, easy-to-share links and redirect users to their original URLs.

## Features

- **URL Shortening**: Convert long URLs into short, unique identifiers
- **URL Redirection**: Redirect from short URLs to original URLs
- **Duplicate Detection**: Automatically detects and reuses short IDs for duplicate URLs
- **Input Validation**: Validates URLs and short IDs using Zod
- **CORS Support**: Enable cross-origin requests
- **MongoDB Integration**: Persistent storage of URL mappings

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: Zod
- **ID Generation**: Nano ID
- **CORS**: Express CORS middleware
- **Development**: Nodemon

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd urlShortner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `src/config/ENV.config.js`

4. Ensure MongoDB is running and accessible

## Usage

### Development Server

Start the development server with hot-reload:
```bash
npm run dev
```

### Production Server

Start the production server:
```bash
npm start
```

The server runs on the configured `PORT` (default: 3000)

## API Endpoints

### Create Short URL

**POST** `/url`

Create a new short URL from a long URL.

**Request Body:**
```json
{
  "url": "https://example.com/very/long/url/path"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:3000/abc12345"
}
```

### Redirect to Original URL

**GET** `/:shortId`

Redirect to the original URL using the short ID.

**Example:**
```
GET /abc12345
-> Redirects to https://example.com/very/long/url/path
```

## Project Structure

```
urlShortner/
├── src/
│   ├── config/
│   │   └── ENV.config.js          # Environment variables
│   ├── controllers/
│   │   └── url.controllers.js      # URL generation and redirection logic
│   ├── middlewares/
│   │   └── urlValidator.middleware.js  # Input validation
│   ├── models/
│   │   └── url.models.js           # Mongoose URL schema
│   ├── routes/
│   │   └── url.routes.js           # API route definitions
│   ├── dbConnection.js             # MongoDB connection setup
│   └── index.js                    # Express app entry point
├── public/
│   └── index.html                  # Static files
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## Configuration

Edit `src/config/ENV.config.js` to configure:
- Port number
- MongoDB connection URI
- Other environment variables

## Error Handling

- Invalid URLs return a 400 error
- Non-existent short IDs return a 404 message
- Database errors are caught and logged with appropriate responses

## License

ISC

## Author

anas18x
