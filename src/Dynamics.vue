<template>
    <div>
        <keep-alive>
            <component :is="ViewType"></component>
        </keep-alive>
        <button @click="ChangeView()"> {{ btn_caption }}</button>
    </div>
</template>

<script>
    /* eslint-disable */
    import viewDevelopers from './components/Dynamics/developers';
    import viewDesigners from './components/Dynamics/designers';

    export default {
        name: "Dynamics",
        data() {
            return {
                ViewType: 'viewDevelopers',
                btn_caption: 'Display Designers Form'
            }
        },
        components: {
            'viewDevelopers': viewDevelopers,
            'viewDesigners': viewDesigners,
        },
        methods: {
            ChangeView() {
                if (this.ViewType === 'viewDevelopers') {
                    this.ViewType = 'viewDesigners';
                    this.btn_caption = 'Display Developer Form';
                } else {
                    this.ViewType = 'viewDevelopers';
                    this.btn_caption = 'Display Designers Form';
                }
            }
        }
    }
</script>

<style scoped>

</style>