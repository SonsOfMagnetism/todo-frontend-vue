<template>
    <div>
        <div class="post" v-for="(post, index) in $attrs.posts" v-bind:key="index">
            <router-link :to="{name: 'post', params: {id: index}}">
                <h1>{{post.title}}</h1>
            </router-link>
                <input type="checkbox" v-model="post.completed">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllPost"
    }
</script>

<style>
    .post {
        text-align: center;
        border: 3px solid green;
        margin: 10px auto;
        width: 80%;
    }
</style>