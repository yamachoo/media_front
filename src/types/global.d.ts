export type RegisterRequest = {
  name: string
  email: string
  password: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type CreatePictureRequest = {
  filename: string
  picture: string
}

export type GetPictureRequest = {
  id: string
}

export type User = {
  name: string
}

export type Picture = {
  id: string
  userId: number
  filename: string
  path: string
}

export type CustomFile = File & {
  preview: string
}
