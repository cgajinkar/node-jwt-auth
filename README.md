# Node ES6 API authentication using JSON Web Tokens

Dependencies
body-parser: This will add all the information we pass to the API to the request.body object.
bcrypt: we have used it to hash our passwords before saving them to database.
dotenv: We'll use this to load all the environment variables we keep secret in our .env file.
jsonwebtoken: This will be used to sign and verify JSON web tokens.
mongoose: We'll use this to interface with our mongo database.
Development dependencies
morgan: This will log all the requests we make to the console whilst in our development environment.
nodemon: We'll use this to restart our server automatically whenever we make changes to our files. 3. cross-env: This will make all our bash commands compatible with machines running windows.

Simple rest full service implementation along with Mongodb.

Following 3 api are exposed 

This this api will encrypt User password and add it into mongodb

POST /api/v1/users HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: 57a3a5c8-8c83-20e4-68f9-54b2f5f4f703
name=chetan&password=password1

This api is used to login with admin user which will return JWT token after successful login

POST /api/v1/login HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: 27a0a664-91f8-737c-312d-3ba17eb6f634
name=admin&password=adminpassword

JWT token generated in above api is used to get all exisitng users data.

GET /api/v1/users HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2Mjk5NzI5MDIsImV4cCI6MTYzMDE0NTcwMiwiaXNzIjoiaHR0cHM6Ly9zY290Y2guaW8ifQ.gDR0tFpzAxZfS1QGFRWHXvDE-i0b2jETw3copJm_QhI
