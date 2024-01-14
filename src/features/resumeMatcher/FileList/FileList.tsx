import { ScrollArea } from '@components/ScrollView'
import { FileItem } from './FileItem'
import { GridView } from './FileList.styled'
import { FileListProps } from './FileList.type'

export function FileList({ files }: FileListProps) {
  return (
    <ScrollArea>
      <GridView>
        {files.map(file => (
          <FileItem key={file.id} {...file} />
        ))}
      </GridView>
    </ScrollArea>
  )
}
