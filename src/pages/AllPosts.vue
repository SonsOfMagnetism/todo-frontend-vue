<template>
    <div>
        <div class="post" v-for="(post, index) in $attrs.posts" v-bind:key="index">
            <!-- <router-link :to="{name: 'post', params: {id, index}}"> -->
                <h1>{{post.title}}</h1>
            <!-- </router-link> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllPost"
    }
</script>

<style></style>