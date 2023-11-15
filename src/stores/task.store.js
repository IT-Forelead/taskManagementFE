import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        selectedTask: {},
        selectedTaskId: '',
        tasksCounts: {},
    }),
    actions: {
        setTasks(data) {
            this.tasks.push(...data)
        },
        setSelectedTask(data) {
            this.selectedTask = data
        },
        setSelectedTaskId(data) {
            this.selectedTaskId = data
        },
        setTasksCounts(data) {
            this.tasksCounts = data
        },
        clearStore() {
            this.tasks = []
            this.selectedTask = {}
            this.selectedTaskId = ''
            this.tasksCounts = {}
        },
    },
})