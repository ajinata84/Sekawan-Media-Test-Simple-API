Simple restaurants api using dataset.json pulled from https://rapidapi.com/DataCrawler/api/tripadvisor16 at 10.00 PM on 8/11/2024 to avoid limitations for production and testing data fetches

### Can be accessed at  [sekawanmedia-be.djie.cloud](https://sekawanmedia-be.djie.cloud/)

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

## Base URL

```
<https://sekawanmedia-be.djie.cloud>

```

## Endpoints

### 1. Get Restaurant List

Retrieves a list of restaurants with optional cuisine filtering.

```
GET /restaurants

```

### Query Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| cuisine | string | No | Filter restaurants by cuisine type |

### Response

```json
[
  {
    "restaurantId": "string",
    "id": number,
    "name": "string",
    "image": "string",
    "cuisine": "string",
    "rating": number,
    "price": "string",
    "openStatus": "Open" | "Closed"
  }
]

```

### Example Request

```bash
# Get all restaurants
curl <https://sekawanmedia-be.djie.cloud/restaurants>

# Get restaurants filtered by cuisine
curl <https://sekawanmedia-be.djie.cloud/restaurants?cuisine=Thai>

```

### 2. Get Restaurant Details

Retrieves detailed information about a specific restaurant.

```
GET /restaurants/:id

```

### Path Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | number | Yes | Restaurant ID |

### Response

```json
{
  "id": number,
  "name": "string",
  "rating": number,
  "price": "string",
  "openStatus": "string",
  "image": "string",
  "reviews": [
    {
      "text": "string",
      "url": "string"
    }
  ]
}

```

### Example Request

```bash
curl <http://localhost:3000/restaurants/14917627>

```

## Dataset Structure

The API uses a JSON dataset with the following structure:

```json
{
  "data": [
    {
      "restaurantsId": "string",
      "locationId": number,
      "name": "string",
      "averageRating": number,
      "userReviewCount": number,
      "currentOpenStatusCategory": "string",
      "currentOpenStatusText": "string",
      "priceTag": "string",
      "establishmentTypeAndCuisineTags": ["string"],
      "heroImgUrl": "string",
      "reviewSnippets": {
        "reviewSnippetsList": [
          {
            "reviewText": "string",
            "reviewUrl": "string"
          }
        ]
      }
    }
  ]
}

```

## Error Handling

### Restaurant Not Found

```json
{
  "message": "Restaurant not found"
}

```

Status Code: 404