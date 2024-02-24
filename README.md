# Application API Documentation

This documentation outlines the endpoints of The API. The API allows users to interact with signing up, logging in, logging out, and the dashboard routes.

## Base URL 

https://cookie-auth.web.app/

## Endpoints

### 1. Root

- **Description**: Retrieves the root endpoint of the application.
- **Method**: GET
- **URL**: `/`
- **Response**: 
  - Status Code: 200 OK
  - Content: HTML content representing the root of the application.

### 2. Login

- **Description**: Logs in an existing user.
- **Method**: POST
- **URL**: `/login`
- **Request Body**:
  - Content Type: application/json
  - Attributes:
    - `username` (string): The username of the user.
    - `password` (string): The password of the user.
- **Response**: 
  - Status Code: 
    - 200 OK - If the user is successfully logged in.
    - 200 OK with message - If the login is unsuccessful.
  - Content: Empty response body for successful login. Otherwise, a JSON object containing an error message.
  - Cookies: Sets a session cookie upon successful login.

### 3. Logout

- **Description**: Logs out the current user.
- **Method**: POST
- **URL**: `/logout`
- **Response**: 
  - Status Code: 200 OK
  - Content: Empty response body.
  - Cookies: Clears the session cookie.

### 4. Signup

- **Description**: Creates a new user account.
- **Method**: POST
- **URL**: `/signup`
- **Request Body**:
  - Content Type: application/json
  - Attributes:
    - `username` (string): The desired username for the new user.
    - `password` (string): The desired password for the new user.
    - `email` (string): The email address of the new user.
- **Response**: 
  - Status Code: 
    - 200 OK - If the user account is successfully created.
    - 200 OK with message - If the signup process is unsuccessful.
  - Content: JSON object containing a success message if the signup is successful. Otherwise, a JSON object containing an error message along with a boolean flag indicating success or failure.
  - Cookies: Sets a session cookie upon successful signup.

### 5. Dashboard

- **Description**: Accesses the dashboard page of the application.
- **Method**: GET
- **URL**: `/dashboard`
- **Response**: 
  - Status Code: 
    - 200 OK - If the user is authenticated and can access the dashboard.
    - 500 Internal Server Error - If the user is not authenticated and cannot access the dashboard.
  - Content: String indicating whether the route is protected or not.
