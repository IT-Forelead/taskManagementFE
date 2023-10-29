import axios from 'axios'
import { refreshToken } from '../helpers/refresh.token.js'

export const PublicAxiosService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})


/* ALL AXIOS REQUESTS */
Axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem('user'))
    if (session?.access) {
      config.headers = {
        ...config.headers,
        "X-CSRFToken": session?.access,
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

/* ALL AXIOS RESPONSES */
Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true

      const result = await refreshToken()
      if (result?.access) {
        config.headers = {
          ...config.headers,
          "X-CSRFToken": result?.access,
        }
      }
      let res = await axios(config)
      return res
    }
    return Promise.reject(error)
  }
)

export const AxiosService = Axios