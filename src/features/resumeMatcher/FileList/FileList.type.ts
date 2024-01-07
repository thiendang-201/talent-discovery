import { FileItemProps } from './FileItem'

export type FileListProps = {
  displayMode?: 'grid' | 'list'
  files: FileItemProps[]
}
