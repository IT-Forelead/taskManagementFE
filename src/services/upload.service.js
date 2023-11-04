import { AxiosService } from './axios.service'

class UploadService {
    async upload(file) {
        return AxiosService.post('/assets', file, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    async sendVerifyCode(assetId) {
        return AxiosService.get(`/assets/${assetId}`)
    }
}

export default new UploadService()