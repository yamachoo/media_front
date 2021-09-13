import type {
  CreatePictureRequest,
  GetPictureRequest,
  Picture
} from '../../types/global'
import { server } from '../server'

export const createPicture = async (body: CreatePictureRequest) => {
  await server.post('/pictures', body)
}

export const getPictures = async (): Promise<Picture[]> => {
  const { data } = await server.get('/pictures')
  return data
}

export const getPicture = async (body: GetPictureRequest): Promise<Picture> => {
  const { data } = await server.get(`/pictures/${body.id}`)
  return data
}
