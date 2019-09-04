<template>
    <ul>
        <li>
            <router-link :to="{name : 'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{name : 'MyProgram'}">MyProgram</router-link>
        </li>
        <li>
            <router-link :to="{name : 'PrisonersVue'}">PrisonersVue</router-link>
        </li>
        <li>
            <router-link :to="{name : 'Axios'}">Axios</router-link>
        </li>
        <li>
            <router-link :to="{name : 'Todo'}">Todo</router-link>
        </li>
        <li>
            <router-link :to="{name : 'Dynamics'}">Dynamics</router-link>
        </li>
        <li>
            <router-link :to="{name : 'blog'}">blog</router-link>
        </li>
        <li>
            <router-link :to="{name : 'CustomDirective'}">CustomDirective</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>