import type { CreatePictureRequest, Picture } from '../../types/global'
import { server } from '../server'

export const createPictures = async (body: CreatePictureRequest) => {
  await server.post('/pictures', body)
}

export const getPictures = async (): Promise<Picture[]> => {
  const { data } = await server.get('/pictures')
  return data
}
