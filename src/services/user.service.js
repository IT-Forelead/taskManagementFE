import { AxiosService } from './axios.service'

class UserService {
  async createUser(data) {
    return AxiosService.post('/users/create', data)
  }
  async getUsers(filter) {
    return AxiosService.post('/users', filter)
  }
}

export default new UserService()