<template>
    <div class="container">
        <div class="row">
            <navigation></navigation>
        </div>
        <div class="row">
            <div class="col-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import navigation from './nav';

    export default {
        name: "home",
        components: {
            'navigation': navigation,
        }
    }
</script>

<style scoped>

</style>