<template>
    <div>
        <add_post_view></add_post_view>
    </div>
</template>

<script>
    import add_post_view from './blog/blog';

    export default {
        name: "blog",
        components: {'add_post_view': add_post_view}
    }
</script>

<style scoped>

</style>