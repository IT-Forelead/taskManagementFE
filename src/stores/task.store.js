import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        selectedTask: {},
    }),
    actions: {
        setTasks(data) {
            this.tasks.push(...data)
        },
        setSelectedTask(data) {
            this.selectedTask = data
        },
        clearStore() {
            this.tasks = []
        },
    },
})