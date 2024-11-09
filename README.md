# Sekawan Media Test Simple API

Simple restaurants api using dataset.json pulled from https://rapidapi.com/DataCrawler/api/tripadvisor16 at 10.00 PM on 8/11/2024 to avoid limitations for production and testing data fetches

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone [your-repository-url]
cd SekawanMediaTestBackend
npm install

```

## Dependencies

### Production Dependencies

- **express** (^4.21.1) - Fast, unopinionated web framework for Node.js
- **cors** (^2.8.5) - Middleware for enabling Cross-Origin Resource Sharing
- **fs** (^0.0.1-security) - Node.js file system module
- **nodemon** (^3.1.7) - Utility for automatically restarting server during development

### Development Dependencies

- **@types/cors** (^2.8.17) - TypeScript definitions for cors
- **@types/express** (^5.0.0) - TypeScript definitions for express

## Scripts

- **dev**: Starts the development server with hot-reload using nodemon
    
    ```bash
    npm run dev
    ```
    
- **test**: Placeholder for test command
    
    ```bash
    npm test
    ```
    

## Project Structure

```
smbe/
├── src/
│   └── index.js    # Main application entry point
├── dataset.json    # dataset from tripadvisor
├── package.json
└── README.md

```

## Development

To start the development server with hot-reload:

```bash
npm run dev
```

The server will restart automatically when file changes are detected.