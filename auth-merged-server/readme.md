LAB - Access Control
========

- Implement a permissions based access control middleware module.
- Integrate back-end authorization controls using Express and Postgres Database.
- Use a virtual column for capabilties, to create a roles system.
---------------

### Author: Abdinasir Yussuf

### Setup

#### `.env` requirements

-   `PORT` - Port Number
-   DATABASE_URL- postgres link or sqlite Memory 

#### Running the app

-   `npm start`
-   Endpoint: 
              `/users'`
              `/secret` 
              `/Signup`
              `/Signin`
              `/model`
              `/api/v1`
              `/secret`
              `/secret`
              `/secret`


    -   Returns Object

        ```
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlciIsImlhdCI6MTY1NTg0NjYyNiwiZXhwIjoxNjU1OTMzMDI2fQ.hLurAO0F7qX2stlOBZk7DC2y_qEmocYstQcn64-NTpA",
          "id": 1,
          "username": "tester",
          "password": "$2b$05$N5J/F6339f9wKNsyWGeKQOrGFTaeLjp1yg93D8PKNDXoDpt5KkV5m",
          "updatedAt": "2022-06-21T21:23:46.610Z",
          "createdAt": "2022-06-21T21:23:46.610Z"
          
        }

        ```

#### Tests

-   Unit Tests: `npm test`


#### UML - Class example

![uml design for token](./assets/class-example-uml.png)