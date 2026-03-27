export interface ContactPayload {
  name: string
  email: string
  message: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
