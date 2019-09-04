<template>
    <div class="container">
        <div class="raw">
            <div class="col-12">
                <div class="alert alert-success">
                    <h1 class="text-center">This is an Axios Application</h1>
                </div>
                <form @submit.prevent="sendViaAxios()">
                    <div class="form-group">
                        <label for="">Test Data for exios Name: </label>
                        <input type="text" v-model="axiosData.name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Test Data for exios Last Name: </label>
                        <input type="text" v-model="axiosData.fname" class="form-control">
                    </div>
                    <input type="submit" value="Send a form">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // import http from 'axios';
    const http = require('axios');
    export default {
        name: "axios",
        data() {
            return {
                axiosData: {
                    name: 'alireza', fname: 'musavi'
                }
            }
        },
        methods: {
            sendViaAxios() {
                http.get('https://jsonplaceholder.typicode.com/todos/1', this.axiosData)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    })
                    .finally(function (response) {
                        console.log(response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>