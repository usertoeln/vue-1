<template>
    <div>
        <div class="container">
            <div class="raw">
                <div class="col-12">
                    <h4>Students List</h4>
                </div>
            </div>
        </div>
        <ol>
            <li v-for="(student,index) in students" :key="index">
                <span>{{ student.name + ' ' + student.last_name}}</span>
                <button @click="DeleteStudent(index)" class="ml-3">Delete Student</button>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "prisonersEditComponent",
        props: ['students'],
        methods: {
            DeleteStudent(index) {
                this.$emit('delete_std', index);
            }
        }
    }
</script>

<style scoped>

</style>