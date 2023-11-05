import { AxiosService } from './axios.service'

class TaskService {
  async createTask(data) {
    return AxiosService.post('/tasks/create', data)
  }
  async getTasks(filter) {
    return AxiosService.post('/tasks', filter)
  }
  async updateTask(data) {
    return AxiosService.put(`/tasks/${data.taskId}`, data)
  }
}

export default new TaskService()