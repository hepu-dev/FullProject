I. How to run in local

Required:
- MongoDB
- NodeJs(express.js)
- Postman
- Vs Code

1. Clone the project.

2. Install dependencies.

```
npm install
```

4. Start MongoDB server on local machine.

5.  Run the `tokopediaMongo.js` script. This script will create a new database called tokoplay and populate it with the sample data from the `tokopediaMongo.json` file.

6. Connect to MongoDB: In your Express.js application, ensure that you have set up the connection to the local MongoDB database. Open and edit mongoURI variable in `app.js`:

```javascript
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/tokoplay;
```

7. Start the server with Express.js server:

```
npm start
```

8. Access your application by web browser and navigation to 'https://localhost:port'. Port default is 3000.
9. Test the APIs: Use postman to test different endpoints.


II. Database Structure:

1. `videos` collection:
     - `videoId`: A unique identifier for each video sourced from YouTube.
     - `thumbnailUrl`: The URL of the video's thumbnail image.

2. `products` collection:
     - `productId`: A unique identifier for each product.
     - `videoId`: A reference to the corresponding `videoId` of the video in the `videos collection.
     - `link`: The link to the product associated with the video.
     - `title`: The title or name of the product.
     - `price`: The price of the product.

3. `comments` collection:
     - `videoId`: A reference to the `videoId` of the related video in the `videos` collection.
     - `username`: The name of the user who posted the comment.
     - `comment`: The user's comment.
     - `timestamp`: The timestamp indicating when the comment was posted (automatically set to the current date and time).


III. API Structure:

1. Video Endpoint:
   - URL: `/api/videos`
   - HTTP Method: GET
   - Purpose: This endpoint is used to retrieve a list of videos along with their corresponding videoIds and thumbnail URLs.

2. Product Endpoint:
   - URL: `/api/products/:videoId`
   - HTTP Method: GET
   - Purpose: This endpoint allows you to fetch a list of products related to a specific video identified by its `videoId`.

3. Comment Endpoint:
   - URL: `/api/comments/:videoId`
   - HTTP Method: GET
   - Purpose: This endpoint retrieves a list of comments for a specific video identified by its `videoId`.
   - URL: `/api/comments`
   - HTTP Method: POST
   - Purpose: This endpoint enables users to submit new comments for a specific video, which will be saved in the database.

IV. List API Requests and Responses:

1. Video Thumbnail List:
   - Request:
     - URL: `/api/videos`
     - Method: GET
   - Response:
     ```
     [
       {
         "_id": <bson.ObjectId>,
         "videoId": <videoId>,
         "thumbnailUrl": string
       },
       {
         "_id": <bson.ObjectId>,
         "videoId": <videoId>,
         "thumbnailUrl": string
       },
       ...
     ]
     ```

2. Product List:
   - Request:
     - URL: `/api/products/:videoId`
     - Method: GET
   - Response:
     ```
     [
       {
         "videoId": <videoId>,
         "link": string,
         "title": string,
         "price": float
       },
       {
         "videoId": <videoId>,
         "link": string,
         "title": string,
         "price": float
       },
       ...
     ]
     ```

3. Comment List:
   - Request:
     - URL: `/api/comments/:videoId`
     - Method: GET
   - Response:
     ```
     [
       {
         "_id": <bson.ObjectId>,
         "username": string,
         "comment": string,
         "timestamp": timestamp
       },
       {
         "_id": <bson.ObjectId>,
         "username": string,
         "comment": string,
         "timestamp": timestamp
       },
       ...
     ]
     ```

4. Submit Comment:
   - Request:
     - URL: `/api/comments`
     - Method: POST
     - Payload:
       ```
       {
         "username": string,
         "comment": string,
         "videoId": <videoId>
       }
       ```
   - Response (Success):
     ```
     {
      "success": true,
      "comment": {
        "videoId": <videoId>,
        "username": string,
        "comment": string,
        "_id": "<bson.ObjectId>",
        "timestamp": timestamp,
        "__v": 0
      }
     }
     ```
