<template>
    <form v-on:submit.prevent="handleSubmit">
        <input type="text" placeholder="subject" v-model="title"/>
        <input type="text" placeholder="subject" v-model="completed"/>
        <input type="submit" :value="buttonLabel"/>
    </form>
</template>

<script>
    // get router hooks
    import { useRoute, useRouter } from 'vue-router';
    // get vue hooks
    import {ref, toRefs} from "vue"
    export default {
        name: "ShoppingList",
        props: ["posts", "url", "getPosts"],
        setup(props) {
            const route = useRoute() // get route
            const router = useRouter() // get router
            const {posts, url, getPosts} = toRefs(props) //get posts from props
            const title = ref("") // variable for subject in form
            const completed = ref("") // variable for details in form
            console.log(url)
            let buttonLabel // label for submit button
            let handleSubmit // variable to hold submit function
            // If edit route setup for editing, if not setup for creating
            
            if (route.path === "/edit") {
                // get post to be edited from posts
                const post = posts.value.find((p) => p.id == route.params.id)
                // fill the form with that posts values
                title.value = post.title
                completed.value = post.completed
                console.log(post._id)
                // label for submit button
                buttonLabel = "edit todo"
                // define function to update
                handleSubmit = async() => {
                    await fetch(url.value + post._id + "/", {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title: title.value,
                            completed: completed.value,
                        })
                    })
                    getPosts.value()
                    router.push("/")
                }
            } else {
                // label for submit button
                buttonLabel = "create todo"
                // define function to create
                handleSubmit = async() => {
                    await fetch(url.value, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: title.value,
                            completed: completed.value
                        })
                    })
                    getPosts.value()
                    router.push("/")
                }
            }
            return {
                title,
                completed,
                handleSubmit,
                buttonLabel
            }
        }
    }
</script>

<style></style>