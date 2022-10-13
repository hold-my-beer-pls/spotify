import Axios from 'axios'

export const config = {
  baseURL: 'https://yandex-music-cors-proxy.herokuapp.com/https://api.music.yandex.net:443',
  responseType: 'json' as const,
  withCredentials: true,
  headers: {},
}

/**
 * Default Axios client.
 */
export const client = Axios.create(config)
