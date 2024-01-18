import { z } from 'zod'
import { folderSchema } from './FolderForm.constant'
import { SubmitHandler } from 'react-hook-form'

export type FolderFormValues = z.infer<typeof folderSchema>

export type SubmitFolderFormFn = SubmitHandler<FolderFormValues>
