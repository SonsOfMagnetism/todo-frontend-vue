/////////////////////////
// Components Imports
/////////////////////////
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import ShoppingList from "./pages/ShoppingList"
/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // main page that shows all todos
    {path: "/", component: AllPosts},
    // page for seeing an individual todo
    {path: "/post/:id", component: SinglePost, name: "post"},
    // route for creating a new todo
    {path: "/new", component: ShoppingList},
    // route for updating a todo
    {path: "/edit", component: ShoppingList},
]