<template>
    <div id="app">
        <div class="container">
            <div class="raw">
                <div class="col-12 mt-5">
                    <div class="alert alert-success">
                        <h1 class="text-center">Welcome to Automation System</h1>
                    </div>
                    <PersonsComponent></PersonsComponent>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PersonsComponent from './components/persons';

    export default {
        name: 'MyProgram',
        components:{PersonsComponent}
    }
</script>

<style>
</style>
