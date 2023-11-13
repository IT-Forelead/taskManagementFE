import { defineStore } from 'pinia'

export const useUploadStore = defineStore('upload', {
    state: () => ({
        assetId: '',
        selectedAsset: {},
    }),
    actions: {
        setAssetId(data) {
            this.assetId = data
        },
        setSelectedAsset(data) {
            this.selectedAsset = data
        },
        clearStore() {
            this.assetId = ''
            this.selectedAsset = {}
        },
    },
})