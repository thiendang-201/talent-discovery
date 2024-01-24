import { ScrollArea } from '@components/ScrollView'
import { FileItem } from './FileItem'
import { GridView } from './FileList.styled'
import { FileListProps } from './FileList.type'

export function FileList({ files }: FileListProps) {
  return (
    <ScrollArea>
      <GridView>
        {files.map(file => (
          <FileItem
            key={file.resume_id}
            candidateName={file.full_name}
            jobTitle={file.job_title}
            id={file.resume_id}
            thumbnail={file.resume_thumbnail_url}
          />
        ))}
      </GridView>
    </ScrollArea>
  )
}
