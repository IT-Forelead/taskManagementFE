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
  async createTaskComment(data) {
    return AxiosService.post('/tasks/comments', data)
  }
  async getTaskComments(taskId) {
    return AxiosService.get(`/tasks/comments/${taskId}`)
  }
  async editTask(taskId, data) {
    return AxiosService.put(`/tasks/edit/${taskId}`, data)
  }
}

export default new TaskService()