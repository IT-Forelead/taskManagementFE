import { PublicAxiosService } from "./axios.service";

class AuthService {
  async login(user) {
    return await PublicAxiosService.post("/auth/login", {
      username: user.login,
      password: user.password,
    })
  }

  async logout() {
    localStorage.clear();
  }
}

export default new AuthService();
