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
                <article class="px-3 mt-3" v-colored>{{ post.body }}</article>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import finderMixin from './mixins/finder_mixin';

    const http = require('axios');
    export default {
        name: "custom_directive_2",
        mixins: [finderMixin],
        data() {
            return {
                posts: [],
                txt_search: null,
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                http.get('https://jsonplaceholder.typicode.com/posts')
                    .then(e => {
                        this.posts = e.data;
                        // console.log(e.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        directives: {
            colored: {
                bind(el) {
                    el.style.color = '#aaaaaa';
                }
            }
        },
    }
</script>

<style scoped>

</style>