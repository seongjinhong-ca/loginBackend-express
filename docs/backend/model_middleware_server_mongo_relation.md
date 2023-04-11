# model vs middleware vs server

important files and folders:

- mongo.js file : failed to connect to database.
- model folder
  - User.js
- middleware folder
  - auth.js : responsible for authentication before logout.
- server.js file : act like a main function in backend where everything gathers around.
- config folder
  - key.js : the simple logic switching between product mode and development mode.
  - prod.js : production mode
  - dev.js : development mode (hidden)

## each file in details

### failed mongo.js

mongo.js = the file that failed to connect mongo database

### model

model (User.js) == the schema of certain data structure and it has user-defined functions and methods.

### server.js

server (server.js) == the program that has `end-points (APIs)` and it is using a model object `user` from Users.js as well as methods implemented from the User.js as a methods for UserSchema. It also `connects the Mongo-db`, `CORS` and it is `listening the fetch request coming from client` through `listen()` function

mongoose.connect(): connecting MongoDB through mongoose library

```js
const config = require("./config/key");
// connecting mongoDb using mongoose
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
```

cors() in server.js : CORS error prevent by installing cors
CORS error = the port between two end-systems(client and server) are different. Therefore, there is a Cross-Origin Resource Sharing errors occurs. The client and server must be recognized from each other.

```js
const cors = require("cors");
app.use(cors());
```

listen() in server.js : listening fetch request coming from frontend

```js
const port = 8000;
app.listen(port, () => {
  console.log("port 8000 server is connected!");
});
```

### middleware

The folder is the collections of all middleware.
In this specific case, the `auth.js` is the middleware before accessing logout end-point api in server.js.

### config folder

This folder is for configuring the development mode and production mode of connecting to either MongoDB (during development mode) or to deploy on other storage (during production mode).
