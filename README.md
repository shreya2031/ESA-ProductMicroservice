# ESA Assignment-2.1 ProductMicroservice
# Starting the service
MongoDB Atlas connection has been used for database.

Put your connection string uri in the .env file.

Clone the repository and follow the commands:

        >cd ESA-ProductMicroservice

        >npm install

        >npm start

Sever will start on port 5000
# Usage
Create a new user by sending a POST request to          localhost:5000/rest/v1/users JSON format:

        {
            "username": "test_user1",
        	"password": "test_password1"
        }
You will get a response like this:

        {
        	"_id": "607c37401033ef326c2b4708",
        	"username": "test_user1",
        	"password": "test_password1",
        	"__v": 0
        }
        
Get the list of existing users by sending a GET request to      localhost:5000/rest/v1/users

You will get a response like this:

        [
            {
                "_id": "607c37401033ef326c2b4708",
                "username": "test_user1",
                "password": "test_password1",
                "__v": 0
            }
        ]

View an existing user by sending a GET request to localhost:5000/rest/v1/users/{your_username}

Update information of an existing user by sending a PUT request to localhost:5000/rest/v1/users/{your_username} 

Delete an existing user by sending a DELETE request to localhost:5000/rest/v1/users/{your_username}

To add a product to the list, send a POST request to localhost:5000/rest/v1/products JSON format:

     {
          "productId": "123245ds4234",
          "category": "TV",
          "productName": "Sony",
          "productModel": "Bravia",
          "price": 120000,
          "availableQuantity": 9
      }
        
 You will get a response like this:
 
      {
          "_id": "607c06525dce2543d8767c5e",
          "productId": "123245ds4234",
          "category": "TV",
          "productName": "Sony",
          "productModel": "Bravia",
          "price": 120000,
          "availableQuantity": 9,
          "__v": 0
        }
 
 Get the list of products available by sending a GET request to localhost:5000/rest/v1/products
 
 You will get a response like this:
 
        [

            {
                "_id": "607c06525dce2543d8767c5e",
                "productId": "123245ds4234",
                "category": "TV",
                "productName": "Sony",
                "productModel": "Bravia",
                "price": 120000,
                "availableQuantity": 9,
                "__v": 0
            },
            {
                "_id": "607c36ab1033ef326c2b4707",
                "productId": "12445dsd234",
                "category": "Mobile",
                "productName": "Samsung",
                "productModel": "GalaxyNote",
                "price": 20000,
                "availableQuantity": 7,
                "__v": 0
            }

        ]
   
View an existing product by sending a GET request to localhost:5000/rest/v1/products/{your_productId}

Update information of an existing product by sending a PUT request to localhost:5000/rest/v1/products/{your_productId}

Delete an existing product by sending a DELETE request to localhost:5000/rest/v1/products/{your_productId}


