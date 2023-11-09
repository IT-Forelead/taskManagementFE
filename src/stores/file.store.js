import { defineStore } from 'pinia'

export const useFileStore = defineStore('file', {
    state: () => ({
        files: [],
        selectedFile: {},
    }),
    actions: {
        setFiles(assetId) {
            this.files.push(...assetId)
        },
        setSelectedFile(assetId) {
            this.selectedFile = assetId
        },
        clearStore() {
            this.files = []
        },
    },
})