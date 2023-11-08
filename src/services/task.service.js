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
}

export default new TaskService()