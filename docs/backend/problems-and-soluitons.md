# This document is about the problems/errors I have faced during my login backend implementation and how I overcome these issues.

Recently, some of the mongoose methods changed its syntax. Most of the methods are not accepting the callback function as a parameter.

error:

```sh
port 8000 server is connected!
MongoDB connected...
MongooseError: Model.findOneAndUpdate() no longer accepts a callback
    at Model.findOneAndUpdate (C:\Users\shawn\mern_express_mongoose_mongo\backend\node_modules\mongoose\lib\model.js:2374:11)
    at C:\Users\shawn\mern_express_mongoose_mongo\backend\server.js:174:10
    at Layer.handle [as handle_request] (C:\Users\shawn\mern_express_mongoose_mongo\backend\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\shawn\mern_express_mongoose_mongo\backend\node_modules\express\lib\router\route.js:144:13)
    at C:\Users\shawn\mern_express_mongoose_mongo\backend\middleware\auth.js:14:9
    at C:\Users\shawn\mern_express_mongoose_mongo\backend\models\User.js:94:20
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
```

`Mongoose` is the tool that make sever to save, search, create, updates the MongoDB once the database address(== URI) is connected with the server.

I have created the `User` `model` for making a `blue print` and for the purpose of storing user information using mongoose. so whenever, I call the model user, it can use the mongoose methods.

In the past, `Model.findOneAndUpdate()` can pass in the callback function as a last parameter. However, now, callback is not allowed.

- problem: callback cannot be used when I'm using mongoose methods.
- solution: instead of implementing in callback style, I choose either async/await pattern or use Promise.

using Promise:

```js
user
  .findOneAndUpdate({ _id: req.user._id }, { token: "" })
  .then(() => {
    // resolved 200 OK
    return res.status(200).send({ success: true });
  })
  .catch((err) => {
    //error handling
    return res.json({ success: false, err });
  });
```

async/await style:

```js
async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  // error handling
  if (!user) {
    return res.json({
      loginSuccess: false,
      message: "user does not exist with the given email",
    });
  }
  // if above condition is false === resolved 200 OK
};
```
