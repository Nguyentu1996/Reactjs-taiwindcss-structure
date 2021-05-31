import Request from './request'
import Configs from '../configs/env.config.json'

const endpoint = `${Configs.API_URL}`

const HttpClient = Request.create({
  endpoint,
  handleToken: true
})

export { HttpClient }
