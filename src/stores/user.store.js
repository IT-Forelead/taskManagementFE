import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        executors: [],
        controllers: [],
        selectedUser: {},
        user: {},
    }),
    actions: {
        setUsers(data) {
            this.users.push(...data)
        },
        setExecutors(data) {
            this.executors.push(...data)
        },
        setControllers(data) {
            this.controllers.push(...data)
        },
        setSelectedUser(data) {
            this.selectedUser = data
        },
        setUser(data) {
            this.user = data
        },
        clearExecutors() {
            this.executors = []
        },
        clearControllers() {
            this.controllers = []
        },
        clearStore() {
            this.users = []
            this.executors = []
            this.controllers = []
        },
    },
})