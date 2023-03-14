<template>
  <div class="post">
      <h1>{{post.title}}</h1>
      <h2>{{post.completed}}</h2>
      <router-link to="/"><button>Back to Main</button></router-link>
  </div>
</template>

<script>
// get useRoute hook to access to params
import { useRoute } from 'vue-router';
// getting toRefs hook to maintain props reactivity
import { toRefs } from 'vue';

    export default {
        name: "SinglePost",
        props: ['posts'],
        setup(props){
            // get route object to access params
            const route = useRoute()
            // retrieve posts from props
            const {posts} = toRefs(props)
            // grab target post from posts
            const post = posts.value[route.params.id]
            // return properties
            return {
                post
            }
        }
    }
</script>

<style>
    button {
        margin: 10px
    }
</style>