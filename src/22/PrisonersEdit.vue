<template>
    <ul>
        <li v-for="zendani in zendaniha" :key="zendani.id">
            <h2>{{zendani.name}}</h2>
            <button @click="free(zendani.id)">آزاد کن !</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'prison',
        props: ['zendaniha'],
        methods: {
            free(id) {
                this.$emit('azadsazi', id)
            }
        }
    }
</script>
<style>
    h2 {
        display : inline-block;
    }
</style>

