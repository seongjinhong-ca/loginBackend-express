things I changed:

1. Before:
   connecting backend port from frontend through setting up a proxy using `http-proxy-middleware` libraries and targeting the backend domain.

   After:
   connecting backend port from frontend through setting up an `axios` object as a `singleton`. Once, the `axios` object is made, the object doesn't need to create more than one axios object. The role of the object is to fetch the data from backend or send the data from frontend to backend.

When I am creating the `axios object`, create an file to store the domain + port information of backend as a constant and change the environment variable REACT_APP to be pointing to the domain I stored. So later, I can `easily switch between development environment to production environment`. Just like how `Macros` in C language where the Macros `change the setting of the source file based on what kind of operating system the source file is running` (either `Windows` based or `Linux` based)

instead of setting up proxy -> create .env file to separate the development environment and production environment. Creates an axios object once to do the api calls (fetching data) from frontend.

proxy setup:

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

//CORS
// from the frontend, set the target server port to be 8000.
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );
};
```

api_client.js + setting up CORS from backend server.js.

```js
import { axios } from "axios";

let instance;

export const getInstance = () => {
  if (!instance) {
    instance = axios.create({
      baseURL: process.env.REACT_APP_CHAT_APP_API,
    });
  }
  return instance;
};
```

LandingPage.js from frontend

```js
import React, { useEffect } from "react";
// import axios from 'axios';
import { getInstance } from "../../../utils/api_client";

function LandingPage() {
  useEffect(() => {
    getInstance()
      .get("/api/hello")
      .then((response) => console.log(response.data));
  }, []);
  return <div>This is landing page</div>;
}

export default LandingPage;
```

server.js

```js
// npm install cors
const cors = require("cors");

app.use(cors());
```
