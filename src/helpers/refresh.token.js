import { PublicAxiosService } from "../services/axios.service"

export async function refreshToken() {
  const oldSession = JSON.parse(localStorage.getItem('session'))
  try {
    /* REFRESH TOKEN REQUEST */
    const response = await PublicAxiosService.get('/auth/refresh', {
      headers: {
        "X-CSRFToken": oldSession?.refresh,
      },
    })

    const session = response?.data
    if (!session?.access) {
      localStorage.removeItem('session')
    }

    localStorage.setItem('session', JSON.stringify(session))

    return session
  } catch (error) {
    if (error?.response?.status === 403 || error?.response?.status === 401) {
      alert("Your session has been expired!")
      localStorage.removeItem('session')
      window.location.reload()
    }
  }
}
