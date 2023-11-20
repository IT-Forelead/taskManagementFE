import { AxiosService } from './axios.service'

class SmsMessageService {
  async getSmsMessages(filter) {
    return AxiosService.post('/messages', filter)
  }
}

export default new SmsMessageService()
