const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: [],
            tasksIsVisible: true
        }
    },
    computed: {
        buttonCaption() {
            return this.tasksIsVisible ? 'Hide' : 'Show'
        }
    },
    methods: {
        inputTasks() {
            this.tasks.push(this.taskValue);
        },
        showHideTasks() {
            this.tasksIsVisible = !this.tasksIsVisible;
        }
    }

});

app.mount('#assignment')