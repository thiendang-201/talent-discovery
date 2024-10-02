import { z } from 'zod'

export const folderSchema = z.object({
  folder_name: z.string().min(1, 'Vui lòng nhập tên thư mục'),
})

export const initialFolderFormValues = {
  folder_name: '',
}
