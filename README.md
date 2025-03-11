# wanderlust

## Project Description
Wanderlust is a web application designed to facilitate the rental process. It allows users to list properties, browse available rentals, and manage their rental agreements. The system aims to streamline the rental process for both landlords and tenants.

## Features
- User authentication and authorization
- Property listings
- Rental reviews
- User profiles
- Secure file uploads

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Setup Local Environment

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/wanderlust.git

<!-- Navigate to the project directory: -->
cd wanderlust

<!-- Install dependencies: -->

npm install

<!-- Set up environment variables: Create a .env file in the root directory and add the following variables: -->
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
MAP_TOKEN=your_map_token
<!-- Initialize the database: -->

node init/index.js
<!-- Start the application: -->
npm start

<!-- Open your browser and go to http://localhost:3000. -->

<!-- Project Structure -->

.env
.gitignore
.vscode/
    extensions.json
    settings.json
app.js
classroom/
    routes/
        post.js
        user.js
    server.js
    views/
        page.ejs
cloudConfig.js
controllers/
    listings.js
    reviews.js
    users.js
init/
    data.js
    index.js
middleware.js
models/
    listing.js
    review.js
    user.js
package.json
public/
    css/
        rating.css
        ...
    img/
    js/
README.md
routes/
    listing.js
    review.js
    user.js
schema.js
uploads/
utils/
    ExpressError.js
    wrapAsync.js
views/
    error.ejs
    includes/
    layouts/
    listings/
    users/