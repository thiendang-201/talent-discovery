import axios from '../axiosInstant'
import { PaginationPayload } from '../common.type'
import {
  CreateFolderPayload,
  EditFolderNamePayload,
  FolderResponse,
  GetFolderPayload,
} from './folder.type'

export async function getFolderList(params: GetFolderPayload & PaginationPayload) {
  const res = await axios.get<FolderResponse>('/folder/all', { params })

  return res.data
}

export async function createFolder(payload: CreateFolderPayload) {
  await axios.post('/folder/create', payload)
}

export async function updateFolder(payload: EditFolderNamePayload) {
  await axios.patch('/folder/update', payload)
}

export async function removeFolder(folder_id: string) {
  await axios.delete('/folder/remove/' + folder_id)
}
