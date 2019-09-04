<template>
    <div>
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import MyProgram from '../Prog_1';
    import PrisonersVue from '../Prisoners';
    import CustomDirective from '../custom_directives';
    import Navigation from './Navigation';

    export default {
        name: "home",
        components: {
            'MyProgram': MyProgram,
            'PrisonersVue': PrisonersVue,
            'CustomDirective': CustomDirective,
            'Navigation': Navigation,
        }
    }
</script>

<style scoped>

</style>