import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        selectedTask: {},
        selectedTaskId: '',
        tasksCounts: {},
        tasksComents: {},
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
        clearStore() {
            this.tasks = []
        },
        setTasksCounts(data) {
            this.tasksCounts = data
        },
        createTasksComments(data) {
            this.tasksComents = data
        }
    },
})