<template>
    <div>
        <ul>
            <li v-for="(val,key) in persons" v-bind:id="key">{{ val }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "persons",
        data(){return{persons : ['melika','alireza','parisa']}}
    }
</script>

<style scoped>

</style>