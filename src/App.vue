<template>
  <div class="app">
    <h1>Shopping List</h1>
    <router-view :posts="posts" :url="url" :getPosts="getPosts"/>
  </div>
</template>

<script>
import {ref, onMounted} from "vue" // import compostion API Hooks
  // ref hook allows the ability to create reactive variables
  // onMounted alows the code to execute when component mounts

  export default {
    name: "App",
    // Setup property allows us to use new composition api to define properties/methods
    // Returns an object with any properties/methods the component should have
    setup(props) {
      const url = "https://todosapp.herokuapp.com/todo"
      const posts = ref([])
      const getPosts = async () => {
        const response = await fetch(url)
        const data = await response.json()
        posts.value = await data
      }
      onMounted(() => getPosts())
      return {
        posts,
        getPosts,
        url,
        ...props,
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
