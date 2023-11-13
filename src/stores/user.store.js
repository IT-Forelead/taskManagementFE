import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        selectedUser: {},
        user: {},
    }),
    actions: {
        setUsers(data) {
            this.users.push(...data)
        },
        setSelectedUser(data) {
            this.selectedUser = data
        },
        setUser(data) {
            this.user = data
        },
        clearStore() {
            this.users = []
        },
    },
})