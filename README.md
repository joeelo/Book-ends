# MYREADS 

!["MYREADS cover photo"](images/myreads-screenshot.png?raw=true "MYREADS cover photo")
### An app to bring users together and epxress their thoughts. 

## Table of Contents
 - <a href="#general">General Info </a> 
 - <a href="technologies"> Technologies </a>
 - <a href="setup"> Setup </a>
 - <a href="#usage"> Usage </a>

## <a name="general"> General Info </a>
MYREADS was created to help bring users together through a love of books. There are infinite choices of literature out in the wild, and MYREADS helps sift through with user reviews, what's good in the market and all time time classics. Another main feature of of MYREADS is the note creation functionality. As we read, thoughts flow and they leave as fast as they come, so there will always be a button present to jot down thoughts as they appear and will remain forever encrypted for you. 

## <a name="technologies"> Technologies</a>
 - MYREADS uses React for a seamless and quick user experience.
 - The data is stored with MongoDB and uses Mongoose as an ODM (Object Document Mapper) for schema creation and information validation. 
 - All of the routes are done using Node + Express. 
 - Various NPM packages are also used in conjuction and can be found in npm_modules. 

## <a name="setup"> Setup </a>

 - If you haven't installed NPM 
    - https://www.npmjs.com/get-npm
    - download for your particular OS. 

- If NPM is installed. 
    - Click on this Github link ,
    - Press clone or download, and copy the link into your CMD or terminal.

- In your terminal 
    - Open two tabs, one tab use to cd into ./bookends-frontend.
    - In the other window cd into ./book-app-backend.

#### Bookapp-back-end
    npm run dev
 - This command will run nodemon, and keep the server connection alive on port 8000. 

#### bookapp-frontend 
    npm start
- This will open a window in the browser with the app running on port 4000. 

#### Google books API 
- In order to use the API you will have to sign up for google books API, you can do this by getting a key from 
    - https://developers.google.com/books/docs/v1/getting_started
- Make an ENV file and paste in the key as GOOGLE_BOOKS_API
- IE: GOOGLE_BOOKS_API=API_KEY_HERE


## <a name="usage"> Usage </a>
- In order to use MYREADS you will need to create an account. This account needs to be a valid email address and have a password iwth more than 7 characters.
- Search for books by using the search bar after logging in. 
- Write a review on any books you enjoyed 
- Find users and add them as friends, and view their profiles. 
- Write your notes by clicking on the + button always present on the lefthand side. 
    - These notes will be saved to your profile and only viewable by you. 
- Enjoy the app, and if you have any feedback feel free to reachout! 

