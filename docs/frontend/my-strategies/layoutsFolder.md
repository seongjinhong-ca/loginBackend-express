# the reason I made a layouts folder:

The reason I made the layouts folder is to separate the NavLink and Route.

The `react-router-dom` is the library that provide the methods and tools to navigate between different pages. To make a navigation works properly, there are tags and components for `linking` and tags and components for creating a `Route`.

I have used belows for making a route:

1. createBrowserRouter()
2. createRoutesFromElements()
3. <Route>

App.js

```js
const router = createBrowserRouter(
  createRoutesFromElements(
    // I'm calling RootLayouts which stores all the links corresponding to the routes belows
    <Route path="/" element={<RootLayouts />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>
  )
);
```

I have used belows for making a link:

1. <NavLink>name of the link to click</NavLink>
2. <Outlet/>

RootLayouts.js

```js
<div className="root-layout">
  <header>
    <nav>
      <h1> routers navigation</h1>
      <NavLink to="/">Landing</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  </header>
  <main>
    <Outlet />
  </main>
</div>
```
