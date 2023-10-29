import { AxiosService } from "./axios.service"

class DashboardService {
  async getCommonData() {
    return AxiosService.get('/dashboard/')
  }
}

export default new DashboardService()