/////////////////////////
// Components Imports
/////////////////////////
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // main page that shows all todos
    {path: "/", component: AllPosts},
    // page for seeing an individual todo
    {path: "/post/:id", component: SinglePost, name: "post"},
    // route for creating a new todo
    {path: "/new", component: Form},
    // route for updating a todo
    {path: "/edit", component: Form},
]