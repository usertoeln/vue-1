<template>
    <div>
        <label for="stdName">Std Name:</label>
        <input type="text" v-model="newStudent.name" ref="name_ref" id="stdName">
        <label for="stdLastName">Last Name:</label>
        <input type="text" v-model="newStudent.last_name" @keydown.enter="insert_std(newStudent)" id="stdLastName">
        <button @click="insert_std(newStudent)">Add Student</button>
    </div>
</template>

<script>
    import EventBus from '../../services/EventBus';

    export default {
        name: "std_insert_component",
        data() {
            return {
                newStudent: {id: Math.round(Math.random() * 1000), name: '', last_name: ''}
            }
        },
        methods: {
            insert_std(newStudent) {
                EventBus.$emit('insert_student', newStudent);
                this.$refs.name_ref.focus();
            }
        }
    }
</script>

<style scoped>

</style>