import { HttpClient } from './httpClient'

export function login(payload) {
  return HttpClient.post('login', payload)
}
