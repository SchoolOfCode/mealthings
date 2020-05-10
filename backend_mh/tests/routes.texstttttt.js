/* 

GET request recipes should return JSON 
GET request all recipes, somewhere should be recipe_idS from 1 to 69
GET request 1 recipe should return correct recipe (do with recipes from start, middle and end of MOCKDATA)
GET request a recipe with id 9999999. Should return correct error
GET request a recipe with id string. Should return correct error
GET request a recipe with id null. Should return correct error
GET request a recipe with id undefined. Should return correct error

GET request users should return JSON 
GET request all users, somewhere should be recipe_idS from 1 to 69
GET request 1 user should return correct user (do with users from start, middle and end of MOCKDATA)
GET request a user with id 9999999. Should return correct error
GET request a user with id string. Should return correct error
GET request a user with id null. Should return correct error
GET request a user with id undefined. Should return correct error

POST to users with no body returns correct error message 
POST to users with less than 4 fields returns correct error message 
POST to users with incorrect data types returns correct error message 
POST to users with nonsense data field return the correct message and doesn't insert into the database 
POST TO users with correct data types correctly inserts into the database 

POST to users/login with no jwt returns correct error message 
POST TO users/login with nonsense jwt returns correct error mesage 
POST to users with correct jwt return success message 

PATCH to users with correct data correctly patches 
PATCH to users with nonsese data returns the correct error message 
PATCH to users with incorrect field names returns the correct error message 

*/
