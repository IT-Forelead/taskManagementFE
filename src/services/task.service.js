import { AxiosService } from './axios.service'

class TaskService {
  async createTask(data) {
    return AxiosService.post('/task/create', data)
  }
  async getTasks(filter) {
    return AxiosService.post('/tasks', filter)
  }
}

export default new TaskService()