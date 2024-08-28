export interface Client {
  id: string
  firstName: string
  lastName: string
}

export interface UpdateClientDto {
  id: string
  firstName?: string
  lastName?: string
}
