import { Pagination } from '../common.type'

export type Folder = {
  folder_id: string
  folder_name: string
  created_at: string
}

export type GetFolderPayload = {
  search_value: string
}

export type FolderResponse = Pagination<Folder>
