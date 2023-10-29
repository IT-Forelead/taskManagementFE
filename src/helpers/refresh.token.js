import { PublicAxiosService } from "../services/axios.service"

export async function refreshToken() {
  const oldSession = JSON.parse(localStorage.getItem('user'))
  try {
    /* REFRESH TOKEN REQUEST */
    const response = await PublicAxiosService.get('/auth/refresh/', {
      headers: {
        "X-CSRFToken": oldSession?.refresh,
      },
    })

    const session = response?.data
    if (!session?.access) {
      localStorage.removeItem('user')
    }

    localStorage.setItem('user', JSON.stringify(session))

    return session
  } catch (error) {
    if (error?.response?.status === 403 || error?.response?.status === 401) {
      alert("Your session has been expired!")
      localStorage.removeItem('user')
      window.location.reload()
    }
  }
}
