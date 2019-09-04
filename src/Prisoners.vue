<template>
    <div id="app">
        <div class="container">
            <div class="raw mt-5">
                <div class="col-12">
                    <div class="alert alert-success">
                        <h1 class="text-center">Student Application</h1>
                    </div>
                    <hr>
                    <prisonersEditComponent :students="students"
                                            v-on:delete_std="delete_std($event)">
                    </prisonersEditComponent>

                    <prisonersInsertComponent></prisonersInsertComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import EventBus from './services/EventBus';
    import prisonersEditComponent from './components/prisoners/prisonersEdit';
    import prisonersInsertComponent from './components/prisoners/std_insert';

    export default {
        name: "Prisoners",
        data() {
            return {
                students: [
                    {id: 1, name: 'Alireza', last_name: 'Musavi'},
                    {id: 2, name: 'Parisa', last_name: 'Hanif'},
                    {id: 3, name: 'Melika', last_name: 'Musavi'},
                ],
                newStudent: [
                    {id: Math.round(Math.random() * 1000), name: null, last_name: null}
                ]
            }
        },
        components: {
            prisonersEditComponent: prisonersEditComponent,
            prisonersInsertComponent: prisonersInsertComponent,

        },
        methods: {
            delete_std(stdID) {
                this.students.pop(stdID);
            },
            insert_student($std) {
                if (!$std.name.trim() || !$std.last_name.trim())
                    return;
                this.students.push({
                    id: $std.id,
                    name: $std.name,
                    last_name: $std.last_name
                });
                $std.id = '';
                $std.name = '';
                $std.last_name = '';
            }
        },
        created() {
            EventBus.$on('insert_student', (data) => {
                this.insert_student(data);
            });
        }
    }
</script>

<style scoped>

</style>