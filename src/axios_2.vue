<template>
    <div>
        <div v-for="(item,index) in posts" :key="index">
            {{ item.title }}
        </div>
        <button class="btn btn-success" @click.prevent="getData()">Get server Data</button>
    </div>
</template>

<script>
    /* eslint-disable */
    const httt = require('axios');

    export default {
        name: "axios_2",
        data() {
            return {
                posts: null,
                serverData: null
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                httt.get('https://jsonplaceholder.typicode.com/todos', this.posts)
                    .then(function (e) {
                        console.log(e.data);
                    })
                    .catch(function (e) {
                        console.log(e);
                    })
                    .finally();
            }
        }
    }
</script>

<style scoped>

</style>