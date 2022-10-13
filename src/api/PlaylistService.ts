import {client} from './axios'

export async function getList(userId: string): Promise<any> {
  const { data } = await client.get<any>(`/users/${userId}/playlists/list`)

  return data
}

export async function getTracks(userId: string, listId: string): Promise<any> {
  const { data } = await client.get<any>(`/users/${userId}/playlists/${listId}`)

  return data
}
