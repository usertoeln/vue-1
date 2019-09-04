<!--***************************************-->
<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo"
                   v-model="newJob"
                   v-on:keydown.enter="AddNewJob()"
                   autofocus autocomplete="off"
                   placeholder="چه کاری میخواهی انجام بدهی ؟">
        </header>
        <section class="main">
            <input class="toggle-all" type="checkbox">
            <ul class="todo-list">
                <li v-for="(val,key) in filteredItems" :class="{completed:val.completed,editing:val===editedItem}"
                    :key="key">
                    <div class="view">
                        <input class="" type="checkbox" v-model="val.completed">
                        <label v-on:dblclick="editItem(val)">{{ val.title }}</label>
                        <button class="destroy" v-on:click="RemoveTask(key)"></button>
                    </div>
                    <input class="edit" type="text"
                           v-model="val.title"
                           @blur="downEdit(val)"
                           @keydown.enter="downEdit(val)">
                </li>
            </ul>
        </section>
        <footer class="footer">
		<span class="todo-count">
			<strong>{{ JobCounts | getCounts }}</strong>
		</span>
            <ul class="filters">
                <li>
                    <a :class="{selected : this.visibility==='all'}" @click="visibility='all'">همه</a>
                </li>
                <li>
                    <a :class="{selected : this.visibility==='active'}" @click="visibility='active'">فعال</a>
                </li>
                <li>
                    <a :class="{selected : this.visibility==='completed'}" @click="visibility='completed'">انجام شده</a>
                </li>
            </ul>
            <button class="clear-completed" v-on:click="RemoveAllItems()">
                ئاک کردن انجام شده ها
            </button>
        </footer>
    </section>
</template>
<!--***************************************-->
<script>
    let filters = {
        all: (items) => {
            return items;
        },
        active: function (items) {
            return items.filter(function (item) {
                return !item.completed;
            });
        },
        completed: (items) => {
            return items.filter(function (item) {
                return item.completed;
            });
        }
    };
    export default {
        name: "todo",
        data() {
            return {
                newJob: '',
                items: [],
                editedItem: null,
                visibility: 'all',
            }
        },
        methods: {
            AddNewJob() {
                if (!this.newJob)
                    return;
                this.items.push({
                    title: this.newJob,
                    completed: false
                });
                this.newJob = '';
            },
            RemoveTask(task) {
                this.items.pop(task);
            },
            RemoveAllItems() {
                this.items = [];
            },
            editItem(item) {
                this.editedItem = item;
            },
            downEdit(item) {
                if (!this.editedItem)
                    return;
                this.editedItem = null;
                if (!item.title)
                    this.RemoveTask(item.id);
            },
        },
        computed: {
            JobCounts() {
                return filters[this.visibility](this.items).length;
            },
            filteredItems() {
                return filters[this.visibility](this.items);
            }
        },
        filters: {
            getCounts: function (val) {
                return val + ' کار ';
            }
        },
    }
</script>
<!--***************************************-->
<style scoped>
</style>
<!--***************************************-->
