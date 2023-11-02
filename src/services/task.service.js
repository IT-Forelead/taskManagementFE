import { AxiosService } from './axios.service'

class TaskService {
  async createTask(data) {
    return AxiosService.post('/tasks', data)
  }
  async getTasks(filter) {
    return AxiosService.post('/tasks/report', filter)
  }
}

export default new TaskService()