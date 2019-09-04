<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <!--<router-link :to="{name : 'home' }">Home</router-link>-->
            </div>
            <div class="col-3">
                <router-link :to="{name : 'page1' }">page1</router-link>
            </div>
            <div class="col-3">
                <router-link :to="{name : 'page2' }">page2</router-link>
            </div>
            <div class="col-3">
                <router-link :to="{name : 'dashboard' }">dashboard</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my_nav"
    }
</script>

<style scoped>

</style>