import { CreatePictureRequest } from '../../types/global'
import { server } from '../server'

export const createPictures = async (body: CreatePictureRequest) => {
  await server.post('/pictures', body)
}

export const getPictures = async () => {
  await server.get('/pictures')
}
