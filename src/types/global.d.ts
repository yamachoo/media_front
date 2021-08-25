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
