<template>
  <div class="app">
    <h1>Shopping List</h1>
    <router-link to="/new"><button>New Todo</button></router-link>
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
      const url = "https://todosapp.herokuapp.com/todo/"
      const posts = ref([])
      const getPosts = async () => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      posts.value = data
    } else {
      throw new Error(`HTTP error: ${response.status}`)
    }
  } catch (error) {
    console.error(error)
  }
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
  text-align: center;
}
</style>
