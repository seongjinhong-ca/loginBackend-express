link: https://medium.com/age-of-awareness/amazing-new-stuff-in-react-router-v6-895ba3fab6af

overall code version 1:

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  /* All <Route path> and <Link to> values in this
     component will automatically be "mounted" at the
     /users URL prefix since the <Users> element is only
     ever rendered when the URL matches /users/*
  */
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
```

overall code version 2:

```js
Now let's check React router v6 code:

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="/" element={<UsersIndex />} />
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}
```

1. useRoute([...])

```js
let element = useRoutes([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: ":id", element: <UserProfile /> },
      { path: "me", element: <OwnUserProfile /> },
    ],
  },
]);
```

making parent layout:

```js
<Route path="/" element={<DashboardLayout />}>
  <Route path="/" element={<HomePage />} />
  <Route path=":id" element={<UserProfile />} />
  <Route path="me" element={<OwnUserProfile />} />
</Route>
```

using `useRoutes()`

```js
import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";

function App() {
  // The <BrowserRouter> element is removed from App because the
  // useRoutes hook needs to be in the context of a <BrowserRouter>
  // element.
  // Ex: <BrowserRouter><App /></BrowserRouter>.This is a common      // pattern with React Router apps that
  // are rendered in different environments. To render an <App>,
  // you'll need to wrap it in your own <BrowserRouter> element.
  let element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    { path: "/", element: <Home /> },
    {
      path: "users",
      element: <Users />,
      children: [
        { path: "/", element: <UsersIndex /> },
        { path: ":id", element: <UserProfile /> },
        { path: "me", element: <OwnUserProfile /> },
      ],
    },
  ]);

  return element;
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}
```
