import { AxiosService } from './axios.service'

class TaskService {
  async createTask(data) {
    return AxiosService.post('/tasks/create', data)
  }
  async getTasks(filter) {
    return AxiosService.post('/tasks', filter)
  }
  async updateTask(id, data) {
    return AxiosService.put(`/tasks/${id}`, data)
  }
  async getTasksCounts() {
    return AxiosService.get('/tasks/counts')
  }
}

export default new TaskService()