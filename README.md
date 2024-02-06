### Setup
# MongoDB 
1. Create .env file in **"./back"** folder. Set **"MONGO_USERNAME"** and **"MONGO_PASSWORD"**. Simply write line by line:  **MONGO_USERNAME=password** . No semicolons, commas or anything.
2. Get your **uri** connection string to MongoDB. Paste it into **"uri"** variable. Interpolate uri string with your mongodb username and password. {mongo_username} and {mongo_password} (these are variables with values from environment variables in **.env** file.


Now go to **"./back"** folder in console and run app using **"node ./index.js"**
