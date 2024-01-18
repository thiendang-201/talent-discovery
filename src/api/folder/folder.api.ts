import axios from '../axiosInstant'
import { PaginationPayload } from '../common.type'
import { CreateFolderPayload, FolderResponse, GetFolderPayload } from './folder.type'

export async function getFolderList(params: GetFolderPayload & PaginationPayload) {
  const res = await axios.get<FolderResponse>('/folder/all', { params })

  return res.data
}

export async function createFolder(payload: CreateFolderPayload) {
  await axios.post('/folder/create', payload)
}
