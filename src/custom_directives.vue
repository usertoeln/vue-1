<template>
    <div class="container">
        <div class="raw">
            <div class="col-12">
                <div class="form-group bg-success p-3 mt-3 rounded">
                    <label for="txt_search">Search For:</label>
                    <input type="text" v-model="txt_search" class="form-control" id="txt_search">
                </div>
                <h1 class="text-muted">Posts : </h1>
            </div>
            <div class="alert alert-info col-10 offset-1" v-for="(post,index) in post_search" :key="index">
                <div class="h4">{{ post.id + ' ) ' + post.title }}</div>
                <article class="px-3 mt-3">{{ post.body }}</article>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    const http = require('axios');
    export default {
        name: "custom_directives",
        data() {
            return {
                posts: [],
                post_counter: 1,
                txt_search: null
            }
        },
        methods: {
            getPosts() {
                http.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        this.posts = response.data;
                        console.log(response.data);
                    })
                    .catch(response => {
                        // this.posts = [];
                        // console.log(response);
                    });
            }
        },
        created() {
            this.getPosts();
        },
        computed: {
            post_search() {
                return this.posts.filter(post => {
                    return post.title.match(this.txt_search);
                });
            }
        }
    }
</script>

<style scoped>

</style>