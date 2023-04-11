# connecting backend from frontend by changing environment variables : REACT_APP

by customizing the environment variable, I can extend my code and separate my code between development mode and production mode. Also by creating an environment for React App project, I don't have to show my baseURL for the server connection in `api-client.js`

## customizing the environment variable setup for axios setup

1. create a hidden file for storing server baseURL location address as a environment variable called:`REACT_APP_CHAT_APP_API`
2. create baseURL on `api-client.js` file to connect the backend server with using `REACT_APP_CHAT_APP_API`.

By doing this, I can switch between development environment and production environment for my project.

## problem I faced:

link:

- https://stackoverflow.com/questions/56960888/using-axios-js-in-a-singleton-pattern-to-serve-an-object-once

## The server address into be hidden and replace it

- server address into be hidden and replace it with REACT_APP as a customized environmental variable

related link:

- https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/
- https://create-react-app.dev/docs/adding-custom-environment-variables/

You must create custom environment variables beginning with REACT*APP*

```sh
# example
REACT_APP_NOT_SECRET_CODE=abcdef
```
